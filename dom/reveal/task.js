const reveal = Array.from(document.getElementsByClassName("reveal"));


for (let i = 0; i < reveal.length; i++) {
window.addEventListener("scroll", () => {
   const viewportHeight = window.innerHeight;
   const revealTop = reveal[i].getBoundingClientRect().top;

   if (revealTop < viewportHeight) {
       reveal[i].classList.add("reveal_active");
   }
})


}