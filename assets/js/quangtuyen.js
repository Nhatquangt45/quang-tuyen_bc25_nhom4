///slick carousel
$(document).ready(function(){
    $('.slick__slider').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        Infinity:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                dots: true,
              },
            },
            ],
  });
  });

  //back to top

  $(document).ready(function(){
      $(window).scroll(function(){
          if($(this).scrollTop()){
              $('#backtotop').fadeIn();
          }else{
              $('#backtotop').fadeOut();
          }
      });
      $("#backtotop").click(function(){
        $('html, body').animate({
            scrollTop:0
        },600);
      });
  });
          