import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const params = {
  key: '55960662-5976d34f2ed07da81c3dd4b18',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

export function getImagesByQuery(query) {
  params.q = query;
  return axios.get(BASE_URL, { params });
}
