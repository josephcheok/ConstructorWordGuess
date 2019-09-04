var Letter = function(letterInChosenWord) {
  this.letterInChosenWord = letterInChosenWord; //A string value to store the underlying character for the letter
  this.letterGuessed = false; //A boolean value that stores whether that letter has been guessed yet
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
  console.log(placeholder);
};

//A function that takes a character as an argument and checks it against the underlying character,
// updating the stored boolean value to true if it was guessed correctly
Letter.prototype.letterCheck = function(keystroke) {
  if (this.letterInChosenWord === keystroke) {
    this.letterGuessed = true;
  }
};

module.exports = Letter;
