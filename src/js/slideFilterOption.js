import Swiper from "../../vendor/js/swiper-bundle.min";

const filterOptionSwiper = new Swiper('.filter-options .swiper', {
   slidesPerView: 'auto',
   spaceBetween: 20,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

});