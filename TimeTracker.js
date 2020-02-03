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
        // adds padding on the sides 
        reset.classList.add('lapPad');
    } else {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(interval)
    start.innerHTML = 'Start'
    reset.innerHTML = 'Reset'
    // removes the padding on the sides
    reset.classList.remove('lapPad');
}

function resetTimer() {
    if (timehold.innerHTML !== '00:00.00') {
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
}

let lapCount = 1;
let lastLapSek = 0;
let lastLapMin = 0;
function goLap() {
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    
    let textLap = document.createTextNode(zeroCheck(Number((timeMin - lastLapMin).toFixed(2))) + ':' + zeroCheck(Number((timeSek / 100) - lastLapSek).toFixed(2)));;
    let textTime = document.createTextNode(zeroCheck(timeMin) + ':' + zeroCheck(timeSek / 100));
    let textCount = document.createTextNode('Lap ' + lapCount);
    
    lastLapSek = timeSek / 100;
    lastLapMin = timeMin;
    
    p.appendChild(textLap);
    p2.appendChild(textTime);
    p3.appendChild(textCount);
    p.classList.add('lapTime');
    p2.classList.add('timeTrack');
    p3.classList.add('lapCount');
    div.appendChild(p3);
    div.appendChild(div2);
    div2.appendChild(p);
    div2.appendChild(p2);
    div.classList.add('lapBox');
    div2.classList.add('timeBox');
    laphold.prepend(div);
    
    lapCount++;
}

// Checks if it needs a zero infront of the number
function zeroCheck(value) {
    return value < 10 ? ('0' + value) : value;
}