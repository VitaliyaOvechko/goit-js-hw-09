import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
dateInput: document.getElementById('datetime-picker'),
startBtn: document.querySelector('[data-start]'),
dataDays: document.querySelector('[data-days]'),
dataHours: document.querySelector('[data-hours]'),
dataMinutes: document.querySelector('[data-minutes]'),
dataSeconds: document.querySelector('[data-seconds]'),
}

let selectedDate = 0;
let intervalId = 0;

onDisabledBtn(true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date().getTime();
        selectedDate = selectedDates[0].getTime();
        if (selectedDate <= currentDate) {
            Notiflix.Notify.failure('Please choose a date in the future');
            onDisabledBtn(true);
        }
        else {
            onDisabledBtn(false);
        }
    console.log(selectedDates[0]);
  },
};

flatpickr(refs.dateInput, options);

function onDisabledBtn(onStart) {
    if (onStart) {
        refs.startBtn.setAttribute('disabled', 'true');
    }
    else {
        refs.startBtn.removeAttribute('disabled');
    }
}

refs.startBtn.addEventListener('click', onStartBtn);

function onStartBtn() {
    intervalId = setInterval(() => {
       let diff = selectedDate - new Date();
  
        if (diff > 0) {
            convertMs(diff);
            showDade(diff);
        }
        else {
            stopTimer();
                }
            
} , 1000);
};

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

function showDade(date) {
    const { days, hours, minutes, seconds } = convertMs(date);
    refs.dataDays.textContent = addLeadingZero(days);
    refs.dataHours.textContent = addLeadingZero(hours);
    refs.dataMinutes.textContent = addLeadingZero(minutes);
    refs.dataSeconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, 0);
}

// Таймер повинен зупинятися,
// коли дійшов до кінцевої дати, тобто 00: 00: 00: 00.
function stopTimer() {
        clearInterval(intervalId);
        Notiflix.Notify.success('Target date has arrived');
}

// function stopTimer(targetTime) {
//     if (targetTime < 1000) {
//         clearInterval(intervalId);
//         Notiflix.Notify.success('Target date has arrived');
//     }
// }