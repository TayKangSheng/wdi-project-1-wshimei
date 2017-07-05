/* global $ */

var game = {
  startBtn: $('.startBtn'),
  mole: $('.mole'),
  scoreboard: $('.scoreboard'),
  // holes: ['t', 'y', 'u', 'f', 'g', 'h', 'j'],
  holes: $('.holeBackground'),
  score: 0,
  mistake: 0,
  clickable: true,

  startGame: function () {
    this.startBtn.on('click', () => {
      setInterval(this.gRandomMole.bind(this), 3000)
      this.checkScore(this.holes)
    })
  },

  gRandomMole: function () {
    var index = Math.floor(Math.random() * 7)
    // var index = 1
    // var hole = $('#' + this.holes[index])
    var hole = $('#' + $(this.holes[index]).attr('id'))
    console.log($(this.holes[index]).attr('id'))

    this.mole.toggleClass('hidden')
    this.mole.appendTo(hole)
    // console.log('this holes[index]: ' + this.holes[index])
  },

  checkScore: function (hole) {
    // loop every h_arr
    for (var i = 0; i < hole.length; i++) {
      console.log(hole[i])

      // console.log($(hole[i]).attr('id'))
    }

      // $(document).keypress((event) => {
      //   console.log('holes: ' + hole[i])
      //   console.log('e.key: ' + event.key)
      //   if (event.key === hole[i]) {
      //     if (this.clickable === true) {
      //       this.clickable = false
      //       this.score ++
      //       this.scoreboard.text('Score: ' + this.score)
      //       // console.log(this.clickable)
      //     }
      //     // } else {
      //     //   this.mistake ++
      //     //   if (this.mistake === 5) {
      //     //     alert('gameover')
      //     // }
      //   }
      // })
      // this.clickable = true
  }

}

$(document).ready(game.startGame())
