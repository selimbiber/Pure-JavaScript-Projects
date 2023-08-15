const FIGURE_SECTION = document.getElementById('card_figure-section')
const FORM_SECTION = document.getElementById('card_form-section')
const SUCCESS_SECTION = document.getElementById('card_success-section')
const EMAIL_INPUT = document.getElementById('email-input')
const SUBMIT_INPUT = document.getElementById('submit-input')
const WARNING_MESSAGE = document.getElementById('warning-message')
const ENTERED_EMAIL = document.getElementById('entered-email-value')
const DISMISS_BTN = document.getElementById('dismiss-btn')

let EMAIL_INPUT_VALUE;
let EMAIL_INPUT_LENGTH = 0;

EMAIL_INPUT.addEventListener('input', (e) => {
    EMAIL_INPUT_VALUE = e.target.value;
    EMAIL_INPUT_LENGTH = e.target.value.length;
});

SUBMIT_INPUT.addEventListener('click', (e) => {
    e.preventDefault();
    if (EMAIL_INPUT_LENGTH == 0) {
        EMAIL_INPUT.placeholder = 'ash#loremcompany.com';
        EMAIL_INPUT.setAttribute('class', 'invalid-email-input');
        WARNING_MESSAGE.textContent = 'The field is left empty';
    } else if (isEmailValid(EMAIL_INPUT.value) == false) {
        EMAIL_INPUT.placeholder = 'ash#loremcompany.com';
        EMAIL_INPUT.value = '';
        EMAIL_INPUT.setAttribute('class', 'invalid-email-input');
        WARNING_MESSAGE.textContent = 'Valid email required';
    } else {
        FIGURE_SECTION.style.display = 'none';
        FORM_SECTION.style.display = 'none';
        ENTERED_EMAIL.textContent = EMAIL_INPUT_VALUE;
        SUCCESS_SECTION.style.display = 'flex';
        EMAIL_INPUT.value = '';
        WARNING_MESSAGE.textContent = '';
        EMAIL_INPUT_LENGTH = 0;
        EMAIL_INPUT.classList.remove('invalid-email-input');
    }
});

DISMISS_BTN.addEventListener('click', () => {
    FIGURE_SECTION.style.display = 'block';
    FORM_SECTION.style.display = 'block';
    SUCCESS_SECTION.style.display = 'none';
});

function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /* Expected Email Value Structure = "ash@loremcompany.com" */
    return regex.test(email);
}