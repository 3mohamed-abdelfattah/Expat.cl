document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateSliderPosition = () => {
        const slideWidth = slides[0].clientWidth;
        sliderContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateSliderPosition();
    });

    window.addEventListener('resize', updateSliderPosition);
});