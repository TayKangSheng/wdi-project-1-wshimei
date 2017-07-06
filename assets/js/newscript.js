/* global $ alert */

var game = {
  startBtn: $('.startBtn'),
  mole: $('.mole'),
  scoreboard: $('.scoreboard'),
  holes: $('.holeBackground'),
  // ouch: $('.ouch'),
  score: 0,
  mistake: 0,
  clickable: true,
  $hole: '',
  timer: 1500,

  startGame: function () {
    this.startBtn.on('click', () => {
      this.startTimeOut()
    })
  },

  startTimeOut: function () {
    console.log('timer now is', this.timer)
    setTimeout(this.gRandomMole.bind(this), this.timer)
  },

  gRandomMole: function () {
    var index = Math.floor(Math.random() * 7)
    this.$hole = $('#' + $(this.holes[index]).attr('id'))

    this.mole.toggleClass('hidden')
    this.mole.appendTo(this.$hole)
    this.clickable = true

    this.startTimeOut()
  },

  checkScore: function (holeId) {
    if (this.clickable === true) {
      if (this.$hole.attr('id') === holeId) {
        this.clickable = false
        this.score ++
        this.scoreboard.text('Score: ' + this.score)
        // this.ouch.removeClass('.hidden')
        // this.ouch.appendTo(this.$hole)
      } else {
        this.mistake ++
        if (this.mistake === 5) {
          alert('Total Score: ' + this.score + '! Try again!')
        }
      }
      this.levelUp()
    }
  },

  levelUp: function () {
    this.timer *= 0.95
  }
}

$(document).ready(function () {
  game.startGame()

  $(document).keypress((event) => {
    game.checkScore(event.key)
  })
})
