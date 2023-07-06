document.getElementById('reloadImage').addEventListener('click', function () {
    location.reload();
});

$(document).ready(function () {
    $('.header__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });
});

$(document).ready(function () {
    $('.main-content__partners-all-icon').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });
});

