import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const dateInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

console.log(dataDays);

let selectedDate = 0;
// let currentDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date().getTime();
        const selectedDate = selectedDates[0].getTime();
        if (selectedDate <= currentDate) {
            window.alert("Please choose a date in the future");
            onDisabledBtn(true);
        }
        else {
            onDisabledBtn(false);
        }
    console.log(selectedDates[0]);
  },
};

flatpickr(dateInput, options);


function onDisabledBtn(onStart) {
    if (onStart) {
        startBtn.setAttribute('disabled', 'true');
    }
    else {
        startBtn.removeAttribute('disabled');
    }
}

startBtn.addEventListener('click', onStartBtn);

const intervalId = setInterval(onStartBtn, 1000);

function onStartBtn() {
    const intervalId = setInterval(() => {
        const diff = selectedDate - new Date();
        console.log(diff);
        console.log(selectedDate);

    // onDisabledBtn(false);
        
        convertMs(diff);
        console.log(convertMs(diff));

        showDade(diff);
    }        
        , 1000)
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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function showDade(date) {
    const { days, hours, minutes, seconds } = convertMs(date);
    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, 0);
}






// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';


// let selectedDate = 0;
// let timerId = 0;

// const buttonStart = document.querySelector('button[data-start]');
// const timeInput = document.querySelector('#datetime-picker');
// const dataDays = document.querySelector('.timer [data-days]');
// const dataHours = document.querySelector('.timer [data-hours]');
// const dataMinutes = document.querySelector('.timer [data-minutes]');
// const dataSeconds = document.querySelector('.timer [data-seconds]');

// buttonStart.addEventListener('click', getButtonStart);
// buttonStart.setAttribute("disabled", "disabled");

// // flatpickr
// const options = {
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
//     // altInput: true,
//     altFormat: "F j, Y",
//     time_24hr: true,
//     defaultDate: new Date(),
//     weekNumbers: true,
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         selectedDate = selectedDates[0].getTime()
//         if (selectedDate < new Date()) {
//             window.alert('Please choose a date in the future');
//         } else {
//             buttonStart.removeAttribute("disabled");
//             console.log(selectedDates);
//         };
//     },
// };
// flatpickr(timeInput, options );

// function getButtonStart() {
//    timerId = setInterval(() => {
//        const targetDate = selectedDate - new Date();

//        console.log(selectedDate);

//        buttonStart.setAttribute("disabled", "disabled");
//        timeInput.setAttribute("disabled", "disabled");
//        stopTimeOut(targetDate);
//        const convertObj = convertMs(targetDate);
//         showDate(convertObj);
//     //    console.log(convertObj);
//     }, 1000)
 
// };
// function stopTimeOut(targetDates) {
//      if (targetDates <= 1000) {
//            clearInterval(timerId);
//            timeInput.removeAttribute("disabled");
//            Notify.success('Time is out');
//        }
// }

// function showDate(time) {
//          dataDays.textContent = addLeadingZero(time.days);
//         dataHours.textContent = addLeadingZero(time.hours);
//         dataMinutes.textContent = addLeadingZero(time.minutes);
//         dataSeconds.textContent = addLeadingZero(time.seconds);
// }

// function addLeadingZero(value) {
//    return String(value).padStart(2, 0);
// };

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// };