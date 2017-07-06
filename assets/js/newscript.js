/* global $ alert */

var game = {
  startBtn: $('.startBtn'),
  mole: $('.mole'),
  scoreboard: $('.scoreboard'),
  holes: $('.holeBackground'),
  levelCounter: $('.levelCounter'),
  // ouch: $('.ouch'),
  score: 0,
  mistake: 0,
  clickable: true,
  $hole: '',
  // timer: 1500,

  startGame: function () {
    this.startBtn.on('click', () => {
      this.startTimeInterval(1500)
    })
  },

  startTimeInterval: function (time) {
    this.timeInterval = setInterval(this.gRandomMole.bind(this), time)
  },

  gRandomMole: function () {
    var index = Math.floor(Math.random() * 7)
    this.$hole = $('#' + $(this.holes[index]).attr('id'))

    this.mole.toggleClass('hidden')
    this.mole.appendTo(this.$hole)
    this.clickable = true
  },

  checkScore: function (holeId) {
    if (this.clickable === true) {
      if (this.$hole.attr('id') === holeId) {
        this.clickable = false
        this.score ++
        this.scoreboard.text('Score: ' + this.score)
        this.levelUp()
        // this.ouch.removeClass('.hidden')
        // this.ouch.appendTo(this.$hole)
      } else {
        this.mistake ++
        if (this.mistake === 5) {
          alert('Total Score: ' + this.score + '! Try again!')
        }
      }
    }
  },

  levelUp: function () {
    if (this.score >= 5) {
      clearInterval(this.timeInterval)
      this.startTimeInterval(500)
    }
  }
}

$(document).ready(function () {
  game.startGame()

  $(document).keypress((event) => {
    game.checkScore(event.key)
  })
})
