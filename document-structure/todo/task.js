const input = document.getElementById("task__input");
const list = document.getElementById("tasks__list");
let forClear = document.getElementsByClassName("task__remove");

document.addEventListener("keypress", (event) => {
  if(event.key === "Enter" && input.value !== "")  {
  list.innerHTML += `<div class="task">
  <div class="task__title">
    ${input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`;
 event.preventDefault();
  }
})

list.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList.contains('task__remove')) {
      target.parentElement.remove();
  }
  
 });    





/*
forClear.forEach(element => 
  element.onclick = function() {
    element.closest(".task").remove;
  }
  )

*/