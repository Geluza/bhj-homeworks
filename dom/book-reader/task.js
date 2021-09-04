const fontSize = Array.from(document.getElementsByClassName("font-size"));
let fontLength = fontSize.length;
const bookText = document.getElementById("book");
const colorText = Array.from(document.querySelectorAll("div.book__control_color a"));
let colorLength = colorText.length;
const backColor = Array.from(document.querySelectorAll("div.book__control_background a"));
let backLength = backColor.length;


for(let i = 0; i < fontLength; i++) {
    fontSize[i].onclick = function() {
      let findActive = fontSize.findIndex((item) => item.classList.contains("font-size_active"));
      fontSize[findActive].classList.remove("font-size_active");
      fontSize[i].classList.add("font-size_active");
      if(fontSize[i].classList.contains("font-size_small")) {
          bookText.classList.remove("book_fs-big");
          bookText.classList.add("book_fs-small");
          return false;
      } else if(fontSize[i].classList.contains("font-size_big")) {
          bookText.classList.remove("book_fs-small");
          bookText.classList.add("book_fs-big");
          return false;
      }
    }
}

for (let i = 0; i < colorLength; i++) {
   colorText[i].onclick = function() {
    let findActiveColor = colorText.findIndex((item) => item.classList.contains("color_active"));
    colorText[findActiveColor].classList.remove("color_active");
    colorText[i].classList.add("color_active");
    if(colorText[i].classList.contains("text_color_black")) {
        bookText.classList.remove("book_color-gray", "book_color-whitesmoke");
        bookText.classList.add("book_color-black");
        return false;
    } else if(colorText[i].classList.contains("text_color_gray")) {
        bookText.classList.remove("book_color-black", "book_color-whitesmoke");
        bookText.classList.add("book_color-gray");
        return false;
    } else if(colorText[i].classList.contains("text_color_whitesmoke")) {
        bookText.classList.remove("book_color-gray", "book_color-black");
        bookText.classList.add("book_color-whitesmoke");
        return false;
    }
   }
}

for (let i = 0; i < backLength; i++) {
    backColor[i].onclick = function() {
     let findActiveBack = backColor.findIndex((item) => item.classList.contains("color_active"));
     backColor[findActiveBack].classList.remove("color_active");
     backColor[i].classList.add("color_active");
     if(backColor[i].classList.contains("bg_color_black")) {
         bookText.classList.remove("book_bg-white", "book_bg-gray")
         bookText.classList.add("book_bg-black");
         return false;
     } else if(backColor[i].classList.contains("bg_color_gray")) {
         bookText.classList.remove("book_bg-white", "book_bg-black")
         bookText.classList.add("book_bg-gray");
         return false;
     } else if(backColor[i].classList.contains("bg_color_white")) {
         bookText.classList.remove("book_bg-gray", "book_bg-black");
         bookText.classList.add("book_bg-white");
         return false;
     }
 
    }
 }