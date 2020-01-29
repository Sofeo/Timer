// The buttons and holders
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let timehold = document.getElementById('time');
let laphold = document.getElementById('lapHold');

let timeSek = 0;
let timeMin = 0;
let intrval;

start.addEventListener("click", startTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
    //console.log(start.innerHTML);
    if (start.innerHTML === 'Start') {
        interval = setInterval(function(){
            // 100 is 1 second
            // Sek goes to min
            if (timeSek > 6000) {
                timeSek = 0;
                timeMin++;
            }

            timehold.innerHTML = zeroCheck(timeMin) + ':' + zeroCheck(timeSek / 100);

            timeSek++;
        }, 10);
        start.innerHTML = 'Stop';
        reset.innerHTML = 'Lap';
    } else {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(interval)
    start.innerHTML = 'Start'
    reset.innerHTML = 'Reset'
}

function resetTimer() {
    console.log(reset.innerHTML)
    if (reset.innerHTML === 'Reset') {
        stopTimer();
        timeSek = 0;
        timeMin = 0;
        timehold.innerHTML = '00:00.00';
        laphold.innerHTML = "";
        lapCount = 1;
        lastLapSek = 0;
        lastLapMin = 0;
    } else {
        goLap();
    }
    
}

let lapCount = 1;
let lastLapSek = 0;
let lastLapMin = 0;
function goLap() {
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let div = document.createElement("div");
    
    let textLap = document.createTextNode(zeroCheck(Number((timeMin - lastLapMin).toFixed(2))) + ':' + zeroCheck(Number((timeSek / 100) - lastLapSek).toFixed(2)));;
    let textTime = document.createTextNode(zeroCheck(timeMin) + ':' + zeroCheck(timeSek / 100));
    let textCount = document.createTextNode('Lap ' + lapCount);
    
    lastLapSek = timeSek / 100;
    lastLapMin = timeMin;
    
    p.appendChild(textLap);
    p2.appendChild(textTime);
    p3.appendChild(textCount);
    div.appendChild(p3);
    div.appendChild(p);
    div.appendChild(p2);
    laphold.prepend(div);

    lapCount++;
}

// Checks if it needs a zero infront of the number
function zeroCheck(value) {
    return value < 10 ? ('0' + value) : value;
}