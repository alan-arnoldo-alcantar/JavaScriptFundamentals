// las promesas en js (promise) nos permiten manejar operaciones asincronas
// una promesa es un objeto que representa la finalizacion o el fracaso de una operacion asincrona
// una promesa puede estar en uno de tres estados:
// 1. pending: la promesa esta en espera
// 2. fulfilled: la promesa se ha cumplido
// 3. rejected: la promesa ha sido rechazada
// una promesa se crea con el constructor Promise
// el constructor Promise recibe una funcion como argumento, esta funcion recibe dos argumentos:
// 1. resolve: se llama cuando la operacion asincrona se ha completado exitosamente
// 2. reject: se llama cuando la operacion asincrona ha fallado
// el constructor Promise devuelve un objeto Promise
// el objeto Promise tiene dos metodos:
// 1. then: se llama cuando la promesa se ha cumplido
// 2. catch: se llama cuando la promesa ha sido rechazada
// el metodo then recibe dos argumentos:
// 1. onFulfilled: se llama cuando la promesa se ha cumplido
// 2. onRejected: se llama cuando la promesa ha sido rechazada
// el metodo catch recibe un argumento:
// 1. onRejected: se llama cuando la promesa ha sido rechazada
// el metodo finally se llama cuando la promesa se ha cumplido o ha sido rechazada
// el metodo finally no recibe argumentos

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve("La promesa se ha cumplido");
        } else {
            reject("La promesa ha sido rechazada");
        }
    }, 2000);
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("La promesa ha terminado");
    });