function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDelete = document.querySelector('button[data-destroy]');

const galleryDiv = document.querySelector('#boxes');


let a = 20;
let b = 20;

btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const quantityElements = (+input.value);//переводим значение из инпута в цифру
console.log(quantityElements);
  //   for(let i = 1; i < amount; i += 1) {
//     const boxEl = document.createElement('div');
//     boxEl.style.backgroundColor = getRandomHexColor();
//     boxEl.style.flexWrap = "wrap";
//     boxEl.style.gap = "10px";
//     boxEl.style.marginTop = "20px";
//     boxEl.style.display = "flex";
    
//     galleryDiv.append(boxEl);
//     boxEl.style.width = `${a+=10}px`;
//       boxEl.style.height = `${b+=10}px`;
//    } 
}
     
// const destroyBoxes = () => {

//     galleryEl.innerHTML = '';
//     inputEl.value ='';
//     a=20;
//     b=20;
// };

// // creatBtn.addEventListener('click', createBoxes);
// btnDelete.addEventListener('click', destroyBoxes);
