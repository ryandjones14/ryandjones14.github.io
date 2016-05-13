$(function(){

  $('.project').mouseenter(function() {
    $(this).children('.project__text').toggleClass('hide');
  });
  $('.project').mouseleave(function() {
    $(this).children('.project__text').toggleClass('hide');
  });

  $('.menu__about').on('click', function() {
    $('.about').removeClass('hide');
    $('.about').siblings().addClass('hide');
  });

  $('.menu__projects').on('click', function() {
    $('.projects').removeClass('hide');
    $('.projects').siblings().addClass('hide');
  });
})
