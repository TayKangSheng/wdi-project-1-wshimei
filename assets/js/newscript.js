
/* global $ */

var game = {
  startBtn: $('.startBtn'),
  moles: $('.mole'),

  gRandomNum: function () {
    Math.floor(Math.random() * 7)
  },

  startGame: function () {
    console.log(this.moleAppear)
    this.startBtn.on('click', () => {
      setInterval(this.moleAppear.bind(this), 1000)
      this.gRandomNum()
    })
  },

  moleAppear: function () {
    var randomNum = Math.floor(Math.random() * 7)
    var randomMole = this.moles[randomNum]
    console.log(randomNum);
    randomMole.classList.toggle('hidden')
  }

}

$(document).ready(game.startGame())
