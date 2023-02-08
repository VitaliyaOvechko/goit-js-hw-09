import Notiflix from 'notiflix';

const form = document.querySelector('form');
const delayInput = document.querySelector('input[name = "delay"]');
const stepInput = document.querySelector('input[name = "step"]');
const amountInput = document.querySelector('input[name = "amount"]');

console.log(form);
console.log(delayInput);
console.log(stepInput);
console.log(amountInput);

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(evt) {
  evt.preventDefault();

  let delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  console.log(delay);
  console.log(step);
  console.log(amount);
  
  for (let i = 1; i <= amount; i += 1){
    createPromise(i, delay)
      .then(({ position, delay }) => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({ position, delay }) => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
    delay += step;
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay)
})
}
