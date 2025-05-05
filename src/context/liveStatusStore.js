import { atom } from 'nanostores';

export const liveStatus = atom('');

export function updateLiveStatus() {
  const now = new Date();
  const currentDay = now.getDay(); 
  const currentHour = now.getHours();

  const isRadioLive = currentDay === 5 && currentHour >= 20 && currentHour < 21; // Friday 20:00 - 21:00
  const isActive = false; // This should be replaced with the actual condition to check if the radio is active|

  if (isRadioLive && isActive) {
    liveStatus.set('ON');
  } else {
    liveStatus.set('OFF');  
  }
}

export function startLiveStatusInterval() {
  updateLiveStatus();
  setInterval(updateLiveStatus, 60000); 
}
