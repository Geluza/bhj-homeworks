const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modal = document.getElementsByClassName("modal");
const modalClose = document.getElementsByClassName("modal__close_times");
const showSuccess = document.getElementsByClassName("show-success");



modalMain.classList.add("modal_active");

showSuccess[0].onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}


for(let i = 0; i < modalClose.length; i++) {
modalClose[i].onclick = function() {
    modal[i].classList.remove("modal_active");
}
}

