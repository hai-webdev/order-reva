// 头部的js代码
import "swiper/css/swiper.min.css";
import "wowjs/css/libs/animate.css";
import "./index.less";
$(".menu-btn").on("click", function(){
    $(this).toggleClass("on");
    $(this).next(".nav-container").slideToggle();
})