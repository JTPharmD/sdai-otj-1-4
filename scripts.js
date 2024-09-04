document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    document.querySelectorAll('.dev-favorites-gallery img').forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
});
