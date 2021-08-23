let seconds = document.getElementById("timer");

const countdown = setInterval(() => {
  let score = 0;
  score += 1;
  seconds.textContent -= score;
  if (Number(seconds.textContent) < 10) {
   seconds.textContent = 0 + seconds.textContent;
  }
  if(Number(seconds.textContent) === 0) {
    clearInterval(countdown);
    alert("Вы победили в конкурсе!");
    location.assign("https://dshi43.krd.muzkult.ru/media/2021/04/23/1248021559/466a38870ceb78efa2c478203682406e.gif");
  }
}, 1000);



