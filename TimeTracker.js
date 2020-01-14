// The buttons
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let clear = document.getElementById('clear');
let timehold = document.getElementById('time');

let time = 0;
let intrval;

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);

function startTimer() {
    interval = setInterval(function(){
        time++;
        timehold.innerHTML = time;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval)
}