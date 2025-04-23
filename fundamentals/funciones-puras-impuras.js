// Funciones puras
function sum(a,b){
    return a+b;
}

// Efectos secundarios que hace que una funcinoes deje de ser pura
// Modificar parametros
// solicitudes HTML
// Manipular el DOM
// Obtener la hora actual


// Imprimir mensajes en consola
function suma (a,b) {
    console.log('A: ',a);
    return a+b;
}

// Modificar variables globales
let total = 0;
function suma2 (a,b) {
    total += a+b;
    return a;
}
console.log(total)
console.log(suma2(2,3));
console.log(total);