const mobileMenu = document.querySelector(".mobilemenu");
const navlink = document.querySelector(".navmobile");
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  navlink.classList.toggle("open");
});
