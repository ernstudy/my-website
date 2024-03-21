const menu = document.getElementById("menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", function () {
  nav.classList.toggle("active");
});
