const tooltipClick = Array.from(document.getElementsByClassName("has-tooltip"));

tooltipClick.forEach(element => element.addEventListener("click", clickForTooltip));

function clickForTooltip(event) {
    event.preventDefault();

    const tooltip = document.querySelector(".tooltip");

    if (tooltip) {
         if (tooltip === event.target.nextElementSibling) {
            tooltip.remove();
            return;
        } else {
            tooltip.remove();
        }
    }


    const coords = this.getBoundingClientRect();
    const left = coords.left;
    const top = coords.bottom;
    this.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top}px">${event.target.title}</div>`);
}









/*
for(let i = 0; i < tooltipLength; i++) {
   tooltipClick[i].onclick = function() {
   tooltipClick[i].innerHTML += `<div class="tooltip tooltip_active" style="left: 0; top: 0">
   ${tooltipClick[i].title} </div>`;
   let tooltip = document.querySelector(".tooltip");
   if(tooltip.textContent === tooltipClick[i].title && tooltip.classList.contains("tooltip_active")){
      tooltip.classList.remove("tooltip_active");
   }
   else if(tooltip.textContent === tooltipClick[i].title && !tooltip.classList.contains("tooltip_active")) {
      tooltip.classList.add("tooltip_active");
   } 
   return false;
   }
} */




























