function validateForm() {
    event.preventDefault(); // detiene el envío del formulario si hay errores
    var form = document.getElementById("register-form");
    var nombre = form["nombre"].value;
    var apellido = form["apellido"].value;
    var rut = form["rut"].value;
    var email = form["email"].value;
    var password = form["password"].value;
    var confirmarPassword = form["confirmarPassword"].value;
    var valid = true;
    // Validar nombre
    if (!nombre) {
        valid = false;
        document.querySelector(".nombre-error").textContent = "Debe ingresar un nombre";
    } else {
        document.querySelector(".nombre-error").textContent = "";
    }
    // Validar apellido
    if (!apellido) {
        valid = false;
        document.querySelector(".apellido-error").textContent = "Debe ingresar un apellido";
    } else {
        document.querySelector(".apellido-error").textContent = "";
    }
    // Validar RUT
    if (!validateRut(rut)) {
        valid = false;
        document.querySelector(".rut-error").textContent = "RUT inválido";
    } else {
        document.querySelector(".rut-error").textContent = "";
    }
    // Validar email
    if (!email) {
        valid = false;
        document.querySelector(".email-error").textContent = "Debe ingresar un email";
    } else {
        document.querySelector(".email-error").textContent = "";
    }
    // Validar contraseña
    if (!validatePassword(password, confirmarPassword)) {
        valid = false;
        document.querySelector(".password-error").textContent = "La contraseña debe tener al menos 8 caracteres y contener al menos un número";
    } else {
        document.querySelector(".password-error").textContent = "";
    }
    // Enviar formulario si todo está válido
    if (valid) {
        form.submit();
    }
}

function validatePassword(password, confirmPassword) {
    if (password.length < 8 || !/\d/.test(password)) {
        return false;
    }
    return password === confirmPassword;
}

function validaRut(rutCompleto) {
    rutCompleto = rutCompleto.replace(/\./g, '').replace('-', '').toUpperCase();
    if (!/^[0-9]{1,9}[0-9K]$/.test(rutCompleto)) {
      return false;
    }
    var rut = rutCompleto.substring(0, rutCompleto.length - 1);
    var dv = rutCompleto.charAt(rutCompleto.length - 1);
    var suma = 0;
    var factor = 2;
    for (var i = rut.length - 1; i >= 0; i--) {
      suma += factor * rut.charAt(i);
      factor = factor === 7 ? 2 : factor + 1;
    }
    var dvCalculado = 11 - (suma % 11);
    dvCalculado = dvCalculado === 10 ? "K" : dvCalculado;
    dvCalculado = dvCalculado === 11 ? "0" : dvCalculado;
    return dv === dvCalculado.toString();
  }
document.getElementById("register-form").addEventListener("submit", validateForm);
