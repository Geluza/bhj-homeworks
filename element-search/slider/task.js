const prev = document.getElementsByClassName("slider__arrow_prev");
const next = document.getElementsByClassName("slider__arrow_next");
const sliders = document.getElementsByClassName("slider__item")
let currentSlide = 0;

next[0].onclick = function() {
       if(sliders[currentSlide].classList.contains("slider__item_active")) {
           sliders[currentSlide].classList.remove("slider__item_active");
           currentSlide = (currentSlide + 1) % sliders.length;
           sliders[currentSlide].classList.add("slider__item_active");
    }

}

prev[0].onclick = function() {
    if(sliders[0].classList.contains("slider__item_active")) {
        sliders[0].classList.remove("slider__item_active");
        currentSlide = sliders.length - 1;
        sliders[currentSlide].classList.add("slider__item_active")
    } else if(sliders[currentSlide].classList.contains("slider__item_active")) {
            sliders[currentSlide].classList.remove("slider__item_active");
            currentSlide = currentSlide - 1;
            sliders[currentSlide].classList.add("slider__item_active");
        }

     }
