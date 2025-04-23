const numbers = [5,10,15,20,25];
const primerElmentosMayorDiez = numbers.find(number => number>10);
console.log(primerElmentosMayorDiez); // 15

const posicionPrimerElementoMayorDiez = numbers.findIndex(number=>number>10);
console.log(posicionPrimerElementoMayorDiez); // 2
console.log(numbers[posicionPrimerElementoMayorDiez]);