let timer = 60; // For using in "runTimer()" function, which decreases the timer every second till its 0.
let score = 0; // For using in "increaseScore()" function, which increases the score when called.
let hitRandom; // For using in "getNewHit()" function and globally also.

function correctClick() {  
    document.querySelector("#panelBottom").addEventListener("click",function (details) {
    let currentClick = (Number(details.target.textContent))
    if (currentClick==hitRandom) {
        increaseScore()
        getNewHit()
        makeBubble()
    }
})
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreCard").textContent = score;
  }

function getNewHit() {
  hitRandom = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hitRandom;
}

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 102; i++) {
    // Math.floor removes decimal values and converts to integers. Example: "Math.floor(5.76868)" will return "5".
    // Math.random gives out random values ranging between 0 and 1. Example: "let x = Math.random" will return value like "0.7349124" or "0.2737492"
    random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }

  document.querySelector("#panelBottom").innerHTML = clutter;
}

function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(timerInt); // This will clear the setInterval so that it doesnt consume memory after the timer hits 0.
      document.querySelector("#panelBottom").innerHTML = `<h1>Game Over</h1>`
    }
  }, 1000);
}

document.getElementById("startGameButton").addEventListener("click",function(){
    correctClick()
    runTimer();
    makeBubble();
    getNewHit();
})
