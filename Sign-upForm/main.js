/* INPUTS */
const FIRST_NAME = document.getElementById('first-name')
const LAST_NAME = document.getElementById('last-name')
const E_MAIL = document.getElementById('e-mail')
const PASSWORD = document.getElementById('password')

/* WARNINGS */
const FIRST_NAME_WM = document.getElementById('first-name_warning-message')
const LAST_NAME_WM = document.getElementById('last-name_warning-message')
const E_MAIL_WM = document.getElementById('e-mail_warning-message')
const PASSWORD_WM = document.getElementById('password_warning-message')

/* EVENTS */
FIRST_NAME.addEventListener('input', (e) => {
  showWarningMessage('first-name', e.target.value.length)
});
LAST_NAME.addEventListener('input', (e) => {
  showWarningMessage('last-name', e.target.value.length)
});
E_MAIL.addEventListener('input', (e) => {
  showWarningMessage('e-mail', e.target.value.length)
});
PASSWORD.addEventListener('input', (e) => {
  showWarningMessage('password', e.target.value.length)
});

/* FUNCTIONS */
function showWarningMessage (input, length) {
  if (input === 'first-name' && length == 0) {
      FIRST_NAME.placeholder = '';
      FIRST_NAME_WM.style.display = 'block';
      FIRST_NAME_WM.innerText = 'First Name cannot be empty';
  } else if (input === 'first-name' && length > 0) {
      FIRST_NAME_WM.style.display = 'none';
  }
  if (input === 'last-name' && length == 0) {
      LAST_NAME.placeholder = '';
      LAST_NAME_WM.style.display = 'block';
      LAST_NAME_WM.innerText = 'Last Name cannot be empty';
  } else if (input === 'last-name' && length > 0) {
      LAST_NAME_WM.style.display = 'none';
  }
  if ( isEmailValid(E_MAIL.value) == false ) {
      E_MAIL.placeholder = 'email@example/com'
      E_MAIL.style.setProperty('--email-placeholder-color', '#e49090');
      E_MAIL.style.setProperty('--email-placeholder-fontsize', '1.5rem');
      E_MAIL_WM.style.display = 'block';
      E_MAIL_WM.innerText = 'Looks like this is not an email';
  } else if ( isEmailValid(E_MAIL.value) == true ) {
      E_MAIL_WM.style.display = 'none';
  }
  if (input === 'password' && length == 0) {
      PASSWORD.placeholder = '';
      PASSWORD_WM.style.display = 'block';
      PASSWORD_WM.innerText = 'Password cannot be empty';
  } else if (input === 'password' && length > 0) {
      PASSWORD_WM.style.display = 'none';
  }
}

function isEmailValid(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /* Expected Email Value Structure = "name@host.tld" */
  return regex.test(email);
}