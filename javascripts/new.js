$(function(){

// Code to pop up text for projects

  $('article').mouseenter(function() {
    $(this).children('.project__text').toggleClass('hide').toggleClass('show');
  });
  $('article').mouseleave(function() {
    $(this).children('.project__text').toggleClass('show').toggleClass('hide');
  });

});
