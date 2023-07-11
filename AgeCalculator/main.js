const dateInput = document.getElementById('date-input');
const submitButton = document.getElementById('submit-button');
const messageOutput = document.getElementById('message-output');

const date = new Date()
const currentYear = date.getFullYear(),
    currentMonth = date.getMonth() +1,
    currentDay = date.getDate();

// Function

    function calculateAge(birthDate) {

        const birthDateParts = birthDate.split('-');
        const birthDay = birthDateParts[2];
        const birthMonth = birthDateParts[1];
        const birthYear = birthDateParts[0];
        const yearDifference = currentYear - birthYear;

        let currentAge = yearDifference;

        if (birthMonth > currentMonth || birthMonth == currentMonth && birthDay < currentDay) {
            return currentAge -1;
        } else {
            return currentAge;
        }
    }

submitButton.addEventListener('click', (event) => {
    if (dateInput.value.length === 0) {
        messageOutput.textContent = 'Please enter your birthday.';
    } else {
        messageOutput.textContent = `Your age is ${calculateAge(dateInput.value)} years old.`;
    }
})
