$(document).ready(function(){
    // 메뉴
    $('.menu_a').mouseover(function(){
    $('.sub_a').stop().slideDown(); 
    }).mouseout(function(){
    $('.sub_a').stop().slideUp();
    });
})