/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const input = parseInt(time)
  if (input < 12) 
  return 'Good Morning'
  if (input > 17) 
  return 'Good Evening'
  else 
  return 'Good Afternoon'
};
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").textContent = message
};