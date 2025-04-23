// Expression function para guardar una funciones en una variable
const greeting = function(name) {
    return `Hello, ${name}!`;
}

// Arrow function es solo para escribir menos codigo
const newGreeting = (name) => {
    return `Hello, ${name}!`;
}

// Se puede usar para funciones de una sola linea
// En caso de solo necesitar un parametro se puede omitir los parentesis
const newGreeting2 = name => `Hello, ${name}!`;

// Lexical binding
// En este caso el contexto es el objeto
const person = {
    name: 'John',
    greet: function(message) {
        console.log(`${this.name} says ${message}`);
    }
}

person.greet('Hello!');