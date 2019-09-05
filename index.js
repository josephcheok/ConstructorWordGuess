var Word = require("./word");
var inquirer = require("inquirer");
var colors = require("colors");
var guess = false;
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
      if (guess === true) {
        console.log("CORRECT!!!".green);
        guess === false;
      } else {
        console.log("INCORRECT!!!".red);
        numGuesses--;
        console.log("Guesses Remaining: " + numGuesses);
      }
      repeat();
      // if (Letter.letterGuessed === false) {
      //   numGuesses--;
      // }
    });
}

repeat();
