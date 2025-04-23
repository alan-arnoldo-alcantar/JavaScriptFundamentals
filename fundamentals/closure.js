// Closure: funcion que tiene acceso a variables de un ambito externo
// y puede recordar ese ambito incluso cuando la funcion se ejecuta fuera de ese ambito
function outerFunction(){
    let outerVariable = 'I am from outer function';
    function innerFunction(){
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); //se ejecuta fuera de su ambito pero tiene acceso a la variable outerVariable
// Closure: permite crear funciones privadas, encapsulamiento de datos
// Closure: permite crear funciones que pueden recordar el estado de sus variables
function createCounter(){
    let count = 0; // variable privada
    return function(){
        count++;
        console.log(count);
    }
}
const counterA = createCounter();
counterA();
counterA();

const counterB = createCounter();
counterB();

function outer(){
    message = 'Hello';
    function inner (name) {
        console.log(message + ' ' + name);
    }
    return inner;
}
const closureA = outer();
const ClosureB = outer();
closureA('Juan');
ClosureB('Pedro'); // Hello Pedro

// Ambito lexico: cada vez quese declara una function, crea su propio ambito lexico y 
// puede accedes a las variables que se declaran dentro de ese ambito y tambien a las 
// variables que se declaran en ambitos superiores