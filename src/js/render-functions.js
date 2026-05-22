import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function clearGallery() {
  if (gallery) {
    gallery.innerHTML = '';
  }
}

export function createGallery(images) {
  const galleryItems = images
    .map(
      img =>
        `<li class="gallery-item">
            <a class="gallery-link" href="${img.largeImageURL}">
            <img
                class="gallery-image"
                src="${img.webformatURL}"
                alt="${img.tags}"
            />
            </a>
            <ul class="comment-list">
                <li class="comment-item">
                    <p class=comment-title>Likes</p>
                    <p class=comment-value>${img.likes}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Views</p>
                    <p class=comment-value>${img.views}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Comments</p>
                    <p class=comment-value>${img.comments}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Downloads</p>
                    <p class=comment-value>${img.downloads}</p>
                </li>
            </ul>
        </li>`
    )
    .join('');
  if (gallery) {
    gallery.insertAdjacentHTML('beforeend', galleryItems);
    const galleryModal = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
      captionPosition: 'bottom',
    });
  }
}

export function showLoader() {
  gallery.classList.toggle('loader');
}

export function hideLoader() {
  gallery.classList.toggle('loader');
}
