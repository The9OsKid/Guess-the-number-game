'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '✌ Correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

//RANDOM
/* The above code is a guessing game. The user has to guess a number between 1 and 20. The user has 20
tries to guess the number. If the user guesses the number correctly, the user wins. If the user
guesses the number incorrectly, the user loses. */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//CHECK
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //NO NUMBER
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a value first';
  }
  //EQUAL
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = ' Correct! ';
    document.querySelector('body').style.backgroundColor = '#228B22';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;

      score = 20;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too Low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You Lose ';

      document.querySelector('body').style.backgroundColor = '#D2042D';

      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too High ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You Lose ';

      document.querySelector('body').style.backgroundColor = '#D2042D';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const again = (secretNumber = Math.trunc(Math.random() * 20) + 1);

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
