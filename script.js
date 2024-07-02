// Function to update current time and day
function updateTimeAndDay() {
    const currentTimeElement = document.getElementById('currentTime');
    const currentDayElement = document.getElementById('currentDay');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];

    currentTimeElement.textContent = utcTime;
    currentDayElement.textContent = currentDay;
}

// Initial call to set the time and day immediately on page load
window.onload = updateTimeAndDay;

// Update the time and day every second
setInterval(updateTimeAndDay, 1000);
