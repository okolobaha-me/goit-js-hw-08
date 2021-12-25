import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const createGallery = list => {
  return list
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img
                      class="gallery__image"
                      src="${preview}"
                      data-source="${original}"
                      alt="${description}"
                  />
              </a>
          </div>`,
    )
    .join('');
};

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGallery(galleryItems);

const onClickImg = e => {
  if (e.target.nodeName !== 'img') {
    e.preventDefault();
  }
};

gallery.addEventListener('click', onClickImg);

let lightbox = new SimpleLightbox('.gallery .gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
