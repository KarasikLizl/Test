const page = document.querySelector(".page");
const menu = page.querySelector(".header__item_main");
const menuList = page.querySelector(".header__menu");

const maxWidth = 767;

window.onresize = function () {
  if (window.screen.width <= maxWidth) {
    menuList.classList.add("header__menu_hide");
    menu.classList.add("header__item_opened");
  } else {
    menuList.classList.remove("header__menu_hide");
    menu.classList.remove("header__item_opened");
  }
};

function showMenu(event) {
  menuList.classList.toggle("header__menu_hide");
  console.log(event.target);
}

menu.addEventListener("click", showMenu);
