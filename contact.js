function validateContact() {
    return (
        validateFname() && validateEmail() && validateMessage() && validateSubject()
    );

}
function validateFname() {
    var name = document.getElementById("name");
    var nameWarning = document.getElementById("nameWarning");

    if (name.value.length !== 0) {
        nameWarning.style.visibility = "hidden";
        name.style.borderColor = "green";
        return true;
    } else {
        nameWarning.style.visibility = "visible";
        name.style.borderColor = "red";
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

function validateMessage() {
    var message = document.getElementById("message");
    var mssgWarning = document.getElementById("mssgWarning");

    if (message.value.length >= 6) {
        messageWarning.style.visibility = "hidden";
        message.style.borderColor = "green";
        return true;
    } else {
        mssgWarning.style.visibility = "visible";
        message.style.borderColor = "red";
        return false;
    }
}


function validateSubject() {
    var subject = document.getElementById("subject");
    var subjectWarning = document.getElementById("subjectWarning");

    if (subject.value.length !== 0) {
        subjectWarning.style.visibility = "hidden";
        subject.style.borderColor = "green";
        return true;
    } else {
        subjectWarning.style.visibility = "visible";
        subject.style.borderColor = "red";
        return false;
    }
}