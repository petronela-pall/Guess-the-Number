'use strict';
var myValue = Math.trunc(Math.random() * 20) + 1;
let points = Number(document.querySelector(`.score`).textContent);
let highScore = 0;

document.querySelector('button').addEventListener('click', function () {
  myValue = Math.trunc(Math.random() * 20) + 1;
  points = 20;
  document.querySelector(`.message`).textContent = 'Enter a number';
  document.querySelector(`body`).style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector(`.score`).textContent = points;
  document.querySelector(`.number`).textContent = '?';
  document.querySelector(`.guess`).value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  var value = Number(document.querySelector('.guess').value);
  if (value) {
    if (value === myValue) {
      document.querySelector(`.message`).textContent = 'Correct Number!';
      document.querySelector(`.number`).textContent = myValue;
      document.querySelector(`body`).style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '200px';
      if (points > highScore) highScore = points;
      document.querySelector(`.highscore`).textContent = highScore;
    } else {
      value < myValue
        ? (document.querySelector(`.message`).textContent = 'Too Low')
        : (document.querySelector(`.message`).textContent = 'Too High');
      points--;
      document.querySelector(`.score`).textContent = points;
    }
  } else {
    document.querySelector(`.message`).textContent = 'Enter a number';
  }
});
