const items = document.getElementById("items");
const loader = document.getElementById("loader");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.onreadystatechange = function() {
   if(xhr.readyState === 4) {
    loader.classList.remove('loader_active');
    const respText = JSON.parse(xhr.responseText).response.Valute;
    for (const currency in respText) {
    const newElem = document.createElement('div');
    newElem.classList.add("item");
    newElem.innerHTML = `<div class="item__code">
         ${respText[currency].CharCode}  
        </div>
        <div class="item__value">
            ${respText[currency].Value}
        </div>
        <div class="item__currency">
            руб.
        </div>`;
        items.appendChild(newElem);
   }}
}

