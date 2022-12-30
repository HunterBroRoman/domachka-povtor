

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', getWord);
function getWord() {
    if(input.value === "") {
        return span.textContent = "Anonymous";
    } 
    let word = input.value;
    span.textContent = word;

    
}

