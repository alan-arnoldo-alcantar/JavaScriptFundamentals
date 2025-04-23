function envioDatos(){
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
}

// aysnc y await en js nos permiten manejar operaciones asincronas de una manera mas sencilla
// async y await son palabras reservadas en js
// async se utiliza para declarar una funcion asincrona
// await se utiliza para esperar la finalizacion de una promesa
// una funcion asincrona devuelve una promesa
// una funcion asincrona puede contener una o mas palabras reservadas await

async function envioDatosAsync(){
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}