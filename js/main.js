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

// скролл к якорным ссылкам
$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 0
    }, 800);
});
//


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