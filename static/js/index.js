$(document).ready(function() {
    $('.letter').fadeTo(2000, 1); // Fades in the letter over 2 seconds

    $('#toggle-images').click(function() {
        $('.images').slideToggle();
    });

    var audio = document.getElementById('background-music');
    var video = document.getElementById('video');
    
    $('#play-button').click(function() {
        audio.play();
    });

    // Lightbox functionality
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var images = document.querySelectorAll('.image-section .images img');
    var currentImageIndex;

    images.forEach((img, index) => {
        img.onclick = function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            currentImageIndex = index;
        };
    });

    document.querySelector('.close').onclick = function() {
        lightbox.style.display = 'none';
    };

    document.querySelector('.prev').onclick = function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex].src;
    };

    document.querySelector('.next').onclick = function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex].src;
    };

    // Close lightbox when clicking outside the image
    lightbox.onclick = function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    };
});
