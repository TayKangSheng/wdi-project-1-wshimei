/* global $ */

var game = {
  startBtn: $('.startBtn'),
  mole: $('.mole'),
  scoreboard: $('.scoreboard'),
  holes: ['t', 'y', 'u', 'f', 'g', 'h', 'j'],
  score: 0,
  mistake: 0,
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
    this.checkScore(index)
  },

  checkScore: function (holeIndex) {
    $(document).keypress((e) => {
      if (e.key === this.holes[holeIndex]) {
        if (this.clickable === true) {
          this.clickable = false
          this.score ++
          this.scoreboard.text('Score: ' + this.score)
          console.log(this.clickable)
        }
      // } else {
      //   this.mistake ++
      //   if (this.mistake === 5) {
      //     alert('gameover')
        // }
      }
    })
    this.clickable = true
    console.log(this.clickable)
  }
}

$(document).ready(game.startGame())
