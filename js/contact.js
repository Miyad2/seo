//Create Function



//Accordian Action
var action = 'click';
var speed = "500";


//Document.Ready
$(document).ready(function(){


//   //Question handler
// $('li.q').on(action, function(){
//   //gets next element
//   //opens .a of selected question
// $(this).next().slideToggle(speed)
//     //selects all other answers and slides up any open answer
//     .siblings('li.a').slideUp();
  
//   //Grab img from clicked question
// var img = $(this).children('.q-icon-2');
//   //Remove Rotate class from all images except the active
//   $('.q-icon-2').not(img).removeClass('rotate');
//   //toggle rotate class
//   img.toggleClass('rotate');

// });

// ====================================================



  // $('.all-slider').slick({
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   Infinity: true,
  //   swipeToSlide: true,
  //   arrows: false,
  // });




  // $(window).scroll(function () {
  //   if (
  //     $(this).scrollTop() > 50) {
  //     $
  //   }
  // })



  



// ===================  FAQ Part  =================================




// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fas fa-plus'){
            icon.className = 'fas fa-minus';
        }
        else{
            icon.className = 'fas fa-plus';
        }

    });
});



  // ======Parallax===========


  var parallaxx = document.getElementById('parallaxx')
  scroll = window.pageYOffset;
  document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    parallaxx.style.backgroundPositionY = (-6 + scroll / 20) + '%';


  });


  // ==============My Chart=================







});
//End Ready

