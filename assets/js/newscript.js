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
      setInterval(this.gRandomMole.bind(this), 3000)
    })
  },

  gRandomMole: function () {
    var index = Math.floor(Math.random() * 7)
    var hole = $('#' + this.holes[index])

    this.mole.toggleClass('hidden')
    this.mole.appendTo(hole)
    this.checkScore(this.holes[index])
    console.log('this holes[index]: ' + this.holes[index])
  },

  checkScore: function (h) {
    $(document).keypress((e) => {
      console.log('h: ' + h)
      console.log('e.key: ' + e.key)
      if (e.key === h) {
        if (this.clickable === true) {
          this.clickable = false
          this.score ++
          this.scoreboard.text('Score: ' + this.score)
          // console.log(this.clickable)
        }
      // } else {
      //   this.mistake ++
      //   if (this.mistake === 5) {
      //     alert('gameover')
        // }
      }
    })
    this.clickable = true
  }
}

$(document).ready(game.startGame())
