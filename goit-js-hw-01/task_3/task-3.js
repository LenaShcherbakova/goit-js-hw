const ADMIN_PASSWORD = 'jqueryismyjam';
const input = prompt('Введите пароль');

let message;

if (input === null) {
  message = 'Отменено пользователем!';
} else if (input === ADMIN_PASSWORD) {
  message = 'Добро пожаловать';
} else if (input !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(`${message}`);
console.log(message);
