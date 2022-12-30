
let counterValue = 0;

const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
let value = document.querySelector('#value');

buttonPlus.addEventListener('click', getPlus);
function getPlus() {
    counterValue += 1;
    value.textContent = counterValue;
}
buttonMinus.addEventListener('click', getMinus);
function getMinus() {
    counterValue -= 1;
    value.textContent = counterValue;
}

// function getMinus() {
//   value.textContent = counterValue -= 1
// }



