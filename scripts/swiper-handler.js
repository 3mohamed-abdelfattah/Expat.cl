document.addEventListener('DOMContentLoaded', () => {
    // Slider 1 - Need Help Moving To Chile
    const sliderContainer1 = document.querySelector('.slider-container');
    const slides1 = document.querySelectorAll('.slide');
    const prevButton1 = document.querySelector('.prev');
    const nextButton1 = document.querySelector('.next');

    let currentIndex1 = 0;
    let slideWidth1 = 350;  // Width of each slide
    let slideGap1 = 20;     // Initial gap between slides
    const totalSlides1 = slides1.length;

    const updateSliderPosition1 = () => {
        const containerWidth1 = sliderContainer1.parentElement.clientWidth;

        // Update slide gap based on device width
        slideGap1 = window.innerWidth > 500 ? 35 : 20;
        slideWidth1 = window.innerWidth > 410 ? 350 : 288;

        if (containerWidth1 > 1680) {
            // Reduce opacity of navigation arrows and stop sliding
            prevButton1.style.opacity = '0.5';
            nextButton1.style.opacity = '0.5';
            sliderContainer1.style.transform = 'translateX(0px)';
            return;
        }

        const visibleSlidesCount1 = Math.floor(containerWidth1 / (slideWidth1 + slideGap1));
        let maxIndex1 = totalSlides1 - visibleSlidesCount1;

        // If last slide doesn't fully fit, adjust maxIndex further
        const remainingSpace1 = containerWidth1 - (visibleSlidesCount1 * (slideWidth1 + slideGap1) - slideGap1);
        if (remainingSpace1 < (slideWidth1 + slideGap1)) {
            maxIndex1 = totalSlides1 - visibleSlidesCount1;
        }

        currentIndex1 = Math.min(currentIndex1, maxIndex1);

        // Update slider position
        sliderContainer1.style.transform = `translateX(${-currentIndex1 * (slideWidth1 + slideGap1)}px)`;

        // Update button opacity
        prevButton1.style.opacity = currentIndex1 > 0 ? '1' : '0.5';
        nextButton1.style.opacity = currentIndex1 < maxIndex1 ? '1' : '0.5';
    };

    const goToNextSlide1 = () => {
        const containerWidth1 = sliderContainer1.parentElement.clientWidth;
        const visibleSlidesCount1 = Math.floor(containerWidth1 / (slideWidth1 + slideGap1));
        const maxIndex1 = totalSlides1 - visibleSlidesCount1;
        currentIndex1 = Math.min(currentIndex1 + 1, maxIndex1);  // Navigate one slide at a time
        updateSliderPosition1();
    };

    const goToPrevSlide1 = () => {
        currentIndex1 = Math.max(currentIndex1 - 1, 0);  // Navigate one slide at a time
        updateSliderPosition1();
    };

    prevButton1.addEventListener('click', goToPrevSlide1);
    nextButton1.addEventListener('click', goToNextSlide1);

    window.addEventListener('resize', updateSliderPosition1);

    // Initial update to set the correct slider position and button visibility
    updateSliderPosition1();


    // Slider 2 - Reviews
    const reviewSliderContainer = document.querySelector('.review-slider-container');
    const reviewSlides = document.querySelectorAll('.review-slide');
    const prevReviewButton = document.querySelector('.prev-review');
    const nextReviewButton = document.querySelector('.next-review');

    let reviewCurrentIndex = 0;
    let reviewSlideWidth = 720;  // Width of each slide
    let reviewSlideGap = 20;     // Initial gap between slides
    const totalReviewSlides = reviewSlides.length;

    const updateReviewSliderPosition = () => {
        const containerWidth = reviewSliderContainer.parentElement.clientWidth;

        // Update slide width based on screen width
        if (containerWidth < 1024) {
            reviewSlideWidth = containerWidth; // 80% of the container width
        } else {
            reviewSlideWidth = 720; // Default width
        }

        if (containerWidth > 1680) {
            // Reduce opacity of navigation arrows and stop sliding
            prevReviewButton.style.opacity = '0.5';
            nextReviewButton.style.opacity = '0.5';
            reviewSliderContainer.style.transform = 'translateX(0px)';
            return;
        }

        const visibleSlidesCount = Math.floor(containerWidth / (reviewSlideWidth + reviewSlideGap));
        let maxIndex = totalReviewSlides - visibleSlidesCount;

        // If last slide doesn't fully fit, adjust maxIndex further
        const remainingSpace = containerWidth - (visibleSlidesCount * (reviewSlideWidth + reviewSlideGap) - reviewSlideGap);
        if (remainingSpace < (reviewSlideWidth + reviewSlideGap)) {
            maxIndex = totalReviewSlides - visibleSlidesCount;
        }

        reviewCurrentIndex = Math.min(reviewCurrentIndex, maxIndex);

        // Update slider position
        reviewSliderContainer.style.transform = `translateX(${-reviewCurrentIndex * (reviewSlideWidth + reviewSlideGap)}px)`;

        // Update button opacity
        prevReviewButton.style.opacity = reviewCurrentIndex > 0 ? '1' : '0.5';
        nextReviewButton.style.opacity = reviewCurrentIndex < maxIndex ? '1' : '0.5';
    };

    const goToNextReviewSlide = () => {
        const containerWidth = reviewSliderContainer.parentElement.clientWidth;
        const visibleSlidesCount = Math.floor(containerWidth / (reviewSlideWidth + reviewSlideGap));
        const maxIndex = totalReviewSlides - visibleSlidesCount;
        reviewCurrentIndex = Math.min(reviewCurrentIndex + 1, maxIndex);  // Navigate one slide at a time
        updateReviewSliderPosition();
    };

    const goToPrevReviewSlide = () => {
        reviewCurrentIndex = Math.max(reviewCurrentIndex - 1, 0);  // Navigate one slide at a time
        updateReviewSliderPosition();
    };

    prevReviewButton.addEventListener('click', goToPrevReviewSlide);
    nextReviewButton.addEventListener('click', goToNextReviewSlide);

    window.addEventListener('resize', updateReviewSliderPosition);

    // Initial update to set the correct slider position and button visibility
    updateReviewSliderPosition();
});