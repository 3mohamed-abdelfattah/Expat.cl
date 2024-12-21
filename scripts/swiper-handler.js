document.addEventListener('DOMContentLoaded', function () {
    // Initialize the first Swiper instance for .swiper-container2
    var swiper2 = new Swiper('.swiper-container2', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
            delay: 3000, // مدة التمرير التلقائي بالمللي ثانية (3 ثواني)
            disableOnInteraction: false, // استمر في التمرير التلقائي حتى بعد التفاعل
        },
    });

    // Initialize the main Swiper instance for .swiper-container
    var swiper = new Swiper('.swiper-container', {
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
            delay: 3000, // مدة التمرير التلقائي بالمللي ثانية (3 ثواني)
            disableOnInteraction: false, // استمر في التمرير التلقائي حتى بعد التفاعل
        },
        on: {
            slideChange: function () {
                // Ensure the swiper instance is fully initialized
                if (!swiper || !swiper.slides) {
                    return;
                }
            },
            init: function () {
                this.emit('slideChange');
            }
        }
    });
});