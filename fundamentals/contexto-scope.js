// Los bloques son todo aquello dentro de llaves {}. 
// En JavaScript, los bloques pueden ser funciones, if, for, while, etc.
// El contexto de ejecución es el entorno/bloque en el que se ejecuta el código.
// En JavaScript, cada función, for, while, if tiene su propio contexto/bloque de ejecución.

const productName = "Smartphone";
const productPrice = 299.99;
const brandName = "TechBrand";

function getProductDetails() {
    const productName = "Smartphone Pro";
    const productPrice = 399.99;

    return `The ${productName} is a product of ${brandName} and costs $${productPrice}.`;
}

console.log(getProductDetails());
console.log(`The ${productName} is a product of ${brandName} and costs $${productPrice}.`);