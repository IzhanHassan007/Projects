document.getElementById('ipptForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const age = parseInt(document.getElementById('age').value);
    const pushups = parseInt(document.getElementById('pushups').value);
    const situps = parseInt(document.getElementById('situps').value);
    const runTime = document.getElementById('runTime').value;
  
    const ageGroup = getAgeGroup(age);
    const pushupScore = getPushupScore(ageGroup, pushups);
    const situpScore = getSitupScore(ageGroup, situps);
    const runScore = getRunScore(ageGroup, runTime);
  
    const totalScore = pushupScore + situpScore + runScore;
    const award = getAward(totalScore);
  
    document.getElementById('result').innerHTML = `
      <p>Push-Up Score: <strong>${pushupScore}</strong></p>
      <p>Sit-Up Score: <strong>${situpScore}</strong></p>
      <p>Run Score: <strong>${runScore}</strong></p>
      <hr>
      <h2>Total Score: ${totalScore}</h2>
      <h3>Award: ${award}</h3>
    `;
  });
  
  function getAgeGroup(age) {
    if (age <= 24) return 'below25';
    else if (age <= 29) return '25to29';
    else if (age <= 34) return '30to34';
    else if (age <= 39) return '35to39';
    else return '40plus';
  }
  
  function getPushupScore(ageGroup, reps) {
    if (reps >= 60) return 25;
    else if (reps >= 50) return 20;
    else if (reps >= 40) return 15;
    else if (reps >= 30) return 10;
    else return 5;
  }
  
  function getSitupScore(ageGroup, reps) {
    if (reps >= 60) return 25;
    else if (reps >= 50) return 20;
    else if (reps >= 40) return 15;
    else if (reps >= 30) return 10;
    else return 5;
  }
  
  function getRunScore(ageGroup, timeStr) {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
  
    if (totalSeconds <= 600) return 50;
    else if (totalSeconds <= 660) return 40;
    else if (totalSeconds <= 720) return 30;
    else if (totalSeconds <= 780) return 20;
    else return 10;
  }
  
  function getAward(score) {
    if (score >= 85) return 'Gold';
    else if (score >= 75) return 'Silver';
    else if (score >= 61) return 'Pass with Incentive';
    else if (score >= 51) return 'Pass';
    else return 'Fail';
  }
  