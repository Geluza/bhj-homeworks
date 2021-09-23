const progress = document.getElementById("progress");
const send = document.getElementById("send");


send.addEventListener("click", (event)=> {  
const formSend = new FormData(document.getElementById("form"));
let xhr = new XMLHttpRequest();
xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

xhr.upload.onprogress = function(event) {
    progress.value = event.loaded / event.total
}
xhr.send(formSend);
event.preventDefault();
})



