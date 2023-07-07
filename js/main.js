document.getElementById('reloadImage').addEventListener('click', function () {
    location.reload();
});

$(document).ready(function () {
    $('.header__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        lazyLoad: 'ondemand',
        swipeToSlide: true,
    });
});

$(document).ready(function () {
    $('.main-content__partners-all-icon').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 377,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
});

var navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-mobile'),
    navClose = document.getElementById('nav-menu-close'),
    navOverlay = document.getElementById('nav-overlay')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        navOverlay.classList.add('display')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        navOverlay.classList.remove('display')
    })
}

if (navOverlay) {
    navOverlay.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        navOverlay.classList.remove('display')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-menu__list-items')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    navOverlay.classList.remove('display')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

