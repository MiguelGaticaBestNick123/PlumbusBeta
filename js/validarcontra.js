function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmarPassword").value;

    if (password != confirmPassword) {
        document.querySelector('.confirmarPassword-error').innerHTML = "Las contraseñas no coinciden";
        return false;
    }
    else {
        document.querySelector('.confirmarPassword-error').innerHTML = "";
        return true;
    }
}

function validateRut() {
    var rut = document.getElementById("rut").value;
    rut = rut.replace(/[^\d]/g, ""); // Elimina todo lo que no sea un número
    document.getElementById("rut").value = rut;
}

function validateName() {
    var name = document.getElementById("nombre").value;
    if (name.length < 3) {
        document.querySelector('.nombre-error').innerHTML = "El nombre debe tener al menos 3 caracteres";
        return false;
    }
    else {
        document.querySelector('.nombre-error').innerHTML = "";
        return true;
    }
}

function validateLastName() {
    var lastName = document.getElementById("apellido").value;
    if (lastName.length < 3) {
        document.querySelector('.apellido-error').innerHTML = "El apellido debe tener al menos 3 caracteres";
        return false;
    }
    else {
        document.querySelector('.apellido-error').innerHTML = "";
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        document.querySelector('.email-error').innerHTML = "";
        return true;
    }
    else {
        document.querySelector('.email-error').innerHTML = "Por favor, ingrese un correo electrónico válido";
        return false;
    }
}

document.getElementById("register-form").onsubmit = function() {
    var valid = true;

    valid = validatePassword() && valid;
    valid = validateRut() && valid;
    valid = validateName() && valid;
    valid = validateLastName() && valid;
    valid = validateEmail() && valid;

    return valid;
}
