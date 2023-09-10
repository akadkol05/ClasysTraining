// Get references to form elements
const stateDropdown = document.getElementById('state');
const cityDropdown = document.getElementById('city');
const registrationForm = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorDisplay = document.getElementById('error-message');

// Define city options for each state (you can add more options as needed)
const cityOptions = {
    state1: ['Vasco', 'Margao', 'Panjim'],
    state2: ['Mumbai', 'Pune', 'Kholapur'],
    state3: ['Thiruvananthapuram', 'Kochi', 'Kannur', 'Kozhikode'],
    // Add more cities for other states
};

// Function to populate the city dropdown based on the selected state
function populateCityDropdown() {
    const selectedState = stateDropdown.value;
    const cities = cityOptions[selectedState] || [];

    // Clear existing options
    cityDropdown.innerHTML = '';

    // Add new city options
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
    });
}


stateDropdown.addEventListener('change', populateCityDropdown);

// Form submission handler (you can add form validation here)
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // form validation logic here

    const username = usernameInput;
    const password = passwordInput;

    if (username === '') {
        displayError('Please enter a username.');
        return;
    }

    if (password === '') {
        displayError('Please enter a password.');
        return;
    }



});

// Function to display an error message
function displayError(message) {
    errorDisplay.textContent = message;
    errorDisplay.style.color = 'red';
}



