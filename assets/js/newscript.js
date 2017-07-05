/* global $ */

var game = {
  startBtn: $('.startBtn'),
  mole: $('.mole'),
  scoreboard: $('.scoreboard'),
  holes: $('.holeBackground'),
  score: 0,
  mistake: 0,
  clickable: true,
  $hole: '',

  startGame: function () {
    this.startBtn.on('click', () => {
      setInterval(this.gRandomMole.bind(this), 1000)
      // this.checkScore(this.holes)
    })
  },

  gRandomMole: function () {
    var index = Math.floor(Math.random() * 7)
    this.$hole = $('#' + $(this.holes[index]).attr('id'))

    this.mole.toggleClass('hidden')
    this.mole.appendTo(this.$hole)
  },

  checkScore: function (holeId) {
    console.log(this.$hole.attr('id'))
    console.log(holeId)
    // console.log($clickedHole.find('img').length)
    if (this.$hole.attr('id') === holeId) {
      if (this.clickable === true) {
        this.clickable = false
        console.log(true)
      }
      this.score ++
      this.scoreboard.text('Score: ' + this.score)
    } else {
      this.mistake ++
      if (this.mistake === 5) {
        alert('gameover')
      }
      console.log(false)
    }
  }
    // loop every h_arr
    // $(document).keypress((event) => {
    //   for (var i = 0; i < hole.length; i++) {
    //     console.log('holeId: ' + $(this.holes[i]).attr('id'))
    //     console.log('e.key: ' + event.key)
    //   // console.log(i)
    //     if (event.key === $(this.holes[i]).attr('id')) {
    //     } else {
    //       return false
    //     }
    //   }
    // })

    // check if that element with id = holeId has mole in it

    // $(document).keypress((event) => {
    //
    //   if (event.key === hole[i]) {
    //     if (this.clickable === true) {
    //       this.clickable = false
    //       this.score ++
    //       this.scoreboard.text('Score: ' + this.score)
    //         // console.log(this.clickable)
    //     }
    //       // } else {
    //       //   this.mistake ++
    //       //   if (this.mistake === 5) {
    //       //     alert('gameover')
    //       // }
    //   }
    // })
    // this.clickable = true
}

$(document).ready(function () {
  game.startGame()

  $(document).keypress((event) => {
    game.checkScore(event.key)
  })
})
