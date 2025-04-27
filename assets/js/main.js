function toggle() {
  let newsletter = document.querySelector(".newsletter");
  newsletter.classList.toggle("active");
}

const split = 15/5;
console.log()

function startCountdown(targetDate) {
  const daysElement = document.querySelector('.day');
  const hoursElement = document.querySelector('.hour');
  const minutesElement = document.querySelector('.minute');
  const secondsElement = document.querySelector('.second');

  function update() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(interval);
      daysElement.textContent = '0';
      hoursElement.textContent = '0';
      minutesElement.textContent = '0';
      secondsElement.textContent = '0';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  }

  update();
  const interval = setInterval(update, 1000);
}

//date cible
const targetDate = new Date(2025, 10, 11, 23, 59, 59);



window.addEventListener('DOMContentLoaded', () => startCountdown(targetDate));