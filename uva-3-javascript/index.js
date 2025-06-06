// Cree tres variables con datos personales al azar y cuando cargue la página web, muestre un mensaje de bienvenida para el usuario.  

// Modifique el ejercicio anterior para que el usuario sea quien ingrese sus datos.  

// Modifique el ejercicio anterior para mostrar un mensaje (luego del mensaje del ejercicio 1), que le diga al usuario cuántos días ha vivido desde que nació.  

window.onload = function() {
    // Variables con datos personales
    let nombre = "Juan";
    let edad = 25;
    let ciudad = "Madrid";

    // Mensaje de bienvenida
    alert(`¡Bienvenido ${nombre} de ${ciudad}! Tienes ${edad} años.`);

    // Solicitar datos al usuario
    nombre = prompt("Por favor, ingresa tu nombre:");
    edad = parseInt(prompt("Por favor, ingresa tu edad:"));
    ciudad = prompt("Por favor, ingresa tu ciudad:");

    // Calcular días vividos
    const diasVividos = edad * 365;

    // Mensaje final
    alert(`¡Bienvenido ${nombre} de ${ciudad}! Tienes ${edad} años y has vivido aproximadamente ${diasVividos} días.`);
}