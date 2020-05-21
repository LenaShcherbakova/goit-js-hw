import './styles.css';
import menu from './menu.json';
import menuTemplateItem from './templates/menu-items.hbs';

const refs = {
  body: document.querySelector('body'),
  inputSwitch: document.querySelector('.js-switch-input'),
  menuItems: document.querySelector('.js-menu'),
};

// refs.menuItems.insertAdjacentHTML('beforeend', markup);

buildMenuItem(menu);

function buildMenuItem(menu) {
  const markup = menu.map(item => menuTemplateItem(item)).join('');

  refs.menuItems.insertAdjacentHTML('beforeend', markup);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.inputSwitch.addEventListener('change', function() {
  refs.body.classList.toggle('dark-theme');
  localStorage.setItem(
    'theme',
    refs.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme',
  );
});

if (localStorage.getItem('theme') === 'dark-theme') {
  refs.inputSwitch.checked = true;
  refs.body.classList.add('dark-theme');
}
