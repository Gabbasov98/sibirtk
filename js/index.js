function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,

        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: ".main .swiper-pagination",
            // dynamicBullets: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 15,
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    })
}



$(document).ready(function() {
    if ($(window).width() < 992) {
        sliderMain()
    }

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active");
        $(".header__nav").slideToggle();
    })
})