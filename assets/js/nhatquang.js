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
