function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]'); 
const stopButton = document.querySelector('[data-stop]'); 
const body = document.querySelector('body');

startButton.addEventListener('click', changeColor);

function changeColor() {
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    onDisabledBtn(true);
}

stopButton.addEventListener('click', stopChangeColor);

function stopChangeColor(){
    clearTimeout(timerId);
    onDisabledBtn(false);
}

function onDisabledBtn(onStart) {
    if (onStart) {
        startButton.setAttribute('disabled', 'true');
    }
    else {
        startButton.removeAttribute('disabled');
    }
}