let loanAmount = 10000; //? DEFAULT VALUE
document.getElementById('loan-amount-input').addEventListener('input', (e) => {
    loanAmount = e.target.value;
    updateMonthlyPaymentAmount();
});

let interestRate = 10; //? DEFAULT VALUE
document.getElementById('interest-rate-input').addEventListener('input', (e) => {
    interestRate = e.target.value;
    updateMonthlyPaymentAmount();
});

let monthsToPay = 12; //? DEFAULT VALUE
document.getElementById('months-to-pay-input').addEventListener('input', (e) => {
    monthsToPay = e.target.value;
    updateMonthlyPaymentAmount();
});

function updateMonthlyPaymentAmount() {
    let currentInterestRate = ( loanAmount * (interestRate * 0.01) ) / monthsToPay;
    let monthlyPaymentAmount = (loanAmount / monthsToPay + currentInterestRate).toFixed(2);
    document.querySelector('.monthly-payment-amount').textContent = monthlyPaymentAmount;
}