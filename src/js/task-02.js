const ul = document.querySelector('#ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemList = ingredients.map(elem => {
  const itemLi = document.createElement('li');
  itemLi.classList.add('item');
  itemLi.textContent = elem;
  return itemLi;
});

ul.append(...itemList);