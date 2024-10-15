// script.js

// Alert message when the page loads
window.onload = function() {
  alert("Welcome to my first web page!");
};

// Function to change the text when button is clicked
function changeText() {
  document.getElementById("myParagraph").innerText = "You clicked the button!";
}

// Get the elements
const imageContainer = document.querySelector('.image-container');
const hoverText = document.getElementById('hoverText');

// Show the text when hovering over the image
imageContainer.addEventListener('mouseover', () => {
  hoverText.style.display = 'block';
});

// Hide the text when the mouse leaves the image
imageContainer.addEventListener('mouseout', () => {
  hoverText.style.display = 'none';
});
