// Filter tal cual crea un nuevo array con los elementos que cumplen la condicion
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numbers.filter(num => num %2===0);
console.log(numerosPares); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Reduce me permite generar metricas agregadas que sigan la logica de una condicion
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

const palabras = ['Hola', 'mundo', 'Hola', 'JavaScript'];
const palabrasRepetidas = palabras.reduce((accumulator, currentValue)=> {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
} , {})
console.log(palabrasRepetidas);
