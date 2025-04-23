// maps nos permite ejecutar una funcion sobre cada elemento de un array
// y devuelve un nuevo array con los resultados
// sintaxis objeto.map(arrow function donde el parametro de entrada es la variable iteradora)
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(num => num*num);
console.log(numbers);
console.log(doubleNumbers);

// foreach es lo mismo que map solo que no devuelve un nuevo array, 
const colors = ['red', 'pink', 'blue'];
const iteraColors = colors.forEach(color => console.log(color+' hola'))
console.log(colors);
console.log(iteraColors);

// Ejemplo de map
const fahrenheit = [0, 32, 100, 212];
const celsius = fahrenheit.map(f => (f - 32) * 5 / 9);
console.log(fahrenheit);
console.log(celsius);

// Ejemplo de suma de un array
const elementos = [1, 2, 3, 4, 5];
let suma = 0;
console.log(suma);
elementos.forEach(elemento => suma += elemento)
console.log(suma);