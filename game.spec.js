/* eslint-env jasmine */
/* global Game _didPlayerNotWin */
require("./game.js");

describe("howManyPlayers is accurate", function() {
  it("is correct for three", function() {
    var game = new Game();
    game.add("Chet");
    game.add("Pat");
    game.add("Sue");
    expect(game.howManyPlayers()).toBe(3);
  });
});
describe("Wrong answer obstructs movement", function() {
  it("after a wrong answer and a even roll the player doesn't move", function() {
    var game = new Game();
    game.add("Chet");
    game.wrongAnswer();
    game.roll(4);
    expect(game.getCurrentPlace()).toBe(0);
  });
  it("after a wrong answer and a odd roll the player moves", function() {
    var game = new Game();
    game.add("Chet");
    game.wrongAnswer();
    game.roll(1);
    expect(game.getCurrentPlace()).toBe(1);
  });
});
describe("Winning the game", function() {
  it("A single player wins after 6 correct answers", function() {
    var game = new Game();
    game.add("Chet");
    for (var i = 0; i < 5; i++) game.wasCorrectlyAnswered();
    expect(game.wasCorrectlyAnswered()).toBe(false);
  });
  it("A two player game ends when a player reaches at least 6 correct answers and is two ahead", function() {
    var game = new Game();
    game.add("Chet");
    game.add("Pat");
    for (var i = 0; i < 5; i++) {
      game.wasCorrectlyAnswered();
      game.wasCorrectlyAnswered();
    }
    expect(game.wasCorrectlyAnswered()).toBe(true);
    game.wrongAnswer();
    expect(game.wasCorrectlyAnswered()).toBe(false);
  });
  it("", function() {
    expect(_didPlayerNotWin([5, 0], 0)).toBe(true);
    expect(_didPlayerNotWin([6, 0], 0)).toBe(false);
    expect(_didPlayerNotWin([6, 6, 6], 1)).toBe(true);
    expect(_didPlayerNotWin([6, 7, 9], 2)).toBe(false);
  });
});

describe("Start of log output", function() {
  it("should say 'Chet was added' etc", function() {
    console.log = jasmine.createSpy("log");
    var game = new Game();
    game.add("Chet");
    game.add("Pat");
    game.add("Sue");

    expect(console.log).toHaveBeenCalledWith("Chet was added");
    expect(console.log).toHaveBeenCalledWith("Pat was added");
    expect(console.log).toHaveBeenCalledWith("Sue was added");
    expect(console.log).toHaveBeenCalledWith("They are player number 1");
    expect(console.log).toHaveBeenCalledWith("They are player number 2");
    expect(console.log).toHaveBeenCalledWith("They are player number 3");

    game.roll(3);

    expect(console.log).toHaveBeenCalledWith("Chet is the current player");
    expect(console.log).toHaveBeenCalledWith("They have rolled a 3");
  });
});
