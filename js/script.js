const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = new Date();

const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
currentDay.textContent = days[date.getUTCDay()];

const currentTime = document.querySelector('[data-testid="currentUTCTime"]');
currentTime.textContent = date.getTime();