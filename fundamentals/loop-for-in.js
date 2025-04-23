// para iterar sobre objetos inumerables

const listaCompras = {
    manzana:5,
    pera:3,
    naranja:2,
    uva:1
}

for (fruta in listaCompras) {
    console.log(fruta);
}

for (fruta in listaCompras) {
    console.log(`${fruta} : ${listaCompras[fruta]}`);
}

for (fruta of listaCompras) {
    console.log(fruta);
}