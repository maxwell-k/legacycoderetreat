require("./game.js"); /* global Game */

var notAWinner = false;

var game = new Game();
var randomNumberGenerator = Math.random;

game.add("Chet");
game.add("Pat");
game.add("Sue");

do {
  game.roll(Math.floor(randomNumberGenerator() * 6) + 1);

  if (Math.floor(randomNumberGenerator() * 10) == 7) {
    notAWinner = game.wrongAnswer();
  } else {
    notAWinner = game.wasCorrectlyAnswered();
  }
} while (notAWinner);
