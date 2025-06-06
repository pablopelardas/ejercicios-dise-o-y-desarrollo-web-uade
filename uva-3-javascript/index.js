window.onload = function() {
    // Variables con datos personales
    let nombre = randomName();
    let edad = randomInt(18, 40);
    let ciudad = randomCity();

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

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomName() {
    const names = ["Pablo", "Ana", "Luis", "María", "Carlos"];
    return names[Math.floor(Math.random() * names.length)];
}

function randomCity() {
    const cities = ["Buenos Aires", "Madrid", "Barcelona", "Lima", "Santiago"];
    return cities[Math.floor(Math.random() * cities.length)];
}