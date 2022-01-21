import { galleryItems } from './gallery-items.js';
const galleryRef = document.querySelector('.gallery');
// Создание разметки
const markup = galleryItems
  .map((elem) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</div>`;
  })
  .join('');
// Рендер разметки в HTML
galleryRef.insertAdjacentHTML('beforeend', markup);
// Делегирование, получение и открытие большого изображения
galleryRef.addEventListener('click', onClickImage);

function onClickImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  openModal(event);
}
function openModal(event) {
  const urlBigImg = event.target.dataset.source;

  const modal = basicLightbox.create(`
    <img src="${urlBigImg}">
`);
  modal.show();
  offModalEsc(modal);
}

function offModalEsc(eventEsc) {
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      eventEsc.close();
    }
  });
}
