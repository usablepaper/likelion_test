let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hrs = document.querySelector(".hrs");
let startButton = document.querySelector(".button-start");
let resetButton = document.querySelector(".button-reset");

let secCount = 0;

sec.addEventListener("click", () => {
    startButton.classList.remove("pause");
    secCount += 10;
    sec.textContent = secCount;
    startButton.style.cursor = "pointer";
    resetButton.style.cursor = "pointer";
    startButton.classList.add("clicked");
    resetButton.classList.add("clicked");
});

function timerStart() {
    secCount--;
    if (secCount >= 0) {
        if (secCount < 10) {
            sec.textContent = `0${secCount}`;
        } else {
            sec.textContent = secCount;
        }
    }
    if (secCount === 0) {
        sec.textContent = "00";
        alert("Finish!");
    }
}

function timerReset() {
    secCount = 0;
    sec.textContent = "00";
    startButton.classList.remove("clicked");
    startButton.classList.remove("pause");
    resetButton.classList.remove("clicked");
    clearInterval(timerStart);
}

startButton.addEventListener("click", () => {
    startButton.textContent = "PAUSE";
    startButton.classList.add("pause");
    setInterval(timerStart, 1000);
});

resetButton.addEventListener("click", () => {
    timerReset();
});
