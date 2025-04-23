// enteros y decimales
const entero = 4;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);
// No hay distincion para los npumeros enteros y decimales

// Notacion cientifica
const cientifico = 5e3;

// infinitos y NaN
const infinito = Infinity;
const noEsNumero = NaN;

// Operaciones aritmeticas
const suma = 5 + 3;
const resta = 5 - 3;
const multiplicacion = 5 * 3;
const division = 5 / 3;
const modulo = 5 % 3;
const potencia = 5 ** 3;

// Precisión
const resultados = 0.1 + 0.2;
console.log(resultados);
console.log(resultados.toFixed(2));

// Operaciones avanzados
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-1);
const aleatorio = Math.random();
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);