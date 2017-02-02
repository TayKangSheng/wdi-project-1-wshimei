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
    var appearInterval = 1000
    var disappearInterval = 2000

    if (score === 10) {
      appearInterval = 800
      disappearInterval = 1300
    } else if (score === 25) {
      appearInterval = 300
      disappearInterval = 550
    }

    setInterval(function () {
      console.log('mole appear interval')
      moleAppear(randomNum)
    }, appearInterval)

    setInterval(function () {
      console.log('mole disappear interval')
      moleDisappear(randomNum)
      randomNum = Math.floor(Math.random() * 7)
    }, disappearInterval)
  })

  $(document).keypress(function (e) {
    if (e.key === randomMole.parentNode.id) {
      randomMole.classList.add('hidden')
      whacked.classList.remove('hidden')

      score += 1
      scoreboard.textContent = 'Score: ' + score
      if (score === 10) {
        level.textContent = 'Level: 2'
      }
      if (score === 25) {
        level.textContent = 'Level: 3'
      }
      if (score === 50) {
        alert('WAY TO GO! You scored 50 points! PLAY AGAIN!')
        reset()
      }

    } else if (e.key !== randomMole.parentNode.id) {
      mistake += 1
      if (mistake === 3) {
        alert('Too bad! You scored ' + score + ' points. Try again to score 50 points!')
        reset()
      }
    }
    setTimeout(function () {
      whacked.classList.add('hidden')
    }, 400)
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

  function reset () {
    score = 0
    level.textContent = 'Level: 1'
    window.location.reload(false)
  }
})
