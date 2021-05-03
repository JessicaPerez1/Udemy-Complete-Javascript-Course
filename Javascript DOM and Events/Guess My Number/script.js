"use.strict";

// DOM SELECTING ELEMENTS AND MANIPULATING ==========
// let mess = document.querySelector(".message");
// console.log(mess.textContent);
// mess.textContent = "Hello I'm Jess ";
// console.log(mess.textContent);

// let numEl = document.querySelector(".number");
// let scoreEl = document.querySelector(".score");
// scoreEl.textContent = "12";
// numEl.textContent = "X?X";

// let inputEl = document.querySelector(".guess");
// // use .value for input fields
// let inputVal = inputEl.value;
// inputEl.value = "55";
// console.log(inputEl.value);

// HANDLING CLICK EVENTS ==========
// select button
let btnCheck = document.querySelector(".check");
let mess = document.querySelector(".message");
let numEl = document.querySelector(".number");
let scoreEl = document.querySelector(".score");
let inputEl = document.querySelector(".guess");
let bodyEl = document.querySelector("body");
let highScoreEl = document.querySelector(".highscore");
// get the initial Score value and initial highScore
let score = Number(scoreEl.textContent);
let highScore = 0;
// randomly generate a secret number between 0 and 100
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// HELPER FUNCTION
const displayMessage = function (message) {
  mess.textContent = message;
};
// addEventListener method takes 2 arguments: type of event, function eventHandler
btnCheck.addEventListener("click", function () {
  // convert string value to a number
  const inputVal = Number(inputEl.value);

  // if there is no input
  if (!inputVal) {
    displayMessage("No number, please enter one!");
  }
  // if playerv wins
  else if (inputVal === randomNumber) {
    score;
    displayMessage("Well DONE Correct number!!");
    // set this random number to be the secret number
    numEl.textContent = randomNumber;
    // turn background to green when user wins
    bodyEl.style.backgroundColor = "#60b347";
    numEl.style.width = "30rem";
    // set the highscore
    if (score > highScore) highScore = score;
    highScoreEl.textContent = highScore;
    // guess is too high OR too low
  } else if (inputVal !== randomNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      let adj = "";
      inputVal > randomNumber ? (adj = "high") : (adj = "low");
      displayMessage(`Number is too ${adj}, try again!`);
    } else {
      displayMessage("You lost the game :(");
      scoreEl.textContent = 0;
    }
  }
});

//CHALLENGE
// implement game reset so that the player can play again
// select again element
const againEl = document.querySelector(".again");
// use eventhandler, reset score and number variables
// restore initial message, score and guess input field
// reset initial background color and num width
againEl.addEventListener("click", function () {
  scoreEl.textContent = "20";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  numEl.value = randomNumber;
  numEl.textContent = "?";
  displayMessage("Start guessing...");
  inputEl.value = " ";
  bodyEl.style.backgroundColor = "#222";
  numEl.style.width = "15rem";
});
