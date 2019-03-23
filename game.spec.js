/* eslint-env jasmine */
/* global Game */
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
