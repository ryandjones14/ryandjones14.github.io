$(function(){

  function pageLoaded(){
    $('.menu__projects').addClass('active');
    console.log("PAGE LOADED!");
  }

  window.onload = pageLoaded();

  $('.project').mouseenter(function() {
    $(this).children('.project__text').toggleClass('hide');
  });
  $('.project').mouseleave(function() {
    $(this).children('.project__text').toggleClass('hide');
  });

  $('.menu__about').on('click', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.about').removeClass('hide');
    $('.about').siblings().addClass('hide');
  });

  $('.menu__projects').on('click', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.projects').removeClass('hide');
    $('.projects').siblings().addClass('hide');
  });

})
