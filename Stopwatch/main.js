const STOPWATCH = document.getElementById('stopwatch')
    const START_BTN = document.getElementById('start-btn')
    const STOP_BTN = document.getElementById('stop-btn')
    const RESET_BTN = document.getElementById('reset-btn')

let stopwatch_hours = 0;
let stopwatch_minutes = 0;
let stopwatch_seconds = 0;
let stopwatch_milliseconds = 0;

let milliseconds;
let stopwatch;

function timer () {
    stopwatch_milliseconds++;
    if (stopwatch_milliseconds > 99) {
        stopwatch_seconds++;
        stopwatch_milliseconds = 0;
    }
    if (stopwatch_seconds > 59) {
        stopwatch_minutes++;
        stopwatch_seconds = 0;
    }
    if (stopwatch_minutes > 59) {
        stopwatch_minutes = 0;
        stopwatch_hours++;
    }
    let hoursText = stopwatch_hours < 10 ? `0${stopwatch_hours}` : stopwatch_hours;
    let minutesText = stopwatch_minutes < 10 ? `0${stopwatch_minutes}` : stopwatch_minutes;
    let secondsText = stopwatch_seconds < 10 ? `0${stopwatch_seconds}` : stopwatch_seconds;
    let millisecondsText = stopwatch_milliseconds < 10 ? `0${stopwatch_milliseconds}` : stopwatch_milliseconds;

    STOPWATCH.textContent = `${hoursText}:${minutesText}:${secondsText}:${millisecondsText}`;
};

START_BTN.addEventListener('click', () => {
    START_BTN.textContent = 'Start';
    START_BTN.disabled = true;
    START_BTN.setAttribute('class', 'activated-btn');
    milliseconds = setInterval(timer, 10);
    stopwatch = setInterval(timer, 1000);
    STOP_BTN.disabled = false;
    STOP_BTN.classList = '';
});

STOP_BTN.addEventListener('click', () => {
    START_BTN.textContent = 'Resume';
    START_BTN.disabled = false;
    START_BTN.classList = '';
    clearInterval(milliseconds);
    clearInterval(stopwatch);
    STOP_BTN.disabled = true;
    STOP_BTN.setAttribute('class', 'activated-btn')
});

RESET_BTN.addEventListener('click', () => {
    stopwatch_hours = 0;
    stopwatch_minutes = 0;
    stopwatch_seconds = 0;
    stopwatch_milliseconds = 0;
    STOPWATCH.textContent = '00:00:00';
});