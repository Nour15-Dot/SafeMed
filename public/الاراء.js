let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Update current slide index
    currentSlide = (n + slides.length) % slides.length;

    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function setSlide(n) {
    showSlide(n);
}

// Auto advance slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Initialize first slide
showSlide(0);