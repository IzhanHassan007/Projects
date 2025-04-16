// Event listener for each form
document.getElementById('hourlyForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const hourlyRate = parseFloat(document.getElementById('hourly-rate').value);
    const hoursPerWeek = parseFloat(document.getElementById('hours-per-week').value);
    const weeklySalary = hourlyRate * hoursPerWeek;
    const result = `💸 Weekly Salary: $${weeklySalary.toFixed(2)}`;
    document.getElementById('result').innerHTML = result;
  });
  
  document.getElementById('savingsForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const monthlySavings = parseFloat(document.getElementById('monthly-savings').value);
    const years = parseFloat(document.getElementById('years').value);
    const totalSavings = monthlySavings * 12 * years;
    const result = `💰 Total Savings after ${years} years: $${totalSavings.toFixed(2)}`;
    document.getElementById('result').innerHTML = result;
  });
  
  document.getElementById('bonusForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const salary = parseFloat(document.getElementById('salary').value);
    const bonusPercentage = parseFloat(document.getElementById('bonus-percentage').value);
    const bonusAmount = (salary * bonusPercentage) / 100;
    const result = `🎉 Your Bonus Amount: $${bonusAmount.toFixed(2)}`;
    document.getElementById('result').innerHTML = result;
  });
  