const burgerBtn = document.querySelector(".menu__bars");
const body = document.querySelector("body");
burgerBtn.addEventListener("click", toggleBurger);

function toggleBurger() {
  body.classList.toggle("mobile-active");
}
