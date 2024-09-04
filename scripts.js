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

function fadeIn(element, duration) {
    let opacity = 0;
    element.style.opacity = 0;
    element.style.display = 'block';

    const increment = 50 / duration;

    function increase() {
        opacity += increment;
        if (opacity <= 1) {
            element.style.opacity = opacity;
            requestAnimationFrame(increase);
        }
    }

    increase();
}

document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('#hero-img')
    fadeIn(heroImage, 10000);
});