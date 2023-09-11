
const stateDropdown = document.getElementById('state');
const cityDropdown = document.getElementById('city');
const registrationForm = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorDisplay = document.getElementById('error-message');


const cityOptions = {
    state1: ['Vasco', 'Margao', 'Panjim'],
    state2: ['Mumbai', 'Pune', 'Kholapur'],
    state3: ['Thiruvananthapuram', 'Kochi', 'Kannur', 'Kozhikode'],

};


function populateCityDropdown() {
    const selectedState = stateDropdown.value;
    const cities = cityOptions[selectedState] || [];


    cityDropdown.innerHTML = '';


    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
    });
}


stateDropdown.addEventListener('change', populateCityDropdown);

// validation

document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // form validation logic here

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const gender = document.querySelector('input[name="gender"]:checked');
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (username === '') {
        displayError('Please enter a username.');
        return;
    }

    if (password === '') {
        displayError('Please enter a password.');
        return;
    }

    // Validation logic
    let isValid = true;

    // Check first name
    if (firstName === '') {
        alert('Please enter your first name.');
        isValid = false;
    }

    // Check last name
    if (lastName === '') {
        alert('Please enter your last name.');
        isValid = false;
    }

    // Check date of birth
    if (dateOfBirth === '') {
        alert('Please enter your date of birth.');
        isValid = false;
    }

    // Check age (not below 18)
    if (isNaN(age) || age < 18) {
        alert('You must be at least 18 years old to register.');
        isValid = false;
    }

    // Check gender
    if (!gender) {
        alert('Please select your gender.');
        isValid = false;
    }

    // Check phone number
    const phonePattern = /^\d{10}$/; // Change this pattern based on your phone number format
    if (!phone.match(phonePattern)) {
        alert('Please enter a valid 10-digit phone number.');
        isValid = false;
    }

    // Check email address
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }
    if (isValid) {
        alert('Registered successfully');

    }



});

// Function to display an error message
function displayError(message) {
    errorDisplay.textContent = message;
    errorDisplay.style.color = 'red';
}



