const STEP_BACKWARD_BTN = document.querySelector('.step-backward-btn');
STEP_BACKWARD_BTN.addEventListener('click', makeBackwardStepProgress);

function makeBackwardStepProgress() {
    const START_STEP_STATUS_CIRCLE = document.querySelector('.step-start');

    const COMPLETED_STEP_STATUS_CIRCLES = document.querySelectorAll('.step-status-circle.completed');
    const COMPLETED_STEP_STATUS_CIRCLES_ARRAY = Array.from(COMPLETED_STEP_STATUS_CIRCLES);
    const LAST_COMPLETED_STEP_STATUS_CIRCLE = COMPLETED_STEP_STATUS_CIRCLES_ARRAY[COMPLETED_STEP_STATUS_CIRCLES_ARRAY.length-1];

    const COMPLETED_PROGRESS_BAR_ITEMS = document.querySelectorAll('.progress-bar.completed')
    const COMPLETED_PROGRESS_BAR_ITEMS_ARRAY = Array.from(COMPLETED_PROGRESS_BAR_ITEMS);
    const LAST_COMPLETED_PROGRESS_BAR_ITEM = COMPLETED_PROGRESS_BAR_ITEMS_ARRAY[COMPLETED_PROGRESS_BAR_ITEMS_ARRAY.length-1];

    if (LAST_COMPLETED_PROGRESS_BAR_ITEM.parentElement.previousElementSibling === START_STEP_STATUS_CIRCLE) {
        STEP_BACKWARD_BTN.disabled = true;
    }

    LAST_COMPLETED_STEP_STATUS_CIRCLE.classList.remove('completed');
    LAST_COMPLETED_STEP_STATUS_CIRCLE.innerHTML = '&#x2715;';

    setTimeout( () => {
        LAST_COMPLETED_PROGRESS_BAR_ITEM.classList.remove('completed');
        STEP_FORWARD_BTN.disabled = false;
    }, 300);
}

const STEP_FORWARD_BTN = document.querySelector('.step-forward-btn');
STEP_FORWARD_BTN.addEventListener('click', makeForwardStepProgress);

function makeForwardStepProgress() {
    const COMPLETED_STEP_STATUS_CIRCLES = document.querySelectorAll('.step-status-circle.completed');
    const COMPLETED_STEP_STATUS_CIRCLES_ARRAY = Array.from(COMPLETED_STEP_STATUS_CIRCLES);
    const LAST_COMPLETED_STEP_STATUS_CIRCLE = COMPLETED_STEP_STATUS_CIRCLES_ARRAY[COMPLETED_STEP_STATUS_CIRCLES_ARRAY.length-1];

    LAST_COMPLETED_STEP_STATUS_CIRCLE.nextElementSibling.firstElementChild.classList.add('completed');

    const FIRST_PROGRESS_BAR_ITEM = document.querySelector('.progress-bar');
    
    const COMPLETED_PROGRESS_BAR_ITEMS = document.querySelectorAll('.progress-bar.completed')
    const COMPLETED_PROGRESS_BAR_ITEMS_ARRAY = Array.from(COMPLETED_PROGRESS_BAR_ITEMS);
    const LAST_COMPLETED_PROGRESS_BAR_ITEM = COMPLETED_PROGRESS_BAR_ITEMS_ARRAY[COMPLETED_PROGRESS_BAR_ITEMS_ARRAY.length-1];

    setTimeout( () => {
        LAST_COMPLETED_PROGRESS_BAR_ITEM.parentElement.nextElementSibling.classList.add('completed');
        LAST_COMPLETED_PROGRESS_BAR_ITEM.parentElement.nextElementSibling.innerHTML = '&check;';

        if ( FIRST_PROGRESS_BAR_ITEM.classList.contains('completed') ) {
            STEP_BACKWARD_BTN.disabled = false;
        }

        if (LAST_COMPLETED_PROGRESS_BAR_ITEM.parentElement.nextElementSibling.nextElementSibling === null) {
            STEP_FORWARD_BTN.disabled = true;
        } 
    }, 300);
}