$(function(){

// Code to pop up text for projects

  $('article').mouseenter(function() {
    $(this).children('.project__text').toggleClass('hide').toggleClass('show');
  });
  $('article').mouseleave(function() {
    $(this).children('.project__text').toggleClass('show').toggleClass('hide');
  });

  // Code to show which section someone is one in header

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

  // Code to minimize header

  $(window).scroll( function() {
      var value = $(this).scrollTop();
      if ( value > 200 ) {
        $('.header').addClass('header2');
      } else {
        $('.header').removeClass('header2');
      }
  });

  // Code to animate scrolling

  $.localScroll({duration:800});

})
