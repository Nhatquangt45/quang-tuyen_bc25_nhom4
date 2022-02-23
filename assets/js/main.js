// Dark theme
document.querySelector("#toggle_theme").addEventListener("click", () => {
  document.body.classList.toggle("theme-dark");
});
// Back to top
document.querySelector("#back_to_top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
