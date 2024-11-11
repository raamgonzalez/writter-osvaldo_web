import { atom } from 'nanostores';

export const liveStatus = atom('');

export function updateLiveStatus() {
  const now = new Date();
  const currentDay = now.getDay(); 
  const currentHour = now.getHours();

  if (currentDay === 5 && currentHour >= 20 && currentHour < 21) {
    liveStatus.set('ON');
  } else {
    liveStatus.set('OFF');
  }
}

export function startLiveStatusInterval() {
  updateLiveStatus();
  setInterval(updateLiveStatus, 60000); 
}
