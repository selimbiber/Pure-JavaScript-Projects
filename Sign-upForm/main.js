const SIGN_UP_FORM = document.getElementById('sign-up-form');

/* INPUTS */
const FIRST_NAME = document.getElementById('first-name')
const LAST_NAME = document.getElementById('last-name')
const EMAIL = document.getElementById('e-mail')
const PASSWORD = document.getElementById('password')

/* WARNINGS */
const FIRST_NAME_WM = document.getElementById('first-name_warning-message')
const LAST_NAME_WM = document.getElementById('last-name_warning-message')
const EMAIL_WM = document.getElementById('e-mail_warning-message')
const PASSWORD_WM = document.getElementById('password_warning-message')

/* VALIDATION */
SIGN_UP_FORM.addEventListener('submit', (f) => {
  f.preventDefault();

  showWarningMessage('first-name', FIRST_NAME.value.length);
  showWarningMessage('last-name', LAST_NAME.value.length);
  showWarningMessage('e-mail', EMAIL.value.length);
  showWarningMessage('password', PASSWORD.value.length);
});

/* FUNCTIONS */
function showWarningMessage (input, length) {
  if (input === 'first-name' && length == 0) {
      FIRST_NAME.placeholder = '';
      FIRST_NAME.className = 'invalid-input';
      FIRST_NAME_WM.style.display = 'block';
      FIRST_NAME_WM.textContent = 'First Name cannot be empty';
  } else if (input === 'first-name' && length > 0) {
      FIRST_NAME_WM.style.display = 'none';
      FIRST_NAME.removeAttribute('class');
  }
  if (input === 'last-name' && length == 0) {
      LAST_NAME.placeholder = '';
      LAST_NAME.className = 'invalid-input';
      LAST_NAME_WM.style.display = 'block';
      LAST_NAME_WM.textContent = 'Last Name cannot be empty';
  } else if (input === 'last-name' && length > 0) {
      LAST_NAME_WM.style.display = 'none';
      LAST_NAME.removeAttribute('class');
  }
  if ( isEmailValid(EMAIL.value) == false ) {
      EMAIL.placeholder = 'email@example/com';
      EMAIL.className = 'invalid-input';
      EMAIL.style.setProperty('--email-placeholder-color', '#e49090');
      EMAIL.style.setProperty('--email-placeholder-fontsize', '1.5rem');
      EMAIL_WM.style.display = 'block';
      EMAIL_WM.textContent = 'Looks like this is not an email';
  } else if ( isEmailValid(EMAIL.value) == true ) {
      EMAIL_WM.style.display = 'none';
      EMAIL.removeAttribute('class');
  }
  if (input === 'password' && length == 0) {
      PASSWORD.placeholder = '';
      PASSWORD.className = 'invalid-input';
      PASSWORD_WM.style.display = 'block';
      PASSWORD_WM.textContent = 'Password cannot be empty';
  } else if (input === 'password' && length > 0) {
      PASSWORD_WM.style.display = 'none';
      PASSWORD.removeAttribute('class');
  }
}

function isEmailValid(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /* Expected Email Value Structure = "name@host.tld" */
  return regex.test(email);
}