function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
startButton: document.querySelector('[data-start]'),
stopButton: document.querySelector('[data-stop]'),
body: document.querySelector('body'),
}

let timerId = 0;
refs.startButton.addEventListener('click', changeColor);

// const timerId = setInterval(changeColor, 1000);
    
// function changeColor() {
//     refs.body.style.backgroundColor = getRandomHexColor();
//     onDisabledBtn(true);
// }

onDisabledStopBtn(true);

function changeColor() {
    timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    onDisabledStartBtn(true);
    onDisabledStopBtn(false);
}

refs.stopButton.addEventListener('click', stopChangeColor);

function stopChangeColor(){
    clearTimeout(timerId);
    onDisabledStopBtn(true);
    onDisabledStartBtn(false);
}

function onDisabledStartBtn(onStart) {
    if (onStart) {
        refs.startButton.setAttribute('disabled', 'true');
    }
    else {
        refs.startButton.removeAttribute('disabled');
    }
}

function onDisabledStopBtn(onStop) {
    if (onStop) {
        refs.stopButton.setAttribute('disabled', 'true');
    }
    else {
        refs.stopButton.removeAttribute('disabled');
    }
}