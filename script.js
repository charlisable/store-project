
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


// MOBILE MENU 
// my variables for hamburger menu and nav menu
const hamburger = document.querySelector('.material-symbols-outlined');
const navMenu = document.querySelector('.nav-menu');

// adding event listener for click to hamburger menu
hamburger.addEventListener('click', mobileMenu);

// function for what happens when we click
 function mobileMenu() {
	// nav menu becomes visible when hamburger menu is clicked
	navMenu.classList.toggle('active');
 }

//  we want to remove ('active') when any where else but the nav menu and hamburger menu is clicked

const mainBody = document.querySelector('main');

mainBody.addEventListener('click', clickBody);

function clickBody() {
	navMenu.classList.remove('active');
}

// creating stuff for a cat to appear
const topHeading = document.getElementById('top-heading');
const catPeak = document.getElementById('cat-peaking');

topHeading.addEventListener('mouseover', function() {
	catPeak.classList.add('appear');
});

// Modal 
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Our functions
const openModal = function () {
	// Do some stuff to open the modal when openModalBtn is clicked
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};
// Add a closeModal function
const closeModal = function () {
	// Do some stuff to open the modal when closeModalBtn is clicked
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};


// Event listeners - to connect our elements to our functions
// this opens the modal when open modal button is clicked
openModalBtn.addEventListener('click', openModal);

// this closes modal when we click on close modal button
closeModalBtn.addEventListener('click', closeModal);
// this closes modal when we click on overlay
overlay.addEventListener('click', closeModal);
// this closes modal when we click escape key
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
