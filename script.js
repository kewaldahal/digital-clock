
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

function startTimer(duration) {
  let timer = duration;
  let minutes, seconds;

  const intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      document.getElementById('timerDisplay').innerText = minutes + ':' + seconds;

      if (--timer < 0) {
          clearInterval(intervalId);
          document.getElementById('timerDisplay').innerText = 'Time\'s up!';
      }
  }, 1000);
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById('startTimerBtn').addEventListener('click', function () {
  const selectedTime = parseInt(document.getElementById('timerDropdown').value);
  startTimer(selectedTime);
});

