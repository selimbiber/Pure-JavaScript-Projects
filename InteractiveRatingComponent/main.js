const FEEDBACK_SECTION = document.getElementById('feedback-section')
const THANKYOU_SECTION = document.getElementById('thankyou-section')
const RATING_BTN = document.getElementsByClassName('rating-btn')
const SUBMIT_BTN = document.getElementById('submit-btn')
const SELECTED_INFO = document.querySelector('.selected-info')

let selectedRatingValue = 0;

[...RATING_BTN].forEach( (ratingBtn) => {
    ratingBtn.addEventListener('click', () => {
        selectedRatingValue = ratingBtn.value;
    });
});

SUBMIT_BTN.addEventListener('click', () => {
    FEEDBACK_SECTION.style.display = 'none';
    THANKYOU_SECTION.style.display = 'flex';
    SELECTED_INFO.textContent = `You selected ${selectedRatingValue} out of 5`;
});