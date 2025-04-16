function loadSVGLayout(type, index) {
    const area = document.getElementById('gamepad-area');
    if (document.getElementById(`controller-${index}`)) return;
  
    const container = document.createElement('div');
    container.className = 'controller';
    container.id = `controller-${index}`;
  
    fetch(`svg/${type}.svg`)
      .then(res => res.text())
      .then(svg => {
        container.innerHTML = svg;
        area.appendChild(container);
      });
  }
  
  function updateController(gp) {
    const container = document.getElementById(`controller-${gp.index}`);
    if (!container) return;
  
    gp.buttons.forEach((btn, i) => {
      const el = container.querySelector(`#btn-${i}`);
      if (el) {
        el.classList.toggle('active', btn.pressed);
      }
    });
  
    gp.axes.forEach((axis, i) => {
      const el = container.querySelector(`#axis-${i}`);
      if (el) {
        el.textContent = axis.toFixed(2);
      }
    });
  }
  
  function detectGamepads() {
    const gamepads = navigator.getGamepads();
  
    for (let gp of gamepads) {
      if (!gp) continue;
  
      let type = 'default';
      const id = gp.id.toLowerCase();
      if (id.includes("xbox")) type = "xbox";
      if (id.includes("playstation") || id.includes("ps")) type = "playstation";
  
      loadSVGLayout(type, gp.index);
      updateController(gp);
    }
  
    requestAnimationFrame(detectGamepads);
  }
  
  window.addEventListener("gamepadconnected", () => {
    console.log("🎮 Gamepad Connected!");
    detectGamepads();
  });
  