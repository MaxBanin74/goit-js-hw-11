import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, toastParam } from './js/pixabay-api.js';
import { clearGallery } from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  clearGallery();
  const queryText = event.target.elements['search-text'].value.trim();
  if (!queryText) {
    iziToast.show({ message: 'Please enter query', ...toastParam });
    return;
  }
  getImagesByQuery(queryText);
  event.target.reset();
}
