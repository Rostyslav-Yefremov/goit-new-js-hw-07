import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

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

galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', (event) => {
  event.preventDefault();
  const urlBigImg = event.target.dataset.source;
  console.log(urlBigImg);
});
