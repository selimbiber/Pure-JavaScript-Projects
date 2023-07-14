const TIMER_CLOCK = document.getElementById('timer')
    const START_TIMER = document.getElementById('start-btn')
    const STOP_TIMER = document.getElementById('stop-btn')
    const RESET_TIMER = document.getElementById('reset-btn')

// let completedPomodoroCount = 1;
let onePomodoro = 25;
let minutes = onePomodoro -1;
let seconds = 60;

let pomodoroTimer;

START_TIMER.addEventListener('click', () => {
    pomodoroTimer = setInterval(remaningTime, 1000);
    START_TIMER.disabled = true;
});

STOP_TIMER.addEventListener('click', () => {
    START_TIMER.disabled = false;
    clearInterval(pomodoroTimer)
});

RESET_TIMER.addEventListener('click', () => {
    START_TIMER.disabled = false;
    TIMER_CLOCK.style.color = 'black'
    onePomodoro = onePomodoro;
    minutes = onePomodoro -1;
    seconds = 59;
    TIMER_CLOCK.textContent = `${minutes}:${seconds}`
})

function remaningTime () {
    seconds = seconds - 1;
    if (seconds < 0) {
        minutes = minutes - 1;
        seconds = 59;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    TIMER_CLOCK.textContent = `${minutes}:${seconds}`
    if (minutes < 10) {
        TIMER_CLOCK.textContent = `0${minutes}:${seconds}`
    }
    if (minutes === 0 && minutes + seconds < 1) {
        clearInterval(pomodoroTimer)
        TIMER_CLOCK.textContent = `You have completed the pomodoro!`
        TIMER_CLOCK.style.color = 'blue'
    }
}