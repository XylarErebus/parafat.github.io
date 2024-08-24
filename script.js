// Fecha del cumpleaños
const countdownDate = new Date("Aug 24, 2024 00:00:00").getTime();

// Elemento de audio
const birthdaySong = document.getElementById("birthdaySong");

// Actualiza el contador cada segundo
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calcula los días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en los elementos correspondientes
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("contador").style.display = "none"; // Oculta el contador
        document.getElementById("tarjeta").classList.remove("oculto"); // Muestra la tarjeta
        birthdaySong.play(); // Reproduce la canción
    }
}, 1000);
