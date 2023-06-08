const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.querySelector('.form__message');

const submit = document.querySelector('.submit');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Show modal
function showModal() {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}

// close modal
function closeModal() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}

// validate user input
function validateForm(fName, lName, userEmail, userPassword) {
	if (fName === '' && lName == '' && userEmail === '' && userPassword === '') {
		message.textContent = 'Fields cannot be blank';
	} else if (fName === '' || lName === '') {
		message.textContent = 'Name field cannot be blank';
	} else if (!userEmail) {
		message.textContent = 'Email field cannot be blank';
	} else if (!userPassword) {
		message.textContent = 'Password field cannot be blank';
	} else {
		firstName.value = '';
		lastName.value = '';
		email.value = '';
		password.value = '';
		showModal();
	}
}

// submit form
submit.addEventListener('click', (e) => {
	e.preventDefault();
	const fName = firstName.value;
	const lName = lastName.value;
	const userEmail = email.value;
	const userPassword = password.value;

	validateForm(fName, lName, userEmail, userPassword);
});

// close modal
modalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
