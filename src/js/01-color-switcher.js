function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
startButton: document.querySelector('[data-start]'),
stopButton: document.querySelector('[data-stop]'),
body: document.querySelector('body'),
}

refs.startButton.addEventListener('click', changeColor);

function changeColor() {
    timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    onDisabledBtn(true);
}

refs.stopButton.addEventListener('click', stopChangeColor);

function stopChangeColor(){
    clearTimeout(timerId);
    onDisabledBtn(false);
}

function onDisabledBtn(onStart) {
    if (onStart) {
        refs.startButton.setAttribute('disabled', 'true');
    }
    else {
        refs.startButton.removeAttribute('disabled');
    }
}