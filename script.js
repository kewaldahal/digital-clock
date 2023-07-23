function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  // Assuming there's a function called getNepaliTime() that converts the time to Nepali format
  const nepaliTime = getNepaliTime(hours, minutes, seconds);
  // Use the converted Nepali time as needed
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to avoid delay in the first update
updateClock();
