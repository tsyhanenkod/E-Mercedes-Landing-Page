$(function(){

  $('.ds_slider').slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow_left" src="images/arrow left.svg" alt="arrow">',
    nextArrow: '<img class="arrow arrow_right" src="images/arrow roght.svg" alt="arrow">',
    responsive:[
      {
        breakpoint: 711,
        settings:{
          variableWidth: false,
          slidesToShow: 1,
        }
      }
    ]
  });

});