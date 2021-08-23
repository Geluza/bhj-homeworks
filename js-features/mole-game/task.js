const killedMole = document.getElementById("dead");
const blunders = document.getElementById("lost");
let point = 0;
let losing = 0;

for(let i = 1; i < 10; i++) {
  const hole = document.getElementById(`hole${i}`);
  hole.onclick = function() {
    if(hole.className.includes("hole_has-mole")) {
     point += 1;
     killedMole.textContent = point;
     check();
  }
  else {
    losing += 1;
    blunders.textContent = losing;
    check();
  }
}
}

function check() {
  if(Number(killedMole.textContent) === 10) {
    alert("Победа!");
    reset();
  } else if(Number(blunders.textContent) === 5) {
    alert("Вы проиграли");
    reset();
  }
  }

  function reset() {
    const resetDead = 0;
    const resetLost = 0;
    killedMole.textContent = resetDead;
    blunders.textContent = resetLost;
    location.reload();
  }