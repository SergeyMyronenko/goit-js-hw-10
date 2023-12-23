import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const myInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const timerDay = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedData = selectedDates[0];
    const initialTimer = selectedData.getTime() - new Date().getTime();
    const RenderTimer = convertMs(initialTimer);

    if (selectedDates[0] < new Date()) {
      startBtn.setAttribute('disabled', true);
      alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
      userSelectedDate = selectedData;
    }

    timerDay.textContent = `${RenderTimer.days}`;
    timerHours.textContent = `${RenderTimer.hours}`;
    timerMinutes.textContent = `${RenderTimer.minutes}`;
    timerSeconds.textContent = `${RenderTimer.seconds}`;
  },
};
const fp = flatpickr(myInput, options);
let userSelectedDate = fp;

startBtn.addEventListener('click', () => {
  const currentTime = new Date().getTime();
  const selectedTime = userSelectedDate.getTime();

  const timerInterval = setInterval(() => {
    let remainingTime = selectedTime - currentTime;
    const numberOfTimer = convertMs(remainingTime);
    console.log(remainingTime);
    console.log(numberOfTimer);

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
    } else {
      timerDay.textContent = `${numberOfTimer.days}`;
      timerHours.textContent = `${numberOfTimer.hours}`;
      timerMinutes.textContent = `${numberOfTimer.minutes}`;
      timerSeconds.textContent = `${numberOfTimer.seconds}`;
    }
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
