// 'use strict';

import images from './gallery-items.js';

const photoGallery = document.querySelector('.js-gallery');

const lightbox = document.querySelector('.js-lightbox');
const lightBoxImage = document.querySelector('.lightbox__image');
const galleryItemImg = document.querySelector('.gallery__item');
const lightBoxBtn = document.querySelector(
  '.button[data-action="close-lightbox"]',
);
const overlayBox = document.querySelector('.lightbox__overlay');
// console.log(photoGallery);

// images.forEach(image => {
//   // console.log(image);
//   const item = `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}"data-source="${image.original}"alt="${image.description}"/></a></li>`;
//   photoGallery.insertAdjacentHTML('afterbegin', item);
// });

function addGalleryImages(imagesArray) {
  imagesArray.forEach(image => {
    photoGallery.insertAdjacentHTML(
      'afterbegin',
      `<li class="gallery__item">
      <a class="gallery__link" href="${image.original}"
      >
      <img class="gallery__image" src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
      />
      </a>
      </li>
      `,
    );
  });
  return photoGallery;
}

addGalleryImages(images);

function openModal(event) {
  event.preventDefault();
  // console.log(event.currentTarget);
  if (event.target === event.currentTarget) {
    return;
  }
  lightbox.classList.add('is-open');
  lightBoxImage.src = event.target.dataset.source;
}

photoGallery.addEventListener('click', openModal);

function closeModal(event) {
  console.log(event.target.nodeName);

  if (event.target.nodeName === 'BUTTON' || overlayBox) {
    lightbox.classList.remove('is-open');
    lightBoxImage.src = '';
  }
}

lightbox.addEventListener('click', closeModal);

window.addEventListener('keydown', function(event) {
  const curIndexImage = images.findIndex(
    image => image.original === lightBoxImage.src,
  );

  let nextIndex;

  if (event.key === 'ArrowRight') {
    nextIndex = curIndexImage === 0 ? images.length - 1 : curIndexImage - 1;
    lightBoxImage.src = images[nextIndex].original;
  } else if (event.key === 'ArrowLeft') {
    nextIndex = curIndexImage + 1 === images.length ? 0 : curIndexImage + 1;
    lightBoxImage.src = images[nextIndex].original;
  }
  if (event.key === 'Escape') {
    lightbox.classList.remove('is-open');
  }
});
