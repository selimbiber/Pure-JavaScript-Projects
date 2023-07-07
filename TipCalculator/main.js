const billAmount = document.querySelector('#bill-amount')

const tipPercentage = document.querySelector('#tip-percentage')

const totalResult = document.querySelector('#total-result')

const btnCalculate = document.querySelector('#btn-calculate')
btnCalculate.addEventListener('click', (calculate) => {
    let billAmountValue = Number(billAmount.value);
    let tipPercentageValue = 100 / Number(tipPercentage.value);
    let totalResultValue = (billAmountValue + (billAmountValue / tipPercentageValue)).toPrecision(4);

    totalResult.textContent = totalResultValue
})