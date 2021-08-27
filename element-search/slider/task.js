const sliders = document.getElementsByClassName("slider__item");
const arrow = document.getElementsByClassName("slider__arrow");
const slidersArr = Array.from(sliders);




for(let i = 0; i < arrow.length; i++) {
arrow[i].onclick = function(){
  if(sliders[0].classList.contains("slider__item_active") && arrow[i].classList.contains("slider__arrow_prev")) {
    sliders[0].classList.remove("slider__item_active");
    sliders[sliders.length - 1].classList.add("slider__item_active");
  } else if (sliders[sliders.length- 1].classList.contains("slider__item_active") && arrow[i].classList.contains("slider__arrow_next")) {
    sliders[sliders.length - 1].classList.remove("slider__item_active");
    sliders[0].classList.add("slider__item_active");
  }

let numberSlide = slidersArr.findIndex((item) => item.classList.contains("slider__item_active"));
sliders[numberSlide].classList.remove("slider__item_active");
arrow[i].classList.contains("slider__arrow_prev") ? sliders[numberSlide - 1].classList.add("slider__item_active") : sliders[numberSlide + 1].classList.add("slider__item_active") 
}
}



