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