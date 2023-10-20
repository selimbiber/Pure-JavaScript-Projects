let currentProgressStatusValue = 0;

function updateCurrentProgressStatusValue() {
    document.querySelector('.loading-progress-info').textContent = `${currentProgressStatusValue}%`;
    document.querySelector('.loading-bar-front').style.width = `${currentProgressStatusValue}%`;
    currentProgressStatusValue++;
    if (currentProgressStatusValue <= 100) {
        setTimeout(updateCurrentProgressStatusValue, 50)
    }
}

updateCurrentProgressStatusValue();