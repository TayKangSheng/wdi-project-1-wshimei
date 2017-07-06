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
  moleAppearTime: 300,

  startGame: function () {
    this.startBtn.on('click', () => {
      this.startTimeOut()
    })
  },

  startTimeOut: function () {
    setTimeout(this.gRandomMole.bind(this), this.timer)
    if (!this.mole.hasClass('hidden')) {
      this.removeMole()
    }
  },

  removeMole: function () {
    setTimeout(() => {
      this.mole.addClass('hidden animated slideInDown')
    }, this.timer - this.moleAppearTime)
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

  checkScore: function (keyPress) {
    if (this.clickable === true) {
      console.log(this.$hole.attr('id'))
      if (this.$hole.attr('id') === keyPress) {
        this.clickable = false
        this.ouch.removeClass('hidden')
        this.mole.addClass('hidden animated slideInDown')

        this.score ++
        this.scoreboard.text('Score: ' + this.score)
      } else {
        this.mistake ++

        if (this.mistake === 2) {
          alert('GAME OVER! Total Score: ' + this.score + '! Try again!')
          this.gameOver()
        }
      }
      this.levelUp()
    }
  },

  levelUp: function () {
    this.timer *= 0.98
    this.moleAppearTime *= 0.98
  },

  gameOver: function () {
    location.reload()
  }
}

$(document).ready(function () {
  game.startGame()

  $(document).keypress((event) => {
    var holeIds = $('.holes div[id]')         // find spans with ID attribute
                  .map(function () { return this.id }) // convert to set of IDs
                  .get()

    if (holeIds.includes(event.key)) {
      game.checkScore(event.key)
    }
  })
})
