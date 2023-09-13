const stateDropdown = document.getElementById('state');
const cityDropdown = document.getElementById('city');

const cityOptions = {
    state1: ['Vasco', 'Margao', 'Panjim'],
    state2: ['Mumbai', 'Pune', 'Kolhapur'],
    state3: ['Thiruvananthapuram', 'Kochi', 'Kannur', 'Kozhikode'],
    // Add more cities for other states
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

// Add an event listener to the state dropdown to trigger city population
stateDropdown.addEventListener('change', populateCityDropdown);

// Trigger the population of city options when the page loads
populateCityDropdown();


// validation

// Validation functions
function validateRegistration() {
    return (
        validateFname() &&
        validateLname() &&
        validateAge() &&
        validatePhone() &&
        validateEmail() &&
        validateAddress() &&
        validateUsername() &&
        validatePassword() &&
        validateConfirmPassword()
    );
}

function validateContact() {
    return validateFname() && validateLname() && validateEmail();
}

function validateFname() {
    var fname = document.getElementById("first-name");
    var fnameWarning = document.getElementById("fnameWarning");

    if (fname.value.length !== 0) {
        fnameWarning.style.visibility = "hidden";
        fname.style.borderColor = "green";
        return true;
    } else {
        fnameWarning.style.visibility = "visible";
        fname.style.borderColor = "red";
        return false;
    }
}

function validateLname() {
    var lname = document.getElementById("last-name");
    var lnameWarning = document.getElementById("lnameWarning");

    if (lname.value.length !== 0) {
        lnameWarning.style.visibility = "hidden";
        lname.style.borderColor = "green";
        return true;
    } else {
        lnameWarning.style.visibility = "visible";
        lname.style.borderColor = "red";
        return false;
    }
}

function validateAge() {
    var age = document.getElementById("age");
    var ageWarning = document.getElementById("ageWarning");

    if (age.value >= 18 && age.value < 100) {
        ageWarning.style.visibility = "hidden";
        age.style.borderColor = "green";
        return true;
    } else {
        ageWarning.style.visibility = "visible";
        age.style.borderColor = "red";
        return false;
    }
}

function validatePhone() {
    var phone = document.getElementById("phone");
    var phoneWarning = document.getElementById("phoneWarning");

    if (phone.value.length === 10) {
        phoneWarning.style.visibility = "hidden";
        phone.style.borderColor = "green";
        return true;
    } else {
        phoneWarning.style.visibility = "visible";
        phone.style.borderColor = "red";
        return false;
    }
}

function validateEmail() {
    var email = document.getElementById("email");
    var emailWarning = document.getElementById("emailWarning");
    var regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regEmail.test(email.value)) {
        emailWarning.style.visibility = "hidden";
        email.style.borderColor = "green";
        return true;
    } else {
        emailWarning.style.visibility = "visible";
        email.style.borderColor = "red";
        return false;
    }
}

function validateAddress() {
    var address = document.getElementById("address");
    var addressWarning = document.getElementById("addressWarning");

    if (address.value.length >= 6) {
        addressWarning.style.visibility = "hidden";
        address.style.borderColor = "green";
        return true;
    } else {
        addressWarning.style.visibility = "visible";
        address.style.borderColor = "red";
        return false;
    }
}

function validateUsername() {
    var username = document.getElementById("username");
    var usernameWarning = document.getElementById("usernameWarning");

    if (username.value.length !== 0) {
        usernameWarning.style.visibility = "hidden";
        username.style.borderColor = "green";
        return true;
    } else {
        usernameWarning.style.visibility = "visible";
        username.style.borderColor = "red";
        return false;
    }
}

function validatePassword() {
    var password = document.getElementById("password");
    var passwordWarning = document.getElementById("passwordWarning");
    var regPassword = /^[a-zA-Z0-9]{6,}$/;

    if (regPassword.test(password.value)) {
        passwordWarning.style.visibility = "hidden";
        password.style.borderColor = "green";
        return true;
    } else {
        passwordWarning.style.visibility = "visible";
        password.style.borderColor = "red";
        return false;
    }
}

function validateConfirmPassword() {
    var cpassword = document.getElementById("confirm-password");
    var password = document.getElementById("password");
    var cpasswordWarning = document.getElementById("cpasswordWarning");

    if (validatePassword() && cpassword.value === password.value) {
        cpasswordWarning.style.visibility = "hidden";
        cpassword.style.borderColor = "green";
        return true;
    } else {
        cpasswordWarning.style.visibility = "visible";
        cpassword.style.borderColor = "red";
        return false;
    }
}
