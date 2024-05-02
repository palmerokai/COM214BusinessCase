const header = document.getElementById('site-header');
let hue = 0; // Initial hue value (0 = red)

function changeHeaderColor() {
  // Convert HSL to RGB for smooth color transition
  let color = `hsl(${hue}, 100%, 50%)`;
  header.style.backgroundColor = color;

  // Increment hue to transition to the next color
  hue = (hue + 1) % 360;
}

// Change header color every 50 milliseconds (adjust as needed)
setInterval(changeHeaderColor, 50);
