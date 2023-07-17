const CARD = document.getElementById('card')
    const NUMBER_INPUT = document.getElementById('number-input')
    const NUMBER_OUTPUT = document.getElementById('number-output')

    const WARNING_OUTPUT = document.createElement('p')
        WARNING_OUTPUT.setAttribute('id', 'warning-output')

NUMBER_INPUT.addEventListener('input', (pound) => {
    const USER_INPUT = pound.target.value;
    const FORMULA_OUTPUT = parseFloat(USER_INPUT * 0.45359237).toPrecision(4);

    // Helper Functions

        function showWeightOutput () {
            NUMBER_OUTPUT.textContent = `Your weight in kg is: ${FORMULA_OUTPUT}`;
            function deleteWeightOutput () {
                setTimeout( () => { NUMBER_INPUT.value = '', NUMBER_OUTPUT.textContent = `Your weight in kg is:` }, 10000);
            }
            deleteWeightOutput();
        }

        function showWarningOutput () {
            WARNING_OUTPUT.textContent = 'Please enter a valid number!'
            CARD.appendChild(WARNING_OUTPUT);
            function deleteWarningOutput () {
                setTimeout( () => { NUMBER_INPUT.value = '', WARNING_OUTPUT.remove() }, 2000);
            }
            deleteWarningOutput();
        }

    pound.target.value > 0.0 ? showWeightOutput() : showWarningOutput();
});