// Obtener el formulario por su ID
const formulario = document.getElementById('registroForm');

// Agregar un evento de escucha para la presentación del formulario
formulario.addEventListener('submit', function(event) {
    // Detener el envío del formulario para realizar la validación personalizada
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const carrera = document.getElementById('carrera').value;
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const dni = document.getElementById('dni').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const aceptaTerminos = document.getElementById('terminos_condiciones').checked;

    // Validar si los campos requeridos están vacíos
    if (!carrera || !nombres || !apellidos || !dni || !fechaNacimiento || !correo || !contrasena || !aceptaTerminos) {
        alert('Por favor, completa todos los campos y acepta los Términos y Condiciones.');
        return;
    }

    // Validar cada campo individualmente
    // Restricciones para nombres y apellidos: no deben contener números
    if (tieneNumeros(nombres) || tieneNumeros(apellidos)) {
        alert('Los nombres y apellidos no pueden contener números.');
        return;
    }

    // Restricciones para el número de DNI: debe contener solo números
    if (isNaN(dni)) {
        alert('El número de DNI solo puede contener números.');
        return;
    }

    // Restricciones para el correo electrónico: debe ser un correo institucional válido de Vallegrande
    if (!correo.endsWith('@vallegrande.edu.pe')) {
        alert('Ingresa un correo institucional válido de Vallegrande.');
        return;
    }

    // Resto del código de validación para cada campo...

    // Si todos los campos son válidos, puedes enviar el formulario
    formulario.submit();
});

// Función para verificar si una cadena tiene números
function tieneNumeros(cadena) {
    return /\d/.test(cadena);
}
