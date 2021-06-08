function sliderMain() {
    var swiper = new Swiper('.main--index .swiper-container', {
        speed: 200,
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,

        navigation: {
            nextEl: '.main--index .swiper-button-next',
            prevEl: '.main--index .swiper-button-prev',
        },
        pagination: {
            el: ".main--index .swiper-pagination",
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


function sliderMainService() {
    var swiper = new Swiper('.main--service .swiper-container', {
        speed: 200,
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,

        navigation: {
            nextEl: '.main--service .swiper-button-next',
            prevEl: '.main--service .swiper-button-prev',
        },
        pagination: {
            el: ".main--service .swiper-pagination",
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
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    })
}
$(document).ready(function() {
    if ($(window).width() < 992) {
        sliderMain()
        sliderMainService()
    }

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active");
        $(".header__nav").slideToggle();
    })

    $(".modal-open").click(function() {
        let path = $(this).attr("data-tabs-path");
        console.log(path);
        $(`.modal-form[data-tabs-target='${path}']`).addClass("modal--active");
        $(".modal-bg").show()
    })

    $(".modal-form__close").click(function() {
        $(this).parent().removeClass("modal--active")
        $(".modal-bg").hide()
    })
    $(".modal-bg").click(function() {
        $(".modal-form").removeClass("modal--active")
        $(".modal-bg").hide()
    })
})