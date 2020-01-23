// console.log('Lesson 2');

// ====================
// const a = 5;
// const b = 6;
// const str = 'abc';

// if (str.length > 0) {
//   console.log('it is ok');
// } else {
//   console.log('it is not ok');
// }

// ====================
// const a = 1;
// console.log('level 1, a:', a);

// if (true) {
//   console.log('level 2, a:', a);

//   const b = 2;
//   console.log('level 2, b:', b);
// }

// const b = 3;
// console.log('level 1, b:', b);

// ====================
// for (let i = 0; i < 50; i += 10) {
//   console.log(i);
// }

// ====================
// let i = 0;

// do {
//   console.log(i);

//   i += 10;
// } while (i < 50);

// ====================
// let result = '';

// for (let i = 0; i < 500000; i += 1) {
//   console.log('before break', i);

//   if (i === 3) {
//     result = 'bingo';
//     break;
//   }
// }

// console.log(result);

// game
console.log('start');
let userNumber;
let numberX = Math.random() * 100;
numberX = Math.round(numberX);

do {
  userNumber = prompt('Please enter a number (0 - 100)');
  if (userNumber === null) {
    break;
  }
  userNumber = Number.parseInt(userNumber, 10);

  if (numberX < userNumber) {
    console.log('<', userNumber);
  }

  if (numberX > userNumber) {
    console.log('>', userNumber);
  }
} while (userNumber !== numberX);

console.log(userNumber, 'WINNER!!!!');
console.log('end');
