// Function to highlight key when pressed
function highlightKey(key) {
    const button = document.getElementById(`key-${key}`);
    if (button) {
      button.classList.add('pressed');
    }
  }
  
  // Function to remove highlight after key is released
  function removeHighlight(key) {
    const button = document.getElementById(`key-${key}`);
    if (button) {
      button.classList.remove('pressed');
    }
  }
  
  // Listening for physical keyboard input
  window.addEventListener('keydown', function (event) {
    const key = event.key.toUpperCase();
    highlightKey(key);
    document.getElementById('status').textContent = `You pressed: ${key}`;
  });
  
  window.addEventListener('keyup', function (event) {
    const key = event.key.toUpperCase();
    removeHighlight(key);
  });
  
  // Make virtual keys clickable
  const virtualKeys = document.querySelectorAll('.key');
  virtualKeys.forEach(function (key) {
    key.addEventListener('click', function () {
      const keyValue = key.textContent;
      highlightKey(keyValue);
      setTimeout(() => removeHighlight(keyValue), 300); // remove highlight after short delay
      document.getElementById('status').textContent = `You clicked: ${keyValue}`;
    });
  });
  