const interest = document.getElementsByClassName("interest");
const interestCheck = document.getElementsByClassName("interest__check");
const interestsUl = document.querySelectorAll("interests__active");


  interestCheck[0].addEventListener("change", () => {
      interestCheck[1].checked = interestCheck[0].checked;
      interestCheck[2].checked = interestCheck[0].checked;
  });
  

  interestCheck[3].addEventListener("change", () => {
    interestCheck[4].checked = interestCheck[3].checked;
    interestCheck[5].checked = interestCheck[3].checked;
  });

