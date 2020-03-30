const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

console.log(ingredientsList);

function createList() {
  let listArray = [];
  for (let i = 0; i < ingredients.length; i += 1) {
    console.log(ingredients[i]);
    const item = document.createElement('li');
    item.textContent = ingredients[i];
    console.log(item);
    listArray.push(item);
  }
  return listArray;
}
ingredientsList.append(...createList());
