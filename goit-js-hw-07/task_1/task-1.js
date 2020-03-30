const categoriesList = document.querySelectorAll('li.item');
// console.log(categoriesList);

const newList = [...categoriesList];
console.log(newList);
newList.forEach(item => {
  //   console.log(li);
  const productTitle = item.querySelector('h2');
  //   console.log(productTitle);
  const listItems = item.querySelectorAll('li');
  //   console.log(listItems);
  console.log(
    `Категория ${productTitle.textContent}, Количество элементов ${listItems.length}`,
  );
});

// ВАРИАНТ 2==============================================
// for (let i = 0; i < newList.length; i += 1) {
//   const productTitle = newList[i].querySelector('h2');
//   console.log(productTitle);

//   console.log(
//     `Категория ${productTitle.textContent}, Количество элементов ${newList.length}`,
//   );
// }
