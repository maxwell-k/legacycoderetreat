/* eslint-env jasmine */
/* global Game */
require("./game.js");

// describe("The test environment", function() {
//   it("should pass", function() {
//     expect(true).toBe(true);
//   });

//   it("should access game", function() {
//     expect(Game).toBeDefined();
//   });
// });

describe("The current player cannot move", function() {
  it("should pass", function() {
    expect(true).toBe(true);
  });
});

// describe("Your specs...", function() {
//   // it ...
//   it("should say 'Chet was added'", function() {
//     console.log = jasmine.createSpy("log");
//     var game = new Game();
//     game.add("Chet");
//     game.add("Pat");
//     game.add("Sue");

//     expect(console.log).toHaveBeenCalledWith("Chet was added");
//     expect(console.log).toHaveBeenCalledWith("Pat was added");
//     expect(console.log).toHaveBeenCalledWith("Sue was added");
//     expect(console.log).toHaveBeenCalledWith("They are player number 1");
//     expect(console.log).toHaveBeenCalledWith("They are player number 2");
//     expect(console.log).toHaveBeenCalledWith("They are player number 3");

//     game.roll(Math.floor(Math.random() * 6) + 1);

//     expect(console.log).toHaveBeenCalledWith("Chet is the current player");
//     expect(console.log).toHaveBeenCalledWith("They have rolled a 3");
//   });
// });
