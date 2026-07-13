let score = 0;
let time = 30;
let timer;

document.getElementById("startBtn").onclick = function () {

    score = 0;
    time = 30;

    document.getElementById("score").innerText = score;
    document.getElementById("time").innerText = time;

    document.getElementById("coin").style.display = "block";

    clearInterval(timer);

    timer = setInterval(function () {

        time--;
        document.getElementById("time").innerText = time;

        if (time <= 0) {
            clearInterval(timer);
            document.getElementById("coin").style.display = "none";
            alert("Game Over! Score = " + score);
        }

    }, 1000);
};

document.getElementById("coin").onclick = function () {
    score++;
    document.getElementById("score").innerText = score;
};
