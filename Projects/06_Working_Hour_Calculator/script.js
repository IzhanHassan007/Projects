document.getElementById('timeForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const start = document.getElementById('startTime').value;
    const end = document.getElementById('endTime').value;
    const breakMinutes = parseInt(document.getElementById('breakTime').value || '0');
  
    const startTime = new Date(`1970-01-01T${start}:00`);
    const endTime = new Date(`1970-01-01T${end}:00`);
  
    if (endTime <= startTime) {
      document.getElementById('result').innerHTML = "⚠️ End time must be after start time!";
      return;
    }
  
    let diffMs = endTime - startTime;
    let totalMins = diffMs / 1000 / 60 - breakMinutes;
  
    if (totalMins < 0) totalMins = 0;
  
    const hours = Math.floor(totalMins / 60);
    const mins = Math.round(totalMins % 60);
  
    document.getElementById('result').innerHTML = `
      🕒 Total Working Time: <strong>${hours}h ${mins}m</strong>
    `;
  });
  