var Letter = require("./letter");
// var chosenWord = process.argv.slice(2).join(" ");

var Word = function(chosenWord, keystroke) {
  this.lettersInChosenWord = chosenWord.split("");
  this.letterArray = [];
  this.placeholderArray = [];
  this.createLetterObjects = function(keystroke) {
    for (i = 0; i < this.lettersInChosenWord.length; i++) {
      this.letterArray.push(new Letter(this.lettersInChosenWord[i])); //An array of new Letter objects representing the letters of the underlying word//
      //A function that takes a character as an argument and calls the guess function on each letter object
      //(the second function defined in Letter.js)
      this.letterArray[i].letterCheck(keystroke);
      //A function that returns a string representing the word. This should call the function on each
      //letter object (the first function defined in Letter.js) that displays the character or an underscore
      // and concatenate those together.
      this.placeholderArray.push(
        this.letterArray[i].toString(this.lettersInChosenWord[i])
      );
    }
  };
  this.createLetterObjects(keystroke);
  this.guessRound = false;
};

module.exports = Word;
