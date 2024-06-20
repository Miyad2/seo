$(document).ready(function(){

// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.btn').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// 000000000000000000000000000000000000000000000000

$(window).scroll(function(){
  if($(this).scrollTop() > 100 ){
    $('.scroll-top').fadeIn();
  }
  else{
    $('.scroll-top').fadeOut();
  };
});
$('.scroll-top').click(function(){
 $('html,body').animate({
   scrollTop:0
 },2000);
});




});



// ==================================================================



