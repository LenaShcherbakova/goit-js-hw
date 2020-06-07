import './styles.css';
import countriesService from './fetchCountries';

import countryListTemplate from './countries-List.hbs';
import countryItemTemplate from '../src/countryTemplateItem.hbs';
import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const debounce = require('lodash.debounce');

const refs = {
  countryContainer: document.querySelector('#country-container'),
  searchInput: document.querySelector('#js-search-input'),
  countryList: document.querySelector('#js-country-list'),
};

refs.searchInput.addEventListener(
  'input',
  debounce(searchInputSubmitHandler, 500),
);

function searchInputSubmitHandler(e) {
  const inputValue = e.target.value;

  countriesService.fetchCountries(inputValue).then(data => {
    if (data.length < 2) {
      clearListItems();
      const markup = buildItemMarkup(data);
      insertOneCountry(markup);
    } else if (data.length >= 2 && data.length <= 10) {
      clearListItems();
      const listMarkup = buildListItemsMarkup(data);
      insertListCountries(listMarkup);
    } else if (data.length > 10) {
      clearListItems();
      const lengthError = error({
        text: 'Too many matches found. Please enter a more specific query!',
        delay: 3000,
      });
    }
  });
}
// const markup = buildListItemsMarkup(data);

function insertOneCountry(item) {
  refs.countryList.insertAdjacentHTML('beforeend', item);
}

function insertListCountries(items) {
  refs.countryList.insertAdjacentHTML('beforeend', items);
}

function buildListItemsMarkup(items) {
  return countryListTemplate(items);
}

function buildItemMarkup(items) {
  return countryItemTemplate(items);
}

function clearListItems() {
  refs.countryList.innerHTML = '';
}
