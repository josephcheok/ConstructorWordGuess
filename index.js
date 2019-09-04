var Word = require("./word");
var inquirer = require("inquirer");
var guess = true;
var keystroke = " ";
var letters = /^[A-Za-z]+$/;

var numGuesses = 9;

var wordsList = [
  "Jurassic Park",
  "The Matrix",
  "Avatar",
  "The Departed",
  "Liar Liar",
  "Star Wars IV"
];

//Randomly selects a word and uses the Word constructor to store it
var randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
var guessWord = new Word(randomWord, keystroke);
console.log(guessWord);

function repeat() {
  // console.log(guessWord.join(""));

  inquirer
    .prompt([
      {
        type: "input",
        name: "keystroke",
        message: "Guess a letter!",
        validate: function(value) {
          if (value.match(letters)) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      guessWord.createLetterObjects(answer.keystroke);
      repeat();
      // if (Letter.letterGuessed === false) {
      //   numGuesses--;
      // }
    });
}

repeat();
