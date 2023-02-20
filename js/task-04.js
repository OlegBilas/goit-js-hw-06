let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');
// або const spanRef = decrementBtn.nextElementSibling;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    spanRef.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    spanRef.textContent = counterValue;
});