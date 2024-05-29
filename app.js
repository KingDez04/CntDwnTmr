let timer;
let isRunning = false;
let currentTime = 0;

let starter = document.getElementById('start');
let display = document.getElementById('timer');
let stoper = document.getElementById('stop');
let reseter = document.getElementById('reset');
let restarter = document.getElementById('restart');

let formatTime = time => time < 10 ? "0" + time : time;

let updateDisplay = time => {
    const hrs = Math.floor(time/3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    display.innerText = `${formatTime(hrs)} : ${formatTime(mins)} : ${formatTime(secs)}`;
}

let updateTimer = () => {
    if (currentTime > 0) {
        currentTime--;
        updateDisplay(currentTime);
    } else {
        clearInterval(timer);
        isRunning = false;
        alert("Time's up!");
    }
}

starter.addEventListener("click", () => {
    const hrs = parseInt(document.getElementById('hrs').value) || 0;
    const mins = parseInt(document.getElementById('mins').value) || 0;
    const secs = parseInt(document.getElementById('secs').value) || 0;
    currentTime = hrs * 3600 + mins * 60 + secs;
    updateDisplay(currentTime);
    if (!isRunning && currentTime > 0) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
});

stoper.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});

reseter.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    currentTime = 0;
    updateDisplay(currentTime);
});

restarter.addEventListener("click", () => {
    const hrs = parseInt(document.getElementById('hrs').value) || 0;
    const mins = parseInt(document.getElementById('mins').value) || 0;
    const secs = parseInt(document.getElementById('secs').value) || 0;
    currentTime = hrs * 3600 + mins * 60 + secs;
    updateDisplay(currentTime);
});

updateDisplay(currentTime);