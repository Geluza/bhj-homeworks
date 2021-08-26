const menuLink = document.getElementsByClassName("menu__link");
const menuSub = document.getElementsByClassName("menu_sub")


for(let i = 0; i < menuLink.length; i++) {
const menuClicker = menuSub[i].parentElement;
menuClicker.onclick = function() {
  menuSub[i].classList.add("menu_active");
  return false;
}
}