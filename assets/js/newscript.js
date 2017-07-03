
/* global $ */

var game = {
  startBtn: $('.startBtn'),
  moles: $('.mole'),
  randomNum: Math.floor(Math.random() * 7),

  startGame: function () {
    console.log(this.moleAppear)
    this.startBtn.on('click', () => {
      setInterval(this.moleAppear.bind(this), 1000)
    })
  },

  moleAppear: function () {
    var randomMole = this.moles[this.randomNum]
    if (randomMole.classList.contains('hidden')) {
      randomMole.classList.remove('hidden')
    } else {
      randomMole.classList.add('hidden')
    }
  }

}

$(document).ready(game.startGame())
