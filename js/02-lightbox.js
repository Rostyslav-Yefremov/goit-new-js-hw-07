import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
// Создание разметки
const markup = galleryItems
  .map((elem) => {
    return `<a class="gallery__item" href="${elem.original}">
  <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
</a>`;
  })
  .join('');
// Рендер разметки в HTML
galleryRef.insertAdjacentHTML('beforeend', markup);
// Использование библиотеки
new SimpleLightbox('.gallery a', {
  captioneType: 'text',
  captionsData: 'alt',
  captionDelay: 250,
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    close.SimpleLightbox;
  }
});
