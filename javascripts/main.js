$(function(){

  function pageLoaded(){
    $('.menu__projects').addClass('active');
  }

  window.onload = pageLoaded();

  function changeBackground(i){
    var backs = [3,2,4];
    $('body').removeClass();
    $('body').addClass('back'+backs[i]);
  }

  function pickBackground(num){
    setInterval(function(){
      num++;
      if(num>2){
        num = 0;
      }
      changeBackground(num)
    }, 60000);;
  }

  window.onload = pickBackground(0);



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

})
