// TIPOS DE DATOS PRIMITIVOS EN JS
// En JavaScript existen 7 tipos de datos primitivos
// string
let nombre ="Alan";

// number
let edad=33;

// boolean
let esDesarrollador=true;

// null, este tipo de variable lo utiliza el programador
// es parte de la lógica
let variableNula=null;

// UNDEFINED, este tipo de datos nos lo arroja js
// el programador no utiliza este tipo de datos
let variableSinDefinir=undefined;

// symbols
let simboloUnico = Symbol("Soy un simbolo único");

// bigint, es para npumeros muy grandes
let numeroGrande = 2n;

// TIPO DE DATOS COMPLEJOS
// En JavaScript existen 3 tipos de datos complejos

// object
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    esNuevo: true,
    color: "rojo",
};

// array
let listaCompras = ["leche", "pan", "huevos", "carne"];

// function
function sumar(a, b) {
    return a + b;
}