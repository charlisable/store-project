
// created a variable for contact us link to open up in new tab
const contactLink = document.getElementById('contactLink');

contactLink.setAttribute('target', '_blank');



// variable for all 'add to cart' buttons
const allButtons = document.querySelectorAll('.cart-button');

// added an event listener to the button
// Use the addEventListener method to add a click event listener to the button
allButtons.forEach(function(button) {
	button.addEventListener('click', buttonClicked);
});

// function to call when the button is clicked
// an alert pops up when the button is clicked
function buttonClicked() {
	alert("Meowdy was added to cart");
}


