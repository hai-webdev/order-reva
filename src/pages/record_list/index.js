import "../common/header2";
import "./index.less";
import Swiper from "swiper";

const recordSwiper = new Swiper(".record-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints:{
    768:{
      slidesPerView: 2,
    },
    1080:{
      slidesPerView: 3,
    },
    1440:{
      slidesPerView: 3.5,
    }
  },
  freeMode: true,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
