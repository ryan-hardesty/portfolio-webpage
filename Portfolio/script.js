


// selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;
	

	if(emailValue.includes('@')) {
		//all good
		alert('Thank you for your message! I will reply back soon.');
	} else {
		alert('Oh no! That does not look like a valid email address. Please Try Again.');
	}
})

// attaching 'click listener'




// getting user entered validations
// javascript validations











































































