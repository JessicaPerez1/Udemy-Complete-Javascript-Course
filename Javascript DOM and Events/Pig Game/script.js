"use strict";

// Selecting elements
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let scores, currScore, activePlayer, playing;

const init = function () {
  //Starting conditions
  scores = [0, 0];
  currScore = 0;
  activePlayer = 0;
  // initial state
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  // hide the dice
  diceEl.classList.add("hidden");
  // remove winner class
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player1El.classList.remove("player--active");
  // set player 1 as starting player
  player0El.classList.add("player--active");
};

init();

// HELPER FUNCTION
const switchPlayer = function () {
  // reset the current score to 0 for the active player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currScore = 0;
  // if active player is 0, then switch to 1 and vice versa
  activePlayer = activePlayer === 0 ? 1 : 0;
  // background color to change
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// FLOW CHART ==================================
// USER CLICKS ROLE DICE
btnRoll.addEventListener("click", function () {
  if (playing) {
    // generate a random number between 1 and 6
    const dice = Math.floor(Math.random() * 6) + 1;
    // display the dice roll
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // if not a 1 then add dice roll to the current score

    if (dice !== 1) {
      currScore += dice;
      // select who ever is active
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currScore;
    } else {
      // if it is a 1 then switch player
      switchPlayer();
    }
  }
});

// USER HOLDS SCORE
// when user clicks on HOLD button
btnHold.addEventListener("click", function () {
  if (playing) {
    // add current score to the total score
    // scores[1] = scores[1] + currentScore
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if the score is 100, then current player wins and game finished
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      // if < 100, switch player
      switchPlayer();
    }
  }
});

// USER RESETS THE GAME
btnNew.addEventListener("click", init);
