// EMI Calculator
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

// Loan Eligibility Checker
document.getElementById('eligibilityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
    const annualInterestRate = parseFloat(document.getElementById('interestRateChecker').value);
    const tenureYears = parseInt(document.getElementById('tenureYears').value);

    // Assuming 50% of income can go towards EMI
    const maxEmi = (monthlyIncome - monthlyExpenses) * 0.5;

    // Calculate the maximum loan amount eligible
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfMonths = tenureYears * 12;

    const maxLoanAmount = (maxEmi * (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1)) / 
                          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths));

    const eligibilityResultElement = document.getElementById('eligibilityResult');
    eligibilityResultElement.innerHTML = `You are eligible for a loan up to: ₹${maxLoanAmount.toFixed(2)}`;
});
