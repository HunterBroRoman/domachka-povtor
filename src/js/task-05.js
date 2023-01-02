

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', getWord);

function getWord(event) {
    if(event.currentTarget.value === "") {
        return span.textContent = "Anonymous";
    } 
    let word = event.currentTarget.value;
    span.textContent = word;
  
}

