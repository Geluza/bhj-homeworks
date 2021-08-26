const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalClose = document.getElementsByClassName("modal__close");
const showSuccess = document.getElementsByClassName("show-success");



modalMain.classList.add("modal_active");


modalClose[0].onclick = function() {
    modalMain.classList.remove("modal_active");
}


showSuccess[0].onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}

modalClose[2].onclick = function() {
    modalSuccess.classList.remove("modal_active");
}