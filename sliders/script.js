let slideIndex = 0;
let slides = document.querySelectorAll('.slider img');
let dots = document.querySelectorAll('.dot');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

function showSlides(n) {
    if (n >= slides.length) {slideIndex = 0}    
    if (n < 0) {slideIndex = slides.length - 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function autoPlay() {
    showSlides(slideIndex++);
    setTimeout(autoPlay, 5000); // Cambia la imagen cada 2 segundos
}

prev.addEventListener('click', () => {
    showSlides(--slideIndex);
});

next.addEventListener('click', () => {
    showSlides(++slideIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index);
    });
});

autoPlay();