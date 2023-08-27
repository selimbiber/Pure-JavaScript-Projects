/* CARD DETAILS - FRONT */
const CARD_NUMBER_OUTPUT = document.getElementById('card-number-output')
const CARDHOLDER_NAME_OUTPUT = document.getElementById('cardholder-name-output')
const CARD_MONTH_OUTPUT = document.getElementById('card-month-output')
const CARD_YEAR_OUTPUT = document.getElementById('card-year-output')

/* CARD CVC - BACK */
const CVC_NUMBER_OUTPUT = document.getElementById('cvc-number-output')

/* CARD DETAILS - FORM */
const CARD_DETAILS_FORM = document.getElementById('card-details-form')

/* FORM INPUTS & WARNINGS */
const CARDHOLDER_NAME_INPUT = document.getElementById('cardholder-name-input')
const CARDHOLDER_NAME_WM = document.getElementById('cardholder-name_warning-message')
const CARD_NUMBER_INPUT = document.getElementById('card-number-input')
const CARD_NUMBER_WM = document.getElementById('card-number_warning-message')
const CARD_MONTH_INPUT = document.getElementById('card-month-input')
const CARD_YEAR_INPUT = document.getElementById('card-year-input')
const MONTH_YEAR_WM = document.getElementById('month-year_warning-message')
const CVC_NUMBER_INPUT = document.getElementById('cvc-number-input')
const CVC_NUMBER_WM = document.getElementById('cvc-number_warning-message')
const CARD_CONFIRM_INPUT = document.getElementById('card-confirm-input')

/* COMPLETED STATE */
const COMPLETED_STATE = document.getElementById('completed-state')
const CONTINUE_BTN = document.getElementById('continue-btn')

/* Submit Event */
CARD_CONFIRM_INPUT.addEventListener('click', (submit) => {
    submit.preventDefault();
    let validInputsCount = 0;

    if ( !VALIDETE_FORM_INPUTS.nameInput(CARDHOLDER_NAME_INPUT.value) ) {
        CARDHOLDER_NAME_WM.style.display = 'block';
        CARDHOLDER_NAME_INPUT.classList.add('invalid-input');
    } else {
        CARDHOLDER_NAME_WM.style.display = 'none';
        CARDHOLDER_NAME_INPUT.classList.remove('invalid-input');
        validInputsCount+=1;
    }

    if ( !VALIDETE_FORM_INPUTS.numberInput(CARD_NUMBER_INPUT.value) ) {
        CARD_NUMBER_WM.style.display = 'block';
        CARD_NUMBER_INPUT.classList.add('invalid-input');
    } else {
        CARD_NUMBER_WM.style.display = 'none';
        CARD_NUMBER_INPUT.classList.remove('invalid-input');
        validInputsCount+=1;
    }

    if ( CARD_MONTH_INPUT.value.length !== 2 || CARD_YEAR_INPUT.value.length !== 2 ) {
        MONTH_YEAR_WM.style.display = 'block';
    } else {
        MONTH_YEAR_WM.style.display = 'none';
    }

    if ( VALIDETE_FORM_INPUTS.dateCvcInput(CARD_MONTH_INPUT.value) || CARD_MONTH_INPUT.value.length !== 2 ) {
        MONTH_YEAR_WM.style.display = 'block';
        CARD_MONTH_INPUT.classList.add('invalid-input');
    } else {
        MONTH_YEAR_WM.style.display = 'none';
        CARD_MONTH_INPUT.classList.remove('invalid-input');
        validInputsCount+=1;
    }

    if ( VALIDETE_FORM_INPUTS.dateCvcInput(CARD_YEAR_INPUT.value) || CARD_YEAR_INPUT.value.length !== 2 ) {
        MONTH_YEAR_WM.style.display = 'block';
        CARD_YEAR_INPUT.classList.add('invalid-input');
    } else {
        MONTH_YEAR_WM.style.display = 'none';
        CARD_YEAR_INPUT.classList.remove('invalid-input');
        validInputsCount+=1;
    }

    if ( VALIDETE_FORM_INPUTS.dateCvcInput(CVC_NUMBER_INPUT.value) || CVC_NUMBER_INPUT.value.length !== 3 ) {
        CVC_NUMBER_WM.style.display = 'block';
        CVC_NUMBER_INPUT.classList.add('invalid-input');
    } else {
        CVC_NUMBER_WM.style.display = 'none';
        CVC_NUMBER_INPUT.classList.remove('invalid-input');
        validInputsCount+=1;
    }

    if ( validInputsCount === 5 ) {
        CARD_DETAILS_FORM.style.display = 'none';
        COMPLETED_STATE.style.display = 'flex';

        CONTINUE_BTN.addEventListener('click', () => {
            CARD_DETAILS_FORM.style.display = 'flex';
            COMPLETED_STATE.style.display = 'none';
        });
    }
});

/* Input Events */

CARDHOLDER_NAME_INPUT.addEventListener('input', () => {
    CARDHOLDER_NAME_OUTPUT.value = CARDHOLDER_NAME_INPUT.value.toUpperCase();
});

CARD_NUMBER_INPUT.addEventListener('input', () => {
    CARD_NUMBER_OUTPUT.value = CARD_NUMBER_INPUT.value;
});

CARD_MONTH_INPUT.addEventListener('input', () => {
    CARD_MONTH_OUTPUT.value = CARD_MONTH_INPUT.value;
});

CARD_YEAR_INPUT.addEventListener('input', () => {
    CARD_YEAR_OUTPUT.value = CARD_YEAR_INPUT.value;
});

CVC_NUMBER_INPUT.addEventListener('input', () => {
    CVC_NUMBER_OUTPUT.value = CVC_NUMBER_INPUT.value;
});

/* Regex Functions */
const VALIDETE_FORM_INPUTS = {
    nameInput: (input) => {
        const regexForCardNameInput = /^[^ ]+ [^ ]+$/;
        return regexForCardNameInput.test(input);
    },
    numberInput: (input) => {
        const regexForCardNumberInput = /^(\d{4}\s{1}){3}\d{4}$/;
        return regexForCardNumberInput.test(input);
    },
    dateCvcInput: (input) => {
        const regexForDateCvcInput = /[^0-9]/gi;
        return regexForDateCvcInput.test(input);
    }
}

/* Helper Function */
function removeSpaces(event) {
    const input = event.target;
    if (input.value.trim() === "" && event.keyCode === 32) {
      event.preventDefault();
      input.value = "";
    }
}