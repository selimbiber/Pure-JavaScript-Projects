const SUBS_FORM = document.getElementById('subscribe-form')
const INPUT_AREA = document.getElementById('email-input-area')
const EMAIL_INPUT = document.getElementById('email-input')
const WARNING_MESSAGE = document.getElementById('warning-message')

SUBS_FORM.addEventListener('submit', (event) => {
    event.preventDefault()
    const EMAIL_INPUT_VALUE = document.getElementById('email-input').value
    if (window.innerWidth < 1440) {
        if (EMAIL_INPUT_VALUE == '') {
            WARNING_MESSAGE.textContent = 'Whoops! It looks like you forgot to add your email';
            WARNING_MESSAGE.style.display = 'block';
            WARNING_MESSAGE.style.left = '5rem';
            SUBS_FORM.style.marginBottom = '0';
            INPUT_AREA.style.gap = '5.9rem';
            EMAIL_INPUT.placeholder = 'example@email/com'
        } else if ( isEmailValid(EMAIL_INPUT_VALUE) ) {
            EMAIL_INPUT.classList.remove('invalid-email-input')
            INPUT_AREA.style.gap = '0rem';
            WARNING_MESSAGE.textContent = '';
            SUBS_FORM.style.marginBottom = '6rem';
        } else {
            WARNING_MESSAGE.textContent = 'Please provide a valid email address';
            WARNING_MESSAGE.style.display = 'block';
            WARNING_MESSAGE.style.left = '11rem';
            SUBS_FORM.style.marginBottom = '0';
            INPUT_AREA.style.gap = '5.9rem';
            EMAIL_INPUT.value = 'example@email/com';
            EMAIL_INPUT.classList.add('invalid-email-input')
        }
    } else {
        if (EMAIL_INPUT_VALUE == '') {
            WARNING_MESSAGE.textContent = 'Whoops! It looks like you forgot to add your email';
            WARNING_MESSAGE.style.display = 'block';
            WARNING_MESSAGE.style.left = '3rem'
            EMAIL_INPUT.placeholder = 'example@email/com'
        } else if ( isEmailValid(EMAIL_INPUT_VALUE) ) {
            EMAIL_INPUT.classList.remove('invalid-email-input')
            WARNING_MESSAGE.textContent = '';
        } else {
            WARNING_MESSAGE.textContent = 'Please provide a valid email address';
            WARNING_MESSAGE.style.display = 'block';
            WARNING_MESSAGE.style.left = '3rem'
            EMAIL_INPUT.value = 'example@email/com';
            EMAIL_INPUT.classList.add('invalid-email-input')
        }
    }
})

function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /* Expected Email Value Structure = "name@host.tld" */
    return regex.test(email);
}