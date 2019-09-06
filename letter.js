var Letter = function(letterInChosenWord) {
  this.letterInChosenWord = letterInChosenWord; //A string value to store the underlying character for the letter
  this.letterGuessed = false; //A boolean value that stores whether that letter has been guessed yet
  this.stateChange = false;
};

//A function that returns the underlying character if the letter has been guessed, or a placeholder
//(like an underscore) if the letter has not been guessed
Letter.prototype.toString = function(letterInChosenWord) {
  var placeholder;
  if (!this.letterGuessed) {
    placeholder = "_";
  } else {
    placeholder = letterInChosenWord;
  }
  return placeholder;
};

//A function that takes a character as an argument and checks it against the underlying character,
// updating the stored boolean value to true if it was guessed correctly
Letter.prototype.letterCheck = function(keystroke) {
  var letterCompare = this.letterInChosenWord.toLowerCase();
  if (letterCompare === keystroke) {
    this.letterGuessed = true;
    this.stateChange = true;
  }
};

module.exports = Letter;
