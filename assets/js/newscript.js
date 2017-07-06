/* global $ alert location */

var game = {
  startBtn: $('.startBtn'),
  mole: $('.mole'),
  scoreboard: $('.scoreboard'),
  holes: $('.holeBackground'),
  ouch: $('.ouch'),
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
    setTimeout(this.gRandomMole.bind(this), this.timer)
    this.removeMole()
  },

  removeMole: function () {
    setTimeout(() => {
      this.mole.addClass('hidden animated slideInDown')
    }, this.timer - 500)
  },

  gRandomMole: function () {
    var index = Math.floor(Math.random() * 7)
    this.$hole = $('#' + $(this.holes[index]).attr('id'))

    this.mole.removeClass('hidden').addClass('animated slideInUp')
    this.mole.appendTo(this.$hole)

    this.ouch.addClass('hidden')
    this.ouch.appendTo(this.$hole.parent())

    this.clickable = true

    this.startTimeOut()
  },

  checkScore: function (holeId) {
    if (this.clickable === true) {
      if (this.$hole.attr('id') === holeId) {
        this.clickable = false
        this.ouch.removeClass('hidden')
        this.mole.addClass('hidden animated slideInDown')

        this.score ++
        this.scoreboard.text('Score: ' + this.score)
      } else {
        this.mistake ++
        if (this.mistake === 5) {
          alert('Total Score: ' + this.score + '! Try again!')
          this.gameOver()
        }
      }
      this.levelUp()
    }
  },

  levelUp: function () {
    this.timer *= 0.98
  },

  gameOver: function () {
    location.reload()
  }
}

$(document).ready(function () {
  game.startGame()

  $(document).keypress((event) => {
    game.checkScore(event.key)
  })
})
