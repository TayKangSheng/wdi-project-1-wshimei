$(document).ready(function () {
  var moles = document.querySelectorAll('.mole')
  var ouch = document.querySelectorAll('.ouch')
  var startBtn = document.querySelector('button')
  var scoreboard = document.querySelector('.score')
  var level = document.querySelector('.level')
  var score = 0
  var mistake = 0
  var randomMole
  var whacked

  startBtn.addEventListener('click', function () {
    var randomNum = Math.floor(Math.random() * 7)
    var appearInterval = 1500
    var disappearInterval = 2500

    if (score === 10) {
      appearInterval = 750
      disappearInterval = 1400
      level.innerHTML = 'Level: 2'
    } else if (score === 25) {
      appearInterval = 375
      disappearInterval = 500
      level.innerHTML = 'Level: 3'
    }

    setInterval(function () {
      moleAppear(randomNum)
    }, appearInterval)

    setInterval(function () {
      moleDisappear(randomNum)
      randomNum = Math.floor(Math.random() * 7)
    }, disappearInterval)
  })

  function moleAppear (i) {
    randomMole = moles[i]
    whacked = ouch[i]
    randomMole.classList.remove('hidden')
  }

  function moleDisappear (i) {
    randomMole = moles[i]
    whacked = ouch[i]
    randomMole.classList.add('hidden')
  }

  $(document).keypress(function (e) {
    if (e.key === randomMole.parentNode.id) {
      randomMole.classList.add('hidden')
      whacked.classList.remove('hidden')
      score += 1
      scoreboard.textContent = 'Score: ' + score
      gameOver()

      setTimeout(function () {
        whacked.classList.add('hidden')
      }, 300)
    } else if (e.key !== randomMole.parentNode.id) {
      mistake += 1
      console.log(mistake)
      gameLost()
    }
  })

  function gameLost () {
    if (mistake === 3) {
      alert('Too bad, try again?')
      score = 0
      reset()
    }
  }

  function gameOver () {
    if (score === 50) {
      alert('WAY TO GO! PLAY AGAIN!')
      reset()
    }
  }

  function reset () {
    score = 0
    level.textContent = 'Level: 1'
    window.location.reload(false)
  }
})
