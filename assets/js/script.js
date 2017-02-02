$(document).ready(function () {
  var sfx = new Audio('./SFX/punch2.mp3')
  var moles = document.querySelectorAll('.mole')
  var ouch = document.querySelectorAll('.ouch')
  var startBtn = document.querySelector('button')
  var scoreboard = document.querySelector('.score')
  var level = document.querySelector('.level')
  var score = 0
  var mistake = 0
  var clickable = false
  var randomMole
  var whacked

  startBtn.addEventListener('click', function () {
    var randomNum = Math.floor(Math.random() * 7)
    var appearInterval = 2000
    var disappearInterval = 4000

    if (score > 10) {
      appearInterval = 1000
      disappearInterval = Math.floor((Math.random() * (3000 - 2000)) + 2000)
    } else if (score > 25) {
      appearInterval = 500
      disappearInterval = Math.floor((Math.random() * (2000 - 1000)) + 1000)
    }

    setInterval(function () {
      moleAppear(randomNum)
    }, appearInterval)

    setInterval(function () {
      moleDisappear(randomNum)
      randomNum = Math.floor(Math.random() * 7)
    }, disappearInterval)
  })

  $(document).keypress(function (e) {
    if (e.key === randomMole.parentNode.id) {
      sfx.play()
      randomMole.classList.add('hidden')
      if (clickable === true) {
        clickable = false
        score += 1
        whacked.classList.remove('hidden')
        var clearWhack = whacked
        setTimeout(function () {
          clearWhack.classList.add('hidden')
        }, 400)
      }

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
      if (e.key === 't' || e.key === 'y' || e.key === 'u' || e.key === 'f' || e.key === 'g' || e.key === 'h' || e.key === 'j') {
        mistake += 1
        if (mistake === 3) {
          alert('Too bad! You scored ' + score + ' points. Try again to score 50 points!')
          reset()
        }
      }
    }
  })

  function moleAppear (i) {
    clickable = true
    randomMole = moles[i]
    whacked = ouch[i]
    // if mole already appear don't do anything
    if (!randomMole.classList.contains('hidden')) {
      return
    }
    randomMole.classList.remove('hidden')
  }

  function moleDisappear (i) {
    randomMole = moles[i]
    whacked = ouch[i]
    // if mole already disappear don't do anything
    if (randomMole.classList.contains('hidden')) {
      return
    }
    randomMole.classList.add('hidden')
  }

  function reset () {
    score = 0
    level.textContent = 'Level: 1'
    document.location.href = ''
  }
})
