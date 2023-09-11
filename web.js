const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const d = new Date();
// Get the current time in milliseconds
const TimeInMilliseconds = Date.now();
let currentDay = days[d.getDay() - 1];
document.getElementById("day").innerHTML = currentDay;

// Function to display the current time in milliseconds
function displayTimeInMilliseconds() {
  const timeInMilliseconds = Date.now();
  document.getElementById("clock").innerHTML = timeInMilliseconds;
}
// Update the display every 10 milliseconds
setInterval(displayTimeInMilliseconds, 10);

// Initiating a function call anytime the page loads
window.onload = displayTimeInMilliseconds;

document.getElementById("btn").onclick = function () {
  location.href = "https://github.com/Courage29";
};
