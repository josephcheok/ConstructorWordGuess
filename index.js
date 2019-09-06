var Word = require("./word");
var inquirer = require("inquirer");
var colors = require("colors");
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
  console.log(guessWord.placeholderArray.join(" "));
  console.log(guessWord.letterArray);
  console.log(guessWord.guessCorrect);
  guessWord.placeholderArray = [];
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
      guessWord.checkLetterObjects(answer.keystroke);
      if (guessWord.guessCorrect === true) {
        console.log("CORRECT!!!".green);
        console.log("GuessCorrect :" + guessWord.guessCorrect);
        guessWord.guessCorrect = false;
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
