let clicker = document.getElementById("cookie");
let score = document.getElementById("clicker__counter");
let countClicker = 0;

clicker.onclick = function() {
  countClicker += 1;
  score.textContent = countClicker;
  if(score.textContent % 2 === 0) {
    clicker.width = 250;
  } else if(score.textContent % 2 !== 0) {
    clicker.width = 200;
  }
};

