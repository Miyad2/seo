$(document).ready(function(){

    $('.all-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      Infinity:true,
      swipeToSlide:true,
      arrows:false,
    });
      
  
    $('.responsive').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });



// $(window).scroll(function(){
//   if(
//     $(this).scrollTop() > 50){
//       $
//     }
// })



$('.variable-width').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  autoplay:true,
  slidesToScroll: 1,
  arrows:false,
  pauseOnHover: false,
  

 responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

});


//   const parallax = document.getElementById("parallax");

// window.addEventListener("scroll", function(){
//   let offset = window.pageYOffset;
// parallax.style.backgroundPositionY = offset * 0.5 + "px"


// })

// var parallaxx = document.getElementById('parallaxx')
// scroll = window.pageYOffset;
// document.addEventListener('scroll', function(e){
//   var offset = window.pageYOffset;
//   scroll = offset;
//   parallaxx.style.width = (100 + scroll/80) + '%';
//   parallaxx.style.top = (scroll/10 + '%');

  
// });

var parallaxx = document.getElementById('parallaxx')
scroll = window.pageYOffset;
document.addEventListener('scroll', function(e){
  var offset = window.pageYOffset;
  scroll = offset;
  parallaxx.style.backgroundPositionY = (50 + scroll/5) + '%';


});





  });

 






