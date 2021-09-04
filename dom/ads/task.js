const rotator = Array.from(document.getElementsByClassName("rotator__case"));
const rotatorLength = rotator.length;

   setInterval(()=> {
      let findRotator = rotator.findIndex((item)=> item.classList.contains("rotator__case_active"));
      if(rotator[rotatorLength - 1].classList.contains("rotator__case_active")) {
        rotator[rotatorLength - 1].classList.remove("rotator__case_active");
        rotator[0].classList.add("rotator__case_active");
    }
      rotator[findRotator].classList.remove("rotator__case_active");
      rotator[findRotator + 1].classList.add("rotator__case_active");
   }, 1000);
