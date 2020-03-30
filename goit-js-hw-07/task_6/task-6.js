const inputCheck = document.querySelector('#validation-input');

function onInputBlur(event) {
  const input = event.currentTarget;

  //   currentInput = Number(currentInput.dataset.length);
  if (input.value.length == inputCheck.dataset.length) {
    console.log(typeof inputCheck.dataset.length);
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}

inputCheck.addEventListener('blur', onInputBlur);
