function switchLanguage(language) {
    const title = document.getElementById("title");
    const hourlyOption = document.querySelector('option[value="hourly.html"]');
    const savingsOption = document.querySelector('option[value="savings.html"]');
    const bonusesOption = document.querySelector('option[value="bonuses.html"]');
  
    if (language === 'en') {
      title.innerHTML = "💰 Select a Calculator";
      hourlyOption.innerHTML = "Hourly Salary Calculator";
      savingsOption.innerHTML = "Savings Calculator";
      bonusesOption.innerHTML = "Bonus Calculator";
    } else if (language === 'ur') {
      title.innerHTML = "💰 کیلکولیٹر منتخب کریں";
      hourlyOption.innerHTML = "گھنٹہ وار تنخواہ کیلکولیٹر";
      savingsOption.innerHTML = "بچت کیلکولیٹر";
      bonusesOption.innerHTML = "بونس کیلکولیٹر";
    }
  }
  