document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    let slideWidth = 350;  // Width of each slide
    let slideGap = 20;       // Initial gap between slides
    const totalSlides = slides.length;

    const updateSliderPosition = () => {
        const containerWidth = sliderContainer.parentElement.clientWidth;

        // Update slide gap based on device width
        slideGap = window.innerWidth > 500 ? 35 : 20;
        slideWidth = window.innerWidth > 410 ? 350 : 288;

        if (containerWidth > 1680) {
            // Reduce opacity of navigation arrows and stop sliding
            prevButton.style.opacity = '0.5';
            nextButton.style.opacity = '0.5';
            sliderContainer.style.transform = 'translateX(0px)';
            return;
        }

        const visibleSlidesCount = Math.floor(containerWidth / (slideWidth + slideGap));
        let maxIndex = totalSlides - visibleSlidesCount;

        // If last slide doesn't fully fit, adjust maxIndex further
        const remainingSpace = containerWidth - (visibleSlidesCount * (slideWidth + slideGap) - slideGap);
        if (remainingSpace < (slideWidth + slideGap)) {
            maxIndex = totalSlides - visibleSlidesCount;
        }

        currentIndex = Math.min(currentIndex, maxIndex);

        // Update slider position
        sliderContainer.style.transform = `translateX(${-currentIndex * (slideWidth + slideGap)}px)`;

        // Update button opacity
        prevButton.style.opacity = currentIndex > 0 ? '1' : '0.5';
        nextButton.style.opacity = currentIndex < maxIndex ? '1' : '0.5';
    };

    const goToNextSlide = () => {
        const containerWidth = sliderContainer.parentElement.clientWidth;
        const visibleSlidesCount = Math.floor(containerWidth / (slideWidth + slideGap));
        const maxIndex = totalSlides - visibleSlidesCount;
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

    // Initial update to set the correct slider position and button visibility
    updateSliderPosition();
});