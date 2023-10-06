const TEXT_AREA = document.getElementById('character-counter-textarea');

const TOTAL_CHARS_COUNT_DOM = document.querySelector('.total-characters-count');
const REMAINING_CHARS_COUNT_DOM = document.querySelector('.remaining-characters-count');

let totalCharsCountNum = Number(TOTAL_CHARS_COUNT_DOM.textContent);
let remainingCharsCountNum = Number(REMAINING_CHARS_COUNT_DOM.textContent);

TEXT_AREA.addEventListener('input', (e) => {
    totalCharsCountNum += Number(e.target.value.length);
    TOTAL_CHARS_COUNT_DOM.textContent = totalCharsCountNum;
    
    remainingCharsCountNum -= Number(e.target.value.length);
    REMAINING_CHARS_COUNT_DOM.textContent = remainingCharsCountNum;
});