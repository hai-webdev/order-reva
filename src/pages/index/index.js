

import "../common/header";
import "../common/footer";
import "./index.less";
import Swiper from "swiper";
import {WOW} from "wowjs";

const bannerSwiper = new Swiper(".banner-swiper", {
    pagination: {
        el:".swiper-pagination",
        clickable: true
    },
    loop: true,
    autoplay:{
        delay:3000
    }
})
const offlineSwiper = new Swiper(".offline-swiper", {
    slidesPerView : 1, 
    spaceBetween : 10,
    breakpoints:{
        768:{
          slidesPerView: 2,
          spaceBetween : 20,
        },
        1080:{
          slidesPerView: 3,
          spaceBetween : 20,
        },
      },
    navigation:{
        prevEl:".swiper-button-prev",
        nextEl:".swiper-button-next",
    }
})

new WOW().init();