<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $subject = trim($_POST['subject']);
    $message = trim($_POST['message']);

    // Validar nombre
    if(empty($name)) {
        $errors[] = 'Por favor, ingrese su nombre';
    }

    // Validar correo electrónico
    if(empty($email)) {
        $errors[] = 'Por favor, ingrese su correo electrónico';
    } elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'El correo electrónico ingresado no es válido';
    }

    // Validar asunto
    if(empty($subject)) {
        $errors[] = 'Por favor, ingrese un asunto';
    }

    // Validar mensaje
    if(empty($message)) {
        $errors[] = 'Por favor, ingrese un mensaje';
    }

    // Si no hay errores, enviar correo electrónico
    if(empty($errors)) {
        $to = 'correo_destino@example.com';
        $subject = 'Mensaje de contacto';
        $body = "Nombre: $name\n\nCorreo electrónico: $email\n\nAsunto: $subject\n\nMensaje:\n$message";

        // Establecer las cabeceras del correo electrónico
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Enviar el correo electrónico
        mail($to, $subject, $body, $headers);

        // Redirigir al usuario a una página de confirmación
        header('Location: confirmacion.html');
        exit;
    }
}
?>
