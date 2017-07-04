/* global $ */

var game = {
  startBtn: $('.startBtn'),
  mole: $('.mole'),
  holes: ['t', 'y', 'u', 'f', 'g', 'h', 'j'],
  scoreboard: $('.scoreboard'),
  score: 0,
  clickable: true,

  startGame: function () {
    this.startBtn.on('click', () => {
      setInterval(this.gRandomMole.bind(this), 1000)
    })
  },

  gRandomMole: function () {
    var index = Math.floor(Math.random() * 7)
    var hole = $('#' + this.holes[index])

    this.mole.toggleClass('hidden')
    this.mole.appendTo(hole)

    $(document).keypress((e) => {
      if (e.key === this.holes[index]) {
        if (this.clickable === true) {
          this.clickable = false
          this.score ++
          this.scoreboard.text('Score: ' + this.score)
          console.log(this.clickable)
        }
      }
    })
    this.clickable = true
  }
}

$(document).ready(game.startGame())
