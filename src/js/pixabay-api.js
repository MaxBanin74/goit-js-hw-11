import axios from 'axios';
import iziToast from 'izitoast';
import { createGallery, showLoader, hideLoader } from './render-functions.js';

export const toastParam = {
  messageColor: 'white',
  backgroundColor: 'red',
  position: 'center',
  progressBar: false,
  timeout: 4000,
};

const BASE_URL = 'https://pixabay.com/api/';
const params = {
  key: '55960662-5976d34f2ed07da81c3dd4b18',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

export function getImagesByQuery(query) {
  showLoader();
  params.q = query;
  axios
    .get(BASE_URL, { params })
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
}
