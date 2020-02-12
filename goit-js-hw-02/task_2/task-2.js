const calculateEngravingPrice = function(message, pricePerWord) {
  let total = 0;
  const words = message.split(' ');
  total = words.length * pricePerWord;
  return total;
};

// for (const word of words) {
//   total += pricePerWord;
// }

// return total;

// const message = 'Proin sociis natoque et magnis parturient montes mus';
// const price = calculateEngravingPrice(message, 10);

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

// const message = 'Proin sociis natoque et magnis parturient montes mus';

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
