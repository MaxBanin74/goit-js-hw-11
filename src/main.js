import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const toastParam = {
  messageColor: 'white',
  backgroundColor: 'red',
  position: 'center',
  progressBar: false,
  timeout: 4000,
};

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  clearGallery();
  const queryText = event.target.elements['search-text'].value.trim();
  if (!queryText) {
    iziToast.show({ message: 'Please enter query', ...toastParam });
    event.target.reset();
    return;
  }
  showLoader();
  getImagesByQuery(queryText)
    .then(response => {
      const photo = response.data.hits;
      if (!photo.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          ...toastParam,
        });
        return;
      }
      createGallery(photo);
    })
    .catch(error => {
      iziToast.show({ message: error, ...toastParam });
    })
    .finally(() => {
      hideLoader();
    });
  event.target.reset();
}
