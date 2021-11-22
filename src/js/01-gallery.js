// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryItemMarkup = galleryItems.map((item) => 
`<li class="gallery__item">
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>`).join('');

galleryList.insertAdjacentHTML('beforeend', galleryItemMarkup);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom'});