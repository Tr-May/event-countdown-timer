const eventDateInput = document.getElementById("event-date");
const startButton = document.getElementById("start-timer");
const daysDisplay = document.getElementById("days");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
let countdownInterval;

startButton.addEventListener("click", () => {
  const eventDate = new Date(eventDateInput.value);

  if (isNaN(eventDate)) {
    alert("Please select a valid date.");
    return;
  }

  // clear previous intervals
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const now = new Date();

    const timeDifference = eventDate - now;

    // if the event has passed,
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      alert("The event has passed!");
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysDisplay.textContent = days;
    hoursDisplay.textContent = hours;
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
  }, 1000);
});
