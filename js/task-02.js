const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const createElementOfIngredients = element => {
  const elementOfIngredients = document.createElement('li');
  elementOfIngredients.textContent = element;
  elementOfIngredients.classList.add('item');
  return elementOfIngredients;
};

const arrayOfObjects = ingredients.map(createElementOfIngredients);

const ingredientsRef = document.querySelector('ul#ingredients');
ingredientsRef.append(...arrayOfObjects);
