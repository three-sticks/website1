/**
 * Image Carousel for Hero Section
 * Cycles through images automatically
 */

function initImageCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;

  // Ensure first slide is visible
  slides[0].classList.add('active');

  // Only start carousel if there are multiple slides
  if (slides.length <= 1) return;

  let currentSlide = 0;
  const slideInterval = 4000; // 4 seconds per slide

  function showNextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
  }

  // Start the carousel
  setInterval(showNextSlide, slideInterval);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initImageCarousel);

export default initImageCarousel;

