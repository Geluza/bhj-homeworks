const dropValue = document.querySelector(".dropdown__value");
const dropLink = document.getElementsByClassName("dropdown__link");
const dropList = document.querySelector(".dropdown__list");
let linkLength = dropLink.length;

dropValue.onclick = function() {
  dropList.classList.toggle("dropdown__list_active");
}


for (let i = 0; i < linkLength; i++) {
  dropLink[i].parentElement.onclick = function() {
    dropValue.textContent = dropLink[i].textContent;
    dropList.classList.remove("dropdown__list_active");
    return false;
  }

}