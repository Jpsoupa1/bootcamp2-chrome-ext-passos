chrome.runtime.onInstalled.addListener(() => {
    console.log('Extensão Lembrete de Pausa instalada.');
  });
  

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'START_TIMER') {
      chrome.alarms.create('pauseAlarm', {
        delayInMinutes: msg.duration
      });
      console.log(`Alarme 'pauseAlarm' criado para disparar em ${msg.duration} minutos.`);
      sendResponse({ ok: true });
    }
  });
  

chrome.alarms.onAlarm.addListener(async (alarm) => { 
    if (alarm.name === 'pauseAlarm') {
      await chrome.notifications.create('pauseNotification', {
        type: 'basic',
        iconUrl: '../../icons/icon196.png',
        title: 'Hora da Pausa!',
        message: 'Levante-se, estique-se um pouco e descanse os olhos.',
        priority: 2
      });
      console.log('Alarme \'pauseAlarm\' disparado e notificação enviada.');
    }
  });