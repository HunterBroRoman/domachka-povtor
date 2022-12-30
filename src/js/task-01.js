// const categoriesAll = document.querySelectorAll('.item');
// console.log("Number of categories:", categoriesAll.length);


// categoriesAll.forEach(category => {
//     const categoryName = category.firstElementChild.textContent;
//     const categoryCount = category.querySelectorAll('li').length;
//     console.log("Category:", categoryName);
//     console.log("Element:",categoryCount);
// });

// const categoriesArr = document.querySelectorAll('.item');
// console.log('Number of categories:', categoriesArr.length);

// categoriesArr.forEach(category => {
//    const title = category.firstElementChild.textContent;
//    const categoryCount = category.querySelectorAll('li').length;
//    console.log('Category:', title);
//    console.log('Elements:', categoryCount);
// });


const itemEl = document.querySelectorAll('.item')

console.log(`Number of categories: ${itemEl.length}`)

itemEl.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`)
  console.log(`Elements: ${category.lastElementChild.childElementCount}`)
})