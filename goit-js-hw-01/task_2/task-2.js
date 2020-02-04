const total = 100;
const ordered = 50;

const value = prompt('Введите кол-во товаров для оформления заказа');
const isOrderInRange = value => 1 && value <= total;
if (isOrderInRange) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  alert('На складе недостаточно товаров!');
}
