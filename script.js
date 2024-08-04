document.getElementById('emiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseInt(document.getElementById('loanTenure').value);

    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfMonths = loanTenure * 12;

    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / 
                (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Monthly EMI: ₹${emi.toFixed(2)}`;
});
