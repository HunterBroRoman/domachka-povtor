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
    if (input.dataset.length == input.value.length) { 
      input.classList.add('valid');
      input.classList.remove('invalid');
      
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  }