$(function(){
  $('.project').hover(function() {
    $(this).children().children('p').toggleClass('hide');
  });
})
