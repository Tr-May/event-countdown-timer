function displayTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  console.log(`${hours}:${minutes}:${seconds}`);
}

// displayTime();

setInterval(displayTime, 1000);

// setInterval(displayTime, 1000); // Updates every second
