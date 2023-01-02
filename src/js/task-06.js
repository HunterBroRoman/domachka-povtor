// const input = document.querySelector('#validation-input');

// input.addEventListener('blur', getWord);

// function getWord(e) {
//     let totalWord = e.currentTarget.length;
// console.log(totalWord);
//     if(totalWord.length == input.getAttribute('data-length')) {
//         input.classList.add('valid');
//           }
//           input.classList.add('invalid');
// }

const input = document.querySelector("#validation-input");
input.addEventListener("blur", lossFocuc);


 function lossFocuc() {
    if (+input.getAttribute('data-length') === input.value.length) { 
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  }