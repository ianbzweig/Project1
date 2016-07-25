"use strict";
var deck = [
  {
    suit: 'clubs',
    value: '2',
    points: 1,
    img: 'images/1.png',
  },
  {
    suit: 'clubs',
    value: '3',
    points: 1,
    img: 'images/2.png',
  },
  {
    suit: 'clubs',
    value: '4',
    points: 1,
    img: 'images/3.png',
  },
  {
    suit: 'clubs',
    value: '5',
    points: 1,
    img: 'images/4.png',
  },
  {
    suit: 'clubs',
    value: '6',
    points: 1,
    img: 'images/5.png',
  },
  {
    suit: 'clubs',
    value: '7',
    points: 0,
    img: 'images/6.png',
  },
  {
    suit: 'clubs',
    value: '8',
    points: 0,
    img: 'images/7.png',
  },
  {
    suit: 'clubs',
    value: '9',
    points: 0,
    img: 'images/8.png',
  },
  {
    suit: 'clubs',
    value: '10',
    points: 1,
    img: 'images/9.png',
  },
  {
    suit: 'clubs',
    value: 'J',
    points: -1,
    img: 'images/10.png',
  },
  {
    suit: 'clubs',
    value: 'Q',
    points: -1,
    img: 'images/11.png',
  },
  {
    suit: 'clubs',
    value: 'K',
    points: -1,
    img: 'images/12.png',
  },
  {
    suit: 'clubs',
    value: 'A',
    points: -1,
    img: 'images/13.png',
  },
  {
    suit: 'spades',
    value: '2',
    points: 1,
    img: 'images/14.png',
  },
  {
    suit: 'spades',
    value: '3',
    points: 1,
    img: 'images/15.png',
  },
  {
    suit: 'spades',
    value: '4',
    points: 1,
    img: 'images/16.png',
  },
  {
    suit: 'spades',
    value: '5',
    points: 1,
    img: 'images/17.png',
  },
  {
    suit: 'spades',
    value: '6',
    points: 1,
    img: 'images/18.png',
  },
  {
    suit: 'spades',
    value: '7',
    points: 0,
    img: 'images/19.png',
  },
  {
    suit: 'spades',
    value: '8',
    points: 0,
    img: 'images/20.png',
  },
  {
    suit: 'spades',
    value: '9',
    points: 0,
    img: 'images/21.png',
  },
  {
    suit: 'spades',
    value: '10',
    points: -1,
    img: 'images/22.png',
  },
  {
    suit: 'spades',
    value: 'J',
    points: -1,
    img: 'images/23.png',
  },
  {
    suit: 'spades',
    value: 'Q',
    points: -1,
    img: 'images/24.png',
  },
  {
    suit: 'spades',
    value: 'K',
    points: -1,
    img: 'images/25.png',
  },
  {
    suit: 'spades',
    value: 'A',
    points: -1,
    img: 'images/26.png',
  },
  {
    suit: 'hearts',
    value: '2',
    points: 1,
    img: 'images/27.png',
  },
  {
    suit: 'hearts',
    value: '3',
    points: 1,
    img: 'images/28.png',
  },
  {
    suit: 'hearts',
    value: '4',
    points: 1,
    img: 'images/29.png',
  },
  {
    suit: 'hearts',
    value: '5',
    points: 1,
    img: 'images/30.png',
  },
  {
    suit: 'hearts',
    value: '6',
    points: 1,
    img: 'images/31.png',
  },
  {
    suit: 'hearts',
    value: '7',
    points: 0,
    img: 'images/32.png',
  },
  {
    suit: 'hearts',
    value: '8',
    points: 0,
    img: 'images/33.png',
  },
  {
    suit: 'hearts',
    value: '9',
    points: 0,
    img: 'images/34.png',
  },
  {
    suit: 'hearts',
    value: '10',
    points: -1,
    img: 'images/35.png',
  },
  {
    suit: 'hearts',
    value: 'J',
    points: -1,
    img: 'images/36.png',
  },
  {
    suit: 'hearts',
    value: 'Q',
    points: -1,
    img: 'images/37.png',
  },
  {
    suit: 'hearts',
    value: 'K',
    points: -1,
    img: 'images/38.png',
  },
  {
    suit: 'hearts',
    value: 'A',
    points: -1,
    img: 'images/39.png',
  },
  {
    suit: 'diamonds',
    value: '2',
    points: 1,
    img: 'images/40.png',
  },
  {
    suit: 'diamonds',
    value: '3',
    points: 1,
    img: 'images/41.png',
  },
  {
    suit: 'diamonds',
    value: '4',
    points: 1,
    img: 'images/42.png',
  },
  {
    suit: 'diamonds',
    value: '5',
    points: 1,
    img: 'images/43.png',
  },
  {
    suit: 'diamonds',
    value: '6',
    points: 1,
    img: 'images/44.png',
  },
  {
    suit: 'diamonds',
    value: '7',
    points: 0,
    img: 'images/45.png',
  },
  {
    suit: 'diamonds',
    value: '8',
    points: 0,
    img: 'images/46.png',
  },
  {
    suit: 'diamonds',
    value: '9',
    points: 0,
    img: 'images/47.png',
  },
  {
    suit: 'diamonds',
    value: '10',
    points: -1,
    img: 'images/48.png',
  },
  {
    suit: 'diamonds',
    value: 'J',
    points: -1,
    img: 'images/49.png',
  },
  {
    suit: 'diamonds',
    value: 'Q',
    points: -1,
    img: 'images/50.png',
  },
  {
    suit: 'diamonds',
    value: 'K',
    points: -1,
    img: 'images/51.png',
  },
  {
    suit: 'diamonds',
    value: 'A',
    points: -1,
    img: 'images/52.png',
  }
]

  var ludicrousSpeed = $('#ludicrousSpeed')
  var slowbtn = $('#slowBtn')
  var fastbtn = $('#fastBtn')
  var medbtn = $('#medBtn')
  var start = $('#startBtn')
  var numOfCards = $('#shoeSize')
  var restart = $('#restartBtn')
  var show = $('#showBtn')
  var totalPoints = 0;
  var speed = $('.speed')


  var dealer = function(that){
    var time;

    switch(that){

      case "slowBtn":
        console.log('hit')
        console.log('time: ' + time)
        time = 2000
      break;

      case "medBtn":
        time = 1150
      break;

      case "fastBtn":
        time = 750
      break;

      case "ludicrousSpeed":
        time = 300
      break;
      }

    var i = 0
    var counter = setInterval(function(){
     var index = randomCard();
       $('#cardImg').attr('src', deck[index].img)
       totalPoints = totalPoints + deck[index].points
        console.log(totalPoints)

       $('#countTracker').text('count:' + ' ' +totalPoints)
       i++

        if (i == numOfCards){
          window.clearInterval(counter)
        }
    }, time);

    $('#playerGuess').keypress(function(event) {

      if(event.which === 13){
        if ($('#playerGuess').val()==totalPoints){

          $('#countTracker').show()
        }

        else {
          $('#countTracker').show()
        }
      }
    });
  };

  $('#countTracker').hide()

  function getNumofCards(){
    numOfCards = $('#shoeSize')
    numOfCards = $('#shoeSize').val()

    $('#shoeSize').keypress(function(event) {

      if(event.which === 13){
         numOfCards = $('#shoeSize').val()
          console.log(numOfCards)
      }
    })
  }

  function randomCard(){
    return Math.floor(Math.random()*(deck.length))
  }

  var stop = function(){
    window.location.reload();
  }


  var restart = function(){
    $('#restartBtn').on('click', stop)
  }



$(function(){
  console.log('ready')
  var picked_speed = ""

  $('#startBtn').on('click', function(){

    if(picked_speed !== "") {
      console.log('starting...')
      dealer(picked_speed)
    }

    else{
      console.log('please pick a speed')
    }
  })

  $('.speed').on('click', function() {
    console.log('picked: '+this.id)
    picked_speed = this.id;
  });

  restart()

  getNumofCards()

  $('#countTracker').hide()

});
