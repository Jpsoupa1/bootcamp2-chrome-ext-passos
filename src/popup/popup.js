const startTimerBtn = document.getElementById('startTimerBtn');
const statusEl = document.getElementById('status');

startTimerBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'START_TIMER', duration: 25 });
  statusEl.textContent = 'Timer de 25 minutos iniciado!';
  startTimerBtn.disabled = true;
});