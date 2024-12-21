document.addEventListener('DOMContentLoaded', function () {
    // Initialize the first Swiper instance for .swiper-container2
    var swiper2 = new Swiper('.swiper-container2', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
    });

    // Initialize the main Swiper instance for .swiper-container
    var swiper = new Swiper('.swiper-container', {
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
        on: {
            slideChange: function () {
                // Ensure the swiper instance is fully initialized
                if (!swiper || !swiper.slides) {
                    return;
                }

                // Remove transparency from all slides
                document.querySelectorAll('.swiper-slide').forEach(slide => {
                    slide.style.opacity = '1';
                });

                // Apply transparency to partially visible slides
                swiper.slides.forEach(slide => {
                    const rect = slide.getBoundingClientRect();
                    const isPartiallyVisible = (rect.left < window.innerWidth && rect.right > window.innerWidth) || (rect.right > 0 && rect.left < 0);

                    if (isPartiallyVisible) {
                        slide.style.opacity = '0.5';
                    }
                });
            },
            init: function () {
                this.emit('slideChange');
            }
        }
    });
});