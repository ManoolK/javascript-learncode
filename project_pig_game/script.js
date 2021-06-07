'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, currentPlayer;
let playing = true;

// Starting conditions
const startNewGame = function () {
  currentScore = 0;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;

  if (!playing) {
    // the winner plays first
    const playerClasses = document.querySelector(
      `.player--${currentPlayer}`
    ).classList;
    playerClasses.remove('player--winner');
    playerClasses.add('player--active');
  } else {
    currentPlayer = 0;
  }
  scores = [0, 0];
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
};
startNewGame();

const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;
  if (currentScore === 0) {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;

    // Check for rolled 1: if True, switch player; else add number to the current score
    if (diceNumber === 1) {
      currentScore = 0;
    } else {
      currentScore += diceNumber;
    }

    // switch player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player's score
    scores[currentPlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    // check if player's score is >= 100: if True, finish the game
    if (scores[currentPlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
    } else {
      // switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', startNewGame);
