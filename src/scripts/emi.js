function CalculateClick() {
    let principal = amount;
    let annualInterestRate = rate;
    let numberOfYears = numberOfYears;

    let monthlyRate = annualInterestRate / 12 / 100;
    let numberOfMonths = numberOfYears * 12;

    let emi;
    if (monthlyRate === 0) {
        // No interest case
        emi = principal / numberOfMonths;
    } else {
        emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
              (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
    }

    emi = emi.toFixed(2);

    // Display EMI on the page (assuming you have an element with id="lblEMI")
    document.getElementById("lblEMI").innerText = "Monthly EMI: ₹" + emi;
}
