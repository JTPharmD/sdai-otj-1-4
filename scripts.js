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

function fadeIn(element, duration, delay) {
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
    setTimeout(() => {
        increase();
    }, delay);
}

document.addEventListener('DOMContentLoaded', function() {


//  Use for fade loop if I could ever get it to work. :_(
//    const fadeAll = document.querySelectorAll('.fade-this');
    

    const fadeTime = 5000;

    const heroImage = document.querySelector('#heroImg');
    fadeIn(heroImage, fadeTime, 0);

    const favorites = document.querySelector('#dev-favorites')
    fadeIn(favorites, fadeTime, 2500);

    const menuItems = document.querySelector('#menu-items');
    fadeIn(menuItems, fadeTime, 1500);

    const location = document.querySelector('#location');
    fadeIn(location, fadeTime, 3000);

    const hours = document.querySelector('#hours');
    fadeIn(hours, fadeTime, 3000);

// Attempted fade in loop. Did not work out.    
//    fadeAll.forEach(function(element) {
//        fadeIn(element, 10000);
    
//    fadeAll.forEach(function(element, index) {
//        setTimeout(function() {
//            fadeIn(element, 5000);
//        }, index * delayBetweenItems);
//    });
});
