const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
    searchEl.classList.remove('focused');
    searchInputEl.removeAttribute('placeholder', '통합검색');
});

const badgeEl  = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        // 배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity:0,
            display: 'none',
    });
    
    }else{
        gsap.to(badgeEl, .6, {
            opacity:1,
            display: 'block',
    });
    }
}, 300));

// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        opacity: 100,
        delay: (index+1) * .7,
    });


});

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    /*autoplay: {
        delay: 1000,
    },*/
    pagination:{
        el: '.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next ',
    }
});


const promotionEl = document.querySelector('.notice .promotion');
const protmotionToggleBtn = document.querySelector('.toggle-promotion');
const paginationEl = document.querySelector('.notice .promotion .swiper-pagination');
let isHidePromotion = false;

protmotionToggleBtn.addEventListener('click', () => {
    promotionEl.classList.toggle('hide');
    paginationEl.classList.toggle('hide');
});

function random(min, max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: delay,
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);