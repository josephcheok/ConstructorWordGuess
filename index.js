// all the required modules
var Word = require("./word");
var inquirer = require("inquirer");
var colors = require("colors");

// global variables declared
var letters = /^[A-Za-z]+$/;
var wordsList = [
  "Jurassic Park",
  "The Matrix",
  "Avatar",
  "The Departed",
  "Liar Liar",
  "Star Wars IV",
  "Pacific Rim",
  "Saving Private Ryan",
  "Good Will Hunting",
  "Catch Me If You Can"
];

function gameRound() {
  var win = false;
  var lose = false;
  var numGuesses = 9;
  var keystroke = " ";
  //Randomly selects a word and uses the Word constructor to store it
  var randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  var guessWord = new Word(randomWord, keystroke);

  function checkWinOrLoss() {
    win = true;
    for (i = 0; i < guessWord.letterArray.length; i++) {
      if (guessWord.letterArray[i].letterGuessed === false) {
        win = false;
      }
    }
    if (win === true) {
      console.log("You got it right. Next word!".yellow);
    }
    if (numGuesses === 0) {
      lose = true;
      console.log("You lost. Try the next one!".magenta);
    }
  }

  function repeat() {
    // console.log(guessWord.join(""));
    console.log(guessWord.placeholderArray.join(" "));
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
          guessWord.guessCorrect = false;
        } else {
          console.log("INCORRECT!!!".red);
          numGuesses--;
          console.log("Guesses Remaining: " + numGuesses);
        }
        checkWinOrLoss();
        if (win === true || lose === true) {
          gameRound();
        } else {
          repeat();
        }
      });
  }
  repeat();
}

gameRound();
