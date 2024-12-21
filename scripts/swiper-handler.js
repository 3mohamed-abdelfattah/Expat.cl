document.addEventListener('DOMContentLoaded', function () {
    // Initialize the main Swiper instance for .swiper-container
    var swiper = new Swiper('.swiper-container', {
        loop: false, // Do not loop the slides
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Allow pagination bullets to be clickable
        },
        slidesPerView: 'auto', // Display multiple slides at once
        spaceBetween: 10, // Space between each slide in pixels
        autoplay: {
            delay: 3500, // Autoplay delay in milliseconds (3 seconds)
            disableOnInteraction: true, // Continue autoplay even after user interaction
        },
        on: {
            slideChange: function () {
                // Ensure the swiper instance is fully initialized
                if (!swiper || !swiper.slides) {
                    return;
                }
            },
            init: function () {
                // Emit the slideChange event when initialization is complete
                this.emit('slideChange');
            }
        }
    });
});