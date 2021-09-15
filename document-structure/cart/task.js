const countMore = Array.from(document.getElementsByClassName("product__quantity-control_inc"));
const countLess =  Array.from(document.getElementsByClassName("product__quantity-control_dec"));
let moreLength = countMore.length;
let lessLength = countLess.length;
const countValue = document.getElementsByClassName("product__quantity-value");



for (let i = 0; i < moreLength; i++) {
    countMore[i].onclick = function() {
     countValue[i].textContent++;
 }
}

for (let i = 0; i < lessLength; i++) {
    countLess[i].onclick = function() {
     if (countValue[i].textContent === 1) {
        countValue[i].textContent = 1;
     } else if(countValue[i].textContent > 1) {
        countValue[i].textContent --;
     }
    }
}

//добавляем в корзину
const addBasket = Array.from(document.getElementsByClassName("product__add"));
const products = document.getElementsByClassName("product");
const basket = document.querySelector(".cart__products");
const image = document.getElementsByClassName("product__image");


for(let btn of addBasket) {
   btn.onclick = function() {
       let btnIndex = addBasket.indexOf(btn);
       let count = countValue[btnIndex].textContent;
       const dataId = products[btnIndex].dataset.id;
       const imageProd = image[btnIndex].src;
       const carts = Array.from(basket.children);
       
       let findItem = carts.findIndex(item => item.dataset.id === dataId);
       if(findItem === -1) {
         basket.insertAdjacentHTML("afterBegin", `<div class="cart__product" data-id="${dataId}">
         <img class="cart__product-image" src="${imageProd}">
         <div class="cart__product-count"> ${count}</div>
     </div>`)
       } else if(findItem > -1) {
        const prodBasket = carts.find((item) => item.dataset.id === dataId);
        let prodCount = prodBasket.querySelector(".cart__product-count");
        prodCount.textContent = Number(prodCount.textContent) + Number(count);
       }

    }

   }












/*
for(let i = 0; i < addBasket.length; i++) {
     addBasket[i].onclick = function() {
     let searchProd = cartProduct.findIndex((elem => elem.dataset.id === products[i].dataset.id));
     if(searchProd > 0 && cartProduct.length > 0) {
        countInBasket[searchProd].textContent += countValue[i].textContent;
    } else if (searchProd === -1) {
         basket.innerHTML += `<div class="cart__product" data-id="${products[i].dataset.id}">
         <img class="cart__product-image" src="${image[i].src}">
         <div class="cart__product-count"> ${countValue[i].textContent}</div>
     </div>`
     } 
    
}
} */

















