document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery img');
    let currentIndex = 0;

    function toggleImages() {
        images[currentIndex].classList.remove('img-active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('img-active');
    }

    setInterval(toggleImages, 3000);
});