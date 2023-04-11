document.addEventListener('DOMContentLoaded', function() {
  const portfolioImages = document.querySelectorAll('.portfolio-images img');
  const lightbox = document.createElement('div');
  const lightboxImage = document.createElement('img');
  const lightboxClose = document.createElement('div');

  lightbox.classList.add('lightbox');
  lightboxClose.classList.add('lightbox-close');
  lightboxClose.innerHTML = '&times;';

  lightbox.appendChild(lightboxImage);
  lightbox.appendChild(lightboxClose);

  document.body.appendChild(lightbox);

  function openLightbox(src) {
    lightboxImage.src = src;
    lightbox.style.display = 'flex';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  portfolioImages.forEach(image => {
    image.addEventListener('click', () => {
      openLightbox(image.src);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
});
