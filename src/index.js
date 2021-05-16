const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let intervalId = null;

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  changeColors();
}

function onBtnStop() {
  btnStart.removeAttribute('disabled');
  clearInterval(intervalId);
}

function changeColors() {
  btnStart.setAttribute('disabled', '');
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
}
