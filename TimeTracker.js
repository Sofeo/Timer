// The buttons
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let timehold = document.getElementById('time');
let laphold = document.getElementById('lapHold');


let time = 0;
let intrval;

document.getElementById('lap').addEventListener("click", goLap);
start.addEventListener("click", startTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
    //console.log(start.innerHTML);
    if (start.innerHTML === 'Start') {
        interval = setInterval(function(){
        time++;
        timehold.innerHTML = time / 100;
        }, 10);
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
    laphold.innerHTML = "";
}

let lastLap = 0;
function goLap() {
    let p = document.createElement("p");
    let text;

    text = document.createTextNode((time / 100) - lastLap);
    lastLap = time / 100;
  
    p.appendChild(text);
    laphold.prepend(p);
}
