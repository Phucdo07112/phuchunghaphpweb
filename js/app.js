window.addEventListener('scroll', function() {
    const imgUp = document.querySelector('.intro-up');
    imgUp.classList.toggle('active', window.scrollY > 0);
})
window.addEventListener('scroll', function() {
    const imgDow = document.querySelector('.intro-dow');
    imgDow.classList.toggle('active', window.scrollY > 800);
})
window.addEventListener('scroll', function() {
    const imgDow = document.querySelector('.intro-dow');
    imgDow.classList.toggle('toggle', window.scrollY > 1000);
})
// product
const imgItem = document.querySelectorAll('.product-img__item');

imgItem.forEach(function(value,index) {
    const homeImg = document.querySelector('.product-img');
    value.onclick = function() {
        homeImg.src = value.src
    }
})



var swiper = new Swiper(".intro-img", {
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

var swiper = new Swiper(".intro-product", {
        slidesPerView: 4,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        grid: {
          rows: 2,
        },
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true
      });