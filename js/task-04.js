const counterValue = document.getElementById("value");
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

let currentValue = 0;

function updateCounterValue() {
  counterValue.textContent = currentValue;
}

function increment() {
  currentValue += 1;
  updateCounterValue();
}

function decrement() {
  currentValue -= 1;
  updateCounterValue();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
