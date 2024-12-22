document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const slideWidth = 350;  // Width of each slide
    const slideGap = 20;     // Gap between slides
    const totalSlides = slides.length;

    const updateSliderPosition = () => {
        const containerWidth = sliderContainer.parentElement.clientWidth;
        const visibleSlidesCount = Math.floor(containerWidth / (slideWidth + slideGap));
        const totalWidth = totalSlides * (slideWidth + slideGap) - slideGap;

        // Always show the navigation buttons
        prevButton.style.display = 'flex';
        nextButton.style.display = 'flex';

        // Adjust maxIndex to ensure the last slide can be fully visible
        const maxIndex = Math.max(0, totalSlides - visibleSlidesCount);
        currentIndex = Math.min(currentIndex, maxIndex);
        sliderContainer.style.transform = `translateX(${-currentIndex * (slideWidth + slideGap)}px)`;
    };

    const goToNextSlide = () => {
        const containerWidth = sliderContainer.parentElement.clientWidth;
        const visibleSlidesCount = Math.floor(containerWidth / (slideWidth + slideGap));
        const maxIndex = Math.max(0, totalSlides - visibleSlidesCount);
        currentIndex = Math.min(currentIndex + 1, maxIndex);  // Navigate one slide at a time
        updateSliderPosition();
    };

    const goToPrevSlide = () => {
        currentIndex = Math.max(currentIndex - 1, 0);  // Navigate one slide at a time
        updateSliderPosition();
    };

    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);

    window.addEventListener('resize', updateSliderPosition);

    // Loop through the slides every 5 seconds
    // setInterval(goToNextSlide, 5000);

    // Initial update to set the correct slider position and button visibility
    updateSliderPosition();
});