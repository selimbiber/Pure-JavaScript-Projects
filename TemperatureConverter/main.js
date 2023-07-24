const celsiusInput = document.getElementById('celsius-input')
const fahrenheitInput = document.getElementById('fahrenheit-input')
const kelvinInput = document.getElementById('kelvin-input')

celsiusInput.addEventListener('input', (c) => {
    const currentValue = Number(c.target.value);

    fahrenheitInput.value = (currentValue === '0' ? 32.00 : currentValue * 1.8 + 32).toFixed(2);
    kelvinInput.value = (currentValue === '0' ? 273.32 : currentValue + 273.32)
});

fahrenheitInput.addEventListener('input', (f) => {
    const currentValue = f.target.value;

    celsiusInput.value = ( (currentValue - 32) / 1.8 ).toFixed(2);
    kelvinInput.value = ( (currentValue - 32) / 1.8 + 273.32 ).toFixed(2);
});

kelvinInput.addEventListener('input', (k) => {
    const currentValue = k.target.value;

    celsiusInput.value = (currentValue - 273.32).toFixed(2);
    fahrenheitInput.value = ( (currentValue - 273.32) * 1.8 + 32 ).toFixed(2);
});