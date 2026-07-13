let score = 0;
let time = 30;
let timer;

const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const coin = document.getElementById("coin");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startGame);

function startGame() {
    score = 0;
    time = 30;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;

    coin.style.display = "block";

    timer = setInterval(() => {
        time--;
        timeDisplay.textContent = time;

        if (time === 0) {
            clearInterval(timer);
            coin.style.display = "none";
            alert("Game Over! Your Score: " + score);
        }
    }, 1000);
}

coin.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
});
