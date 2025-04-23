// this nos permite usar el this en el contexto de una función

class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
}

const persona1 = new Persona("Juan", 30);
console.log(persona1); // Juan

persona1.nuevoMetedo = function(){
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
}

persona1.nuevoMetedo(); // Mi nombre es Juan y tengo 30 años