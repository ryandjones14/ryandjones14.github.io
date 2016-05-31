$(function(){

  function pageLoaded(){
    $('.menu__projects').addClass('active');
  }

  // window.onload = pageLoaded();

  // function changeBackground(i){
  //   var backs = [3,2,4];
  //   $('#greeting').removeClass();
  //   $('#greeting').addClass('text'+backs[i]);
  // }

  // function pickBackground(num){
  //   setInterval(function(){
  //     num++;
  //     if(num>2){
  //       num = 0;
  //     }
  //     changeBackground(num)
  //   }, 30000);;
  // }

  // window.onload = pickBackground(0);

// Code to show which section someone is one in header

  $('.project').mouseenter(function() {
    $(this).children('.project__text').toggleClass('hide').toggleClass('show');
  });
  $('.project').mouseleave(function() {
    $(this).children('.project__text').toggleClass('show').toggleClass('hide');
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

  // Code to minimize header

  $(window).scroll( function() {
      var value = $(this).scrollTop();
      if ( value > 200 ) {
        $('.header').addClass('header2');
      } else {
        $('.header').removeClass('header2');
      }
  });

})
