// 头部的js代码
import "./index.less";
$(".menu-btn").on("click", function(){
    $(this).toggleClass("on");
    $(this).next(".nav-container").slideToggle();
})