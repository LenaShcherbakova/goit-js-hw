const input = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

// Вариант 1
input.addEventListener('input', function() {
  textSpan.style.fontSize = input.value + 'px';
});

// Вариант 2
// input.addEventListener('input', event => {
//   textSpan.style.fontSize = this.event.currentTarget.value + 'px';
//   //   console.log(this.event.currentTarget.value);
// });
