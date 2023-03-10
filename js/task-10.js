function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const countRef = document.querySelector('#controls>input');
const createBoxesBtn = document.querySelector('[data-create]');
const destroyBoxesBtn = document.querySelector('[data-destroy]');

const boxesRef = document.querySelector('#boxes');

createBoxesBtn.addEventListener('click', () => {
  if (countRef.value) {
    createBoxes(Number(countRef.value));
  }
});

function createBoxes(amount) {
  let i = 1;
  const size = 30;
  const collection = [];

  while (i <= amount) {
    const divRef = document.createElement('div');
    divRef.style.backgroundColor = getRandomHexColor();
    divRef.style.height = String(size + i * 10) + 'px';
    divRef.style.width = divRef.style.height;
    collection.push(divRef);
    i += 1;
  }
  boxesRef.append(...collection);
}

destroyBoxesBtn.addEventListener('click', () => {
  boxesRef.innerHTML = '';
});
