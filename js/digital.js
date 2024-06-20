$(document).ready(function () {

  $('.all-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    Infinity: true,
    swipeToSlide: true,
    arrows: false,
  });


  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
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



  $(window).scroll(function () {
    if (
      $(this).scrollTop() > 50) {
      $
    }
  })



  $('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,


    responsive: [{
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

  // ======Parallax===========


  var parallaxx = document.getElementById('parallaxx')
  scroll = window.pageYOffset;
  document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    parallaxx.style.backgroundPositionY = (-9 + scroll / 20) + '%';


  });


  // ==============My Chart=================


  const ctx = document.getElementById("myChart").getContext("2d");

  let delayed;

  let gradient = ctx.createLinearGradient(0, 0, 0, 200);

  gradient.addColorStop(0, 'rgba(254,150,3, 0.5)');
  gradient.addColorStop(1, 'rgba(254,150,3, 0)');
  gradient.addColorStop(1, 'rgba(254,150,3, 0)');


  const labels = ['2015', '2016', '2017', '2018', '2019', '2020'];

  const data = {
    labels,
    datasets: [{
      data: [30, 90, 50, 120, 100, 170],
      label: "Sales Chart",
      fill: true,
      backgroundColor: gradient,
      borderColor: "#fff",
      pointBackgroundColor: "rgb(189, 195, 199)",
      tension: 0.4,
      pointBackgroundColor: 'white',
      borderWidth: 2,
      borderColor: '#fE9603',
      pointRadius: 3,
      pointHoverRadius: 3,
      pointHoverBorderWidth: 3,
    }, ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      radius: 5,
      hitRadius: 100,
      hoverRadius: 10,



      animation: {
        duration: 3000,
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },



      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return "$" + value + "m";
            },
            display: false,

          },
          grid: {

            drawBorder: false,
            display: false,
          }
        },
        x: {
          grid: {

            drawBorder: false,
            display: false,
          }
        }
      },

      plugins: {
        legend: {
          display: false
        }
      }

    },

  };

  const myChart = new Chart(ctx, config);

// ======  Counter-Up  =======


$('.counter').counterUp({
  delay: 50,
  time: 3000,
});








});