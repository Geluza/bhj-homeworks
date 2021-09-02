const tab = Array.from(document.getElementsByClassName("tab"));
const tabContent = document.getElementsByClassName("tab__content");
let tabLength = tab.length;


for(let i = 0; i < tabLength; i++) {
 tab[i].onclick = function() {
     let findTab = tab.findIndex((item) => item.classList.contains("tab_active"));
     tab[findTab].classList.remove("tab_active");
     tabContent[findTab].classList.remove("tab__content_active");
     tab[i].classList.add("tab_active");
     tabContent[i].classList.add("tab__content_active");
 }
}