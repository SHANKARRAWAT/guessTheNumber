'use strict';

// innerText=textContent worin are different
let number = Math.trunc(Math.random() * 20) + 1;
console.log(`number is ${number}`);
let highScore = 0;
let score = 20;

const display = function (message, clas) {
  document.querySelector(clas).innerText = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    display('enter the number to check', '.message');
  } else {
    if (number === guess) {
      // document.querySelector('.score').innerText = score;
      display(score, '.score');

      // document.querySelector('.message').innerText =
      //   "hurray that's the correct anser";

      display("hurray that's the correct anser", '.message');
      display(number, '.number');
      //document.querySelector('.number').innerText = number;

      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '35rem';

      if (score > highScore) {
        console.log(` score is ${score} and highscore is ${highScore}`);
        display(score, '.highscore');
        // document.querySelector('.highscore').innerText = score;
        highScore = score;
      }
    } else {
      --score;
      display(score, '.score');
      // document.querySelector('.score').innerText = score;
      if (guess > number) {
        display('Too High', '.message');
        // document.querySelector('.message').innerText = 'Too High';
      } else {
        display('Too low', '.message');
        // document.querySelector('.message').innerText = 'Too low';
      }
      // console.log(score);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 19) + 1;
  console.log(`the numnber is ${number}`);
  score = 20;
  display('?', '.number');
  document.querySelector('.score').innerText = 0;
  document.querySelector('.guess').value = 0;
  document.querySelector('.message').innerText = 'Start guessing.............';
});
