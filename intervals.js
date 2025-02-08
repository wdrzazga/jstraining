const rafBtn = document.getElementById('rafBtn');
const output = document.getElementById('output');
const output2 = document.getElementById('output2');
const setTimeoutBtn = document.getElementById('setTimeoutBtn');

let count = 0;
let count2 = 0;

function writeToOutput() {
    if (count < 30) {
        output.innerText += String(count) + '\n';
        requestAnimationFrame(writeToOutput);
        count++;
    }
    else if (count == 30){
        output.innerText += getTimestamp();
    }
}
setTimeoutBtn.onclick = () => {
    setTimeout(() => {
        alert('minely 3 sekundy');
    }, 3000)
}
rafBtn.addEventListener('click', () => {
    count = 0;
    output.innerText = getTimestamp();
    requestAnimationFrame(writeToOutput);
});

function getTimestamp(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let milliseconds = currentTime.getMilliseconds();

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds}`;
}

let intervalId = 0;

function start() {
    intervalId = setInterval(function() {
        count2++;
        output2.innerText += String(count2);

    }, 1000);
}
function stop() {
    clearInterval(intervalId);
}