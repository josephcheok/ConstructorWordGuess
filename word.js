var Letter = require("./letter");
// var chosenWord = process.argv.slice(2).join(" ");

var Word = function(chosenWord, keystroke) {
  this.lettersInChosenWord = chosenWord.split("");
  this.letterArray = [];
  this.placeholderArray = [];
  this.guessCorrect = false;
  this.createLetterObjects = function() {
    for (i = 0; i < this.lettersInChosenWord.length; i++) {
      this.letterArray.push(new Letter(this.lettersInChosenWord[i])); //An array of new Letter objects representing the letters of the underlying word//
      //A function that takes a character as an argument and calls the guess function on each letter object
      //(the second function defined in Letter.js)
    }
  };
  this.checkLetterObjects = function(keystroke) {
    for (i = 0; i < this.lettersInChosenWord.length; i++) {
      this.letterArray[i].letterCheck(keystroke);
      //A function that returns a string representing the word. This should call the function on each
      //letter object (the first function defined in Letter.js) that displays the character or an underscore
      // and concatenate those together.
      this.placeholderArray.push(
        this.letterArray[i].toString(this.lettersInChosenWord[i])
      );
    }
    // Check for state change in letter object to indicate if guess is correct
    for (i = 0; i < this.letterArray.length; i++) {
      if (this.letterArray[i].stateChange === true) {
        this.guessCorrect = true;
      }
    }
    // Reset all letter object states after guessCorrect has been set to true
    for (i = 0; i < this.letterArray.length; i++) {
      this.letterArray[i].stateChange = false;
    }
  };

  this.createLetterObjects();
  this.checkLetterObjects(keystroke);
};

module.exports = Word;
