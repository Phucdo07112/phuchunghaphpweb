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
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

const app = {
  currentIndex: 0,
  prices: [
    {
      imgHome: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051136_1000_x_1500__Dai_dien_0_thumb.jpg',
      item1: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051108_1000_x_1500__Dai_dien_thumb.jpg',
      item2: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051147_1000_x_1500__Dai_dien_2_thumb.jpg',
      item3: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051157_1000_x_1500__Dai_dien_1_thumb.jpg',
      money: '238,500₫',
      money2: '265,000₫',
    },
    {
      imgHome: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051136_1000_x_1500__Dai_dien_0_thumb.jpg',
      item1: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051108_1000_x_1500__Dai_dien_thumb.jpg',
      item2: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051147_1000_x_1500__Dai_dien_2_thumb.jpg',
      item3: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051157_1000_x_1500__Dai_dien_1_thumb.jpg',
      money: '238,500₫',
      money2: '265,000₫',
    },
    {
      imgHome: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051136_1000_x_1500__Dai_dien_0_thumb.jpg',
      item1: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051108_1000_x_1500__Dai_dien_thumb.jpg',
      item2: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051147_1000_x_1500__Dai_dien_2_thumb.jpg',
      item3: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051157_1000_x_1500__Dai_dien_1_thumb.jpg',
      money: '238,500₫',
      money2: '265,000₫',
    },
    {
      imgHome: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051136_1000_x_1500__Dai_dien_0_thumb.jpg',
      item1: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051108_1000_x_1500__Dai_dien_thumb.jpg',
      item2: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051147_1000_x_1500__Dai_dien_2_thumb.jpg',
      item3: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051157_1000_x_1500__Dai_dien_1_thumb.jpg',
      money: '238,500₫',
      money2: '265,000₫',
    },
    {
      imgHome: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051136_1000_x_1500__Dai_dien_0_thumb.jpg',
      item1: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051108_1000_x_1500__Dai_dien_thumb.jpg',
      item2: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051147_1000_x_1500__Dai_dien_2_thumb.jpg',
      item3: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051157_1000_x_1500__Dai_dien_1_thumb.jpg',
      money: '238,500₫',
      money2: '265,000₫',
    },
    {
      imgHome: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051136_1000_x_1500__Dai_dien_0_thumb.jpg',
      item1: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051108_1000_x_1500__Dai_dien_thumb.jpg',
      item2: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051147_1000_x_1500__Dai_dien_2_thumb.jpg',
      item3: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211105/05112021051157_1000_x_1500__Dai_dien_1_thumb.jpg',
      money: '238,500₫',
      money2: '265,000₫',
    },
  ],
  render: function() {
    const htmls = this.prices.map(price => {
      return `
      <div class="swiper-slide product-item">
                            
        <div class="product-over">
          <img src="${price.imgHome}" alt="" class="product-img">
          <div class="product-cl">
            <img src="${price.item1}" alt="" class="product-img__item">
            <img src="${price.item2}" alt="" class="product-img__item">
            <img src="${price.item3}" alt="" class="product-img__item">
          </div>
        </div>
        <div class="price">
          <span class="price-1">${price.money}</span>
          <span class="price-2">${price.money2}</span>
        </div> 
      </div>
      `
    })
    $('.product-flex').innerHTML = htmls.join('');

  },
  start: function() {
    this.render();
  }
}
app.start();


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
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

var swiper = new Swiper(".intro-product__2", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


var swiper = new Swiper(".news-left", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

