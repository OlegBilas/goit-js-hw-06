const categoriesRef = document.querySelector('ul#categories');
console.log('Number of categories:', categoriesRef.children.length);

const liItemRef = document.querySelectorAll('li.item');

liItemRef.forEach(element => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});
