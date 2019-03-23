require("./game.js"); /* global Game */
var seedrandom = require('seedrandom');
var rng = seedrandom('hello');

var notAWinner = false;

var game = new Game();

game.add('Chet');
game.add('Pat');
game.add('Sue');

do{

  game.roll(Math.floor(rng()*6) + 1);

  if(Math.floor(rng()*10) == 7){
    notAWinner = game.wrongAnswer();
  }else{
    notAWinner = game.wasCorrectlyAnswered();
  }

}while(notAWinner);
