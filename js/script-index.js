$(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'top', // Ubicación del Popover en relación a la imagen
        trigger: 'click', // Acción que activa el Popover
        html: true, // Permite utilizar HTML dentro del contenido del Popover
        content: '<p>¡Bienvenido a mi tienda de Pumblus!</p><p>Compra ahora tu Pumblus y descubre para qué sirve.</p>' // Contenido del Popover
    })
})