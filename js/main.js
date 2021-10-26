// липкий хедер
$(window).scroll(function() {
    if ($(this).scrollTop() > 250){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
//


// скролл к якорным ссылкам
$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 100
    }, 800);
});
//


var header = $('.header'),
scrollPrev1 = 0;
var headerTel = $('.header__tel_scroll');
var headerLogo = $('.header__logo');
var headerContent = $('.header__content');
var headerNavMobile = $('.header__nav_mobile')

$(window).scroll(function() {
var scrolled = $(window).scrollTop();

    if ( scrolled > 250 && scrolled ) {
        headerTel.addClass('header__tel_scroll_active');
        headerLogo.addClass('header__logo_scroll');
        headerContent.addClass('header__content_scroll');
        headerNavMobile.addClass('header__nav_mobile_scroll')
    } else {
        headerTel.removeClass('header__tel_scroll_active');
        headerLogo.removeClass('header__logo_scroll');
        headerContent.removeClass('header__content_scroll');
        headerNavMobile.removeClass('header__nav_mobile_scroll')
    }
scrollPrev1 = scrolled;
});

var bar = $('.bar'),
scrollPrev2 = 0;


$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

        if ( scrolled > 250 && scrolled > scrollPrev2 ) {
            bar.addClass('out__bar');
        } else {
            bar.removeClass('out__bar');
        }
    scrollPrev2 = scrolled;
});


// аккордеон в questions
const questionsItem = document.querySelectorAll('.questions__item');

questionsItem.forEach(function(item) {
    const accordeonTitleIconWrap = item.querySelector('.question__title-icon-wrap')
    const accordeonTitleIcon = item.querySelector('.question__title-icon')
    const accordeonTitle = item.querySelector('[data-name="accordeon-title"]')

    accordeonTitle.addEventListener("click", function(){
        accordeonTitleIcon.classList.toggle("question__title-icon_active")
        accordeonTitleIconWrap.classList.toggle("question__title-icon-wrap_active")
        let loock = this.nextElementSibling;
        if (loock.style.maxHeight){
        loock.style.maxHeight = null;
        } else {
            loock.style.maxHeight = loock.scrollHeight + "px";
        }
    })
})


//
const barMenuBtn = document.querySelector('.bar__menu');
const headerNav = document.querySelector('.header__nav_mobile');
const headerNavCloseBtn = document.querySelector('.header__nav-close');
const headerNavCloseBtnMobile = document.querySelector('.header__nav-close_mobile');

barMenuBtn.addEventListener('click', function(){
    headerNav.classList.add('header__nav_mobile_active');
    headerNavCloseBtnMobile.classList.add('header__nav-close_mobile_active');
})

headerNavCloseBtn.addEventListener('click', function(){
    headerNav.classList.remove('header__nav_mobile_active');
})

headerNavCloseBtnMobile.addEventListener('click', function(){
    headerNav.classList.remove('header__nav_mobile_active');
    headerNavCloseBtnMobile.classList.remove('header__nav-close_mobile_active');
})


// скрываем мобильную навигацию при клике на ссылки
const listItem = document.querySelectorAll('.header__nav-item');
if(listItem) {
    for (let list of listItem) {
        const itemLink = list.querySelector('.header__nav-link');

        if(itemLink) {
            itemLink.addEventListener('click', function(){
                headerNav.classList.remove('header__nav_mobile_active');
                headerNavCloseBtnMobile.classList.remove('header__nav-close_mobile_active');
            })
        }

    }
};


//
(function($) {
    $(document).ready(function(){
        var reviewsCarousel = $(".reviews__content");

        function reviewsMainCarouselInit() {
            if($('body').children(reviewsCarousel) && $(window).width() < 600){
                reviewsCarousel.owlCarousel({
                    loop:true,
                    items: 1,
                    margin:10,
                    nav:true,
                    dots: true,
                    autoHeight:true,
                    dotsEach: true
                });
            }else{
                reviewsCarousel.trigger('destroy.owl.carousel')
            };
        };

        reviewsMainCarouselInit();
        $(window).resize(function(){
            reviewsMainCarouselInit();
        });
    });
})( jQuery );
//