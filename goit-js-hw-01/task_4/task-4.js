'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const sumOfDroids = prompt('Какое кол-во дроидов вы хотите купить?');

if (sumOfDroids !== null) {
  let totalPrice = pricePerDroid * sumOfDroids;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${sumOfDroids} дроидов, на счету осталось ${credits -
        totalPrice} кредитов`,
    );
  }
} else {
  console.log('Отменено пользователем');
}
