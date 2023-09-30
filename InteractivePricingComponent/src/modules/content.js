

setTimeout( () => {
    document.querySelector('.range-slider').addEventListener('change', () => {
        const INPUT_VALUE = document.querySelector('.range-slider').value;

        document.querySelector('.range-slider').style.background = `linear-gradient(
            to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${(INPUT_VALUE * 100) / 80}%,
            hsl(224, 65%, 95%) 50%,
            hsl(224, 65%, 95%) 100%)`;
        updateCurrentOutput(INPUT_VALUE);
    });
}, 0)

if ( document.querySelector('#toggle-checkbox-btn') ) {
    this.addEventListener('click', handleSwitchInput);
}

const VALUES = [0, 20, 40, 60, 80];
const COSTS = [8, 12, 16, 24, 32];
const VIEWS = ['10K', '50K', '100K', '500K', '1M'];

export function handleSwitchInput() {
    updateCurrentOutput(document.querySelector('.range-slider').value);
}

export function updateCurrentOutput(inputValue) {
    const SWITCH_INPUT = document.querySelector('#toggle-checkbox-btn');
    for(let i = 0; i < VALUES.length; i++) {
        if (inputValue >= VALUES[i]) {
            document.querySelector('.pageviews-count').innerHTML = `${VIEWS[i]} PAGEVIEWS`;
            document.querySelectorAll('.pricing-text').forEach(pricingText => {
                pricingText.innerHTML = `$${SWITCH_INPUT.checked ? COSTS[i] * .75 : COSTS[i].toFixed(2)}`;
            });
            document.querySelectorAll('.date-text').forEach(dateText => {
                dateText.textContent = SWITCH_INPUT.checked ? '/ year' : '/ month';
            });
        }
    };
}