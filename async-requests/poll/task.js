const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
    const poll = JSON.parse(xhr.responseText).data;
    pollTitle.textContent = poll.title;
    for(answer of poll.answers) {
       const answerBtn = document.createElement("button");
       answerBtn.classList.add("poll__answer");
       answerBtn.textContent = `${answer}`;
       answerBtn.onclick = function() {
          alert("Спасибо, ваш голос засчитан")
       }
    pollAnswers.appendChild(answerBtn);
    }
    }
}