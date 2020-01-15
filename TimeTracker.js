// The buttons
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let timehold = document.getElementById('time');

let time = 0;
let intrval;

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(function(){
        time++;
        timehold.innerHTML = time;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval)
}

function resetTimer() {
    stopTimer();
    time = 0;
    timehold.innerHTML = time;
}