const numeroSecreto = Math.floor(Math.random()*10 +1);

const numeroJugador = parseInt(prompt("Adivina el numero secreto entre 1 y 10"));

console.log(`Este es el npumero con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
    console.log("Has adivinado el numero secreto");
} else if (numeroJugador > numeroSecreto) {
    console.log(`El numero secreto es menor ${numeroSecreto}`);

} else {
    console.log(`El numero secreto es mayor ${numeroSecreto}`);
}
