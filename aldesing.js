
const slides = document.querySelectorAll('.service-slide');
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');
const carousel = document.querySelector('.services-carousel');
let currentIndex = 1; // Start at index 1 since we're adding clones

// Clone the first and last slides for infinite looping
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

// Add clones to the carousel
carousel.insertBefore(lastClone, slides[0]);
carousel.appendChild(firstClone);

// Get all slides including the clones
const allSlides = carousel.querySelectorAll('.service-slide');

// Get the width of a single slide
const slideWidth = slides[0].clientWidth;
// Get the width of the carousel wrapper
const carouselWrapperWidth = document.querySelector('.services-wrapper').clientWidth;

// Function to update the active slide
function updateSlides() {
    allSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });
}

// Function to update the carousel position based on the current index
function updateCarouselPosition(animate = true) {
    const translateX = -currentIndex * slideWidth + (carouselWrapperWidth / 2 - slideWidth / 2);
    if (animate) {
        carousel.style.transition = 'transform 0.5s ease-in-out';
    } else {
        carousel.style.transition = 'none';
    }
    carousel.style.transform = `translateX(${translateX}px)`;
}

// Function to go to the next slide
function nextSlide() {
    currentIndex++;
    updateCarouselPosition();
    updateSlides();
    if (currentIndex === allSlides.length - 1) {
        // Jump to the real first slide without animation
        setTimeout(() => {
            currentIndex = 1;
            updateCarouselPosition(false);
            updateSlides();
        }, 500);
    }
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex--;
    updateCarouselPosition();
    updateSlides();
    if (currentIndex === 0) {
        // Jump to the real last slide without animation
        setTimeout(() => {
            currentIndex = allSlides.length - 2;
            updateCarouselPosition(false);
            updateSlides();
        }, 500);
    }
}

// Event listeners for buttons
rightButton.addEventListener('click', nextSlide);
leftButton.addEventListener('click', prevSlide);

// Initialize the carousel at the first real slide
updateCarouselPosition(false);
updateSlides();



document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.pageX}px`;  // Use pageX instead of clientX
        cursor.style.top = `${e.pageY}px`;   // Use pageY instead of clientY
    });
});
