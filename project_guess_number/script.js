'use strict';

// define a number
const setSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const setTextContent = function (attr, value) {
  document.querySelector(attr).textContent = value;
};

let secretNumber = setSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input number
  if (!guess) {
    setTextContent('.message', '⛔ No number!');

    // Correct number. Game won
  } else if (guess === secretNumber) {
    setTextContent('.message', '🏆 Correct number!');
    setTextContent('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      setTextContent('.highscore', highscore);
    }
  } else {
    if (score > 1) {
      setTextContent(
        '.message',
        guess > secretNumber ? '👆 Too high!' : '👇 Too low!'
      );
      score--;
      setTextContent('.score', score);
      // Game over
    } else {
      setTextContent('.message', '💀 Game over');
      setTextContent('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = setSecretNumber();
  setTextContent('.message', 'Start guessing...');
  setTextContent('.number', '?');
  setTextContent('.score', score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
