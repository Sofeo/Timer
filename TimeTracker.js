// The buttons
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let timehold = document.getElementById('time');

let time = 0;
let intrval;

start.addEventListener("click", startTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
    //console.log(start.innerHTML);
    if (start.innerHTML === 'Start') {
        interval = setInterval(function(){
        time++;
        timehold.innerHTML = time;
        }, 1000);
        start.innerHTML = 'Stop';
    } else {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(interval)
    start.innerHTML = 'Start'
}

function resetTimer() {
    stopTimer();
    time = 0;
    timehold.innerHTML = time;
}