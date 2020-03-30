const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function handleInputChange(event) {
  if (input.value !== '') {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = 'Незнакомец';
  }
}

input.addEventListener('input', handleInputChange);
