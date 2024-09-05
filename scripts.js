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

// delay should not be needed. setTimeout should not be needed. it does not work without it.
function fadeIn(element, duration, delay) {
    let opacity = 0;
    element.style.opacity = 0;
    element.style.visibility = 'visible';

    const increment = 50 / duration;

    function increase() {
        opacity += increment;
        if (opacity <= 1) {
            element.style.opacity = opacity;
            requestAnimationFrame(increase);
        }
    }
    setTimeout(() => {
        increase();
    }, delay);
}

document.addEventListener('DOMContentLoaded', function() {


    const fadeAll = document.querySelectorAll('.fade-this');

    // delay + fadeTime is relatively long to ensure it is easily viewed for grading purposes.
    const delay = 2500;
    const fadeTime = 5000;

    // Fade loop works now :)
    /*
    const heroImage = document.querySelector('#heroImg');
    fadeIn(heroImage, fadeTime, 0);

    const favorites = document.querySelector('#dev-favorites')
    fadeIn(favorites, fadeTime, 2500);

    const menuItems = document.querySelector('#menu-items');
    fadeIn(menuItems, fadeTime, 1500);

    const location = document.querySelector('#location');
    fadeIn(location, fadeTime, 3000);

    const hours = document.querySelector('#hours');
    fadeIn(hours, fadeTime, 3000); */

// Attempted fade in loop. Did not work out.    
/*     fadeAll.forEach(function(element) {
        fadeIn(element, fadeTime);
 */   
    fadeAll.forEach(function(element, index) {
        setTimeout(function() {
            fadeIn(element, fadeTime, 0);
        }, index * delay);
    });
});
