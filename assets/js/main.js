// // Dark theme
// document.querySelector("#toggle_theme").addEventListener("click", () => {
//   document.body.classList.toggle("theme-dark");
// });
// // Back to top
// document.querySelector("#back_to_top").addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });
// Background light & dark
var icon1 = document.getElementById("icon-background-dark");
var icon3 = document.getElementById("icon-background-light");
icon1.onclick = function () {
  icon1.style.display = `none`;
  document.body.classList.toggle("dark");
  document.body.classList.remove("light");
  icon3.style.display = `block`;
};
icon3.onclick = function () {
  icon3.style.display = `none`;
  document.body.classList.remove("dark");
  document.body.classList.toggle("light");
  icon1.style.display = `block`;
};
//thay đổi kích thước
const largeScreen = document.querySelector(".screen-large");
window.onscroll = function () {
  window.pageYOffset > 0
    ? largeScreen.classList.add("scroll-header")
    : largeScreen.classList.remove("scroll-header");
};
///slick carousel
$(document).ready(function () {
  $(".slick__slider").slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    Infinity: false,
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

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#backtotop").fadeIn();
    } else {
      $("#backtotop").fadeOut();
    }
  });
  $("#backtotop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });
});

$(".counter").countUp();
