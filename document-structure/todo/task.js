const input = document.getElementById("task__input");
const list = document.getElementById("tasks__list");
let forClear = document.getElementsByClassName("task__remove");
const addBtn = document.getElementById("tasks__add");

function addTasks() {
  list.innerHTML += `<div class="task">
  <div class="task__title">
    ${input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`;
  }

addBtn.addEventListener("click", event => {
   event.preventDefault() 
   if(input.value.trim() !== "") { 
   addTasks();
   }
})

document.addEventListener("keypress", event => {
   if(event.key === "Enter" && input.value.trim() !== "") {
    event.preventDefault()
    addTasks()
  }
 
})


list.addEventListener("click", (event) => {
  let target = event.target;
  if (target.classList.contains('task__remove')) {
      target.parentElement.remove();
  } 
 }); 



/*
document.addEventListener("keypress", (event) => {
  if(event.key === "Enter" && input.value.trim() !== "")  {
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
 });   */





