let counterValue = 0;
const spanNumber = document.querySelector('span[id="value"]');
console.log(counterValue);

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener('click', event => {
  event.currentTarget = counterValue;
  counterValue -= 1;
  spanNumber.textContent = counterValue;
});

increment.addEventListener('click', event => {
  event.currentTarget = counterValue;
  counterValue += 1;
  spanNumber.textContent = counterValue;
});
