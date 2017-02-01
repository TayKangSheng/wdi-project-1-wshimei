$(document).ready(function () {
   // var level = 1
   // var timer = 0
  var moles = document.querySelectorAll('.mole')
  var ouch = document.querySelectorAll('.ouch')
  var startBtn = document.querySelector('button')
  var scoreboard = document.querySelector('.score')
  var level = document.querySelector('.level')
  var score = 0
  var mistake = 0
  var randomMole
  var whacked

  function moleAppear (i) {
    console.log('moleAppear setTimeout')
    randomMole = moles[i]
    whacked = ouch[i]
    randomMole.classList.remove('hidden')
  }

  function moleDisappear (i) {
    console.log('moleDisappear setTimeout')
    randomMole = moles[i]
    whacked = ouch[i]
    randomMole.classList.add('hidden')
  }

  $(document).keypress(function (e) {
    // var mole = document.querySelector('.mole')
    if (e.key === randomMole.parentNode.id) {
      randomMole.classList.add('hidden')
      whacked.classList.remove('hidden')
      score += 1
      scoreboard.textContent = 'Score: ' + score

      setTimeout(function () {
        whacked.classList.add('hidden')
      }, 500)
    } else if (e.key !== randomMole.parentNode.id) {
      mistake += 1
    }
  })

  // function levelTwo () {
  //   if (score === 10) {
  //     level.textContent = 'Level: 2'
  //     setInterval(moleAppear, 2000)
  //   }
  //   levelThree()
  // }
  //
  // function levelThree () {
  //   if (score === 30) {
  //     level.textContent = 'Level: 3'
  //     setInterval(moleAppear, 1000)
  //   }
  //   gameOver()
  // }

  startBtn.addEventListener('click', function () {
    var randomNum = Math.floor(Math.random() * 7)
    
    // TODO
    // change the appearInterval upon score change

    var appearInterval = 1500

    // if (score === 10) {
    //   appearInterval = 750
    //   level.textContent = 'Level: 2'
    // } if (score === 25) {
    //   appearInterval = 375
    //   level.textContent = 'Level: 3'
    // }

    var disappearInterval = 2500

    // if (score === 10) {
    //   appearInterval = 1400
    // } else if (score === 25) {
    //   appearInterval = 500
    // }

    setInterval(function () {
      moleAppear(randomNum)
    }, appearInterval)

    setInterval(function () {
      moleDisappear(randomNum)
      randomNum = Math.floor(Math.random() * 7)
    }, disappearInterval)

  })

  function gameLost () {
    if (mistake === 2) {
      alert('Too bad, try again?')
      score = 0
      level.textContent = 'Level: 1'
      window.location.reload(false)
    }
  }

  function gameOver () {
    if (score === 50) {
      alert('WAY TO GO! PLAY AGAIN?')
      score = 0
      level.textContent = 'Level: 1'
      window.location.reload(false)
    }
  }
})
