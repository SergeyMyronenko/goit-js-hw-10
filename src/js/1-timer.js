import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
    const renderTimer = convertMs(initialTimer);

    if (selectedDates[0] < new Date()) {
      iziToast.error({
        position: 'topRight',
        message: 'Please choose a date in the future',
      });
      startBtn.setAttribute('disabled', true);
    } else {
      startBtn.removeAttribute('disabled');
      userSelectedDate = selectedData;

      timerDay.textContent = `${renderTimer.days}`;
      timerHours.textContent = `${renderTimer.hours}`;
      timerMinutes.textContent = `${renderTimer.minutes}`;
      timerSeconds.textContent = `${renderTimer.seconds}`;
    }
  },
};
const fp = flatpickr(myInput, options);
let userSelectedDate = fp;

startBtn.addEventListener('click', () => {
  const selectedTime = userSelectedDate.getTime();

  const timerInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    let remainingTime = selectedTime - currentTime;
    const numberOfTimer = convertMs(remainingTime);

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
  const days = Math.floor(ms / day)
    .toString()
    .padStart(2, '0');
  // Remaining hours
  const hours = Math.floor((ms % day) / hour)
    .toString()
    .padStart(2, '0');
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute)
    .toString()
    .padStart(2, '0');
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second)
    .toString()
    .padStart(2, '0');

  return { days, hours, minutes, seconds };
}
