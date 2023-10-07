const TEXT_AREA = document.getElementById('character-counter-textarea');

const TOTAL_CHARS_COUNT_DOM = document.querySelector('.total-characters-count');
const REMAINING_CHARS_COUNT_DOM = document.querySelector('.remaining-characters-count');

TEXT_AREA.addEventListener('input', (e) => {
    TOTAL_CHARS_COUNT_DOM.textContent = Number(e.target.value.length);
    
    REMAINING_CHARS_COUNT_DOM.textContent = 50 -  Number(e.target.value.length);
});