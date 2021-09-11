const chatWidget = document.querySelector(".chat-widget");
const chatMessages = document.getElementById("chat-widget__messages");
const widgetSide = document.querySelector(".chat-widget__side");
const chatInput = document.getElementById("chat-widget__input");
let robotAnswers = ["Что вы хотите? Мы не очень хотим с вами общаться", "Разбирайтесь с вашими вопросами сами", "Нам некогда, пожалуйста, не пишите больше", "Надеемся, вы больше нас не побеспокоите!"]
let timeNow = new Date();
let hours = timeNow.getHours();
let minutes = timeNow.getMinutes();


widgetSide.onclick = function() {
    chatWidget.classList.add("chat-widget_active");
}



document.addEventListener("keypress", (event) => {
    if(event.key === "Enter" && chatInput.value !== "") {
        let randomAnswer = Math.floor(Math.random() * robotAnswers.length);
       chatMessages.innerHTML += `
       <div class="message message_client">
         <div class="message__time"> ${hours}:${minutes} </div>
         <div class="message__text"> ${chatInput.value} </div>
          </div> 
       <div class="message">
            <div class="message__time"> ${hours}:${minutes}</div>
            <div class="message__text">${robotAnswers[randomAnswer]}
            </div>
            </div> `
          ;
          
    }
}
)