'use strict';

const CHINA = 'китай';
const CHILE = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAICA = 'ямайка';

const userChoice = prompt('Укажи страну доставки товара').toLowerCase();
console.log(userChoice);
let totalPrice;
let message;

switch (userChoice) {
  case CHINA:
    totalPrice = 100;
    message = `Доставка в ${CHINA} будет стоить ${totalPrice} кредитов`;
    break;

  case CHILE:
    totalPrice = 250;
    message = `Доставка в ${CHILE} будет стоить ${totalPrice} кредитов`;
    break;

  case AUSTRALIA:
    totalPrice = 170;
    message = `Доставка в ${AUSTRALIA} будет стоить ${totalPrice} кредитов`;
    break;

  case INDIA:
    totalPrice = 80;
    message = `Доставка в ${INDIA} будет стоить ${totalPrice} кредитов`;
    break;

  case JAMAICA:
    totalPrice = 120;
    message = `Доставка в ${JAMAICA} будет стоить ${totalPrice} кредитов`;
    break;

  default:
    alert('В вашей стране доставка недоступна');
}

console.log(message);
