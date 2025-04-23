function descuentoFunction (precio, descuento) {
    const montoDescuento = precio*descuento/100;
    const precioConDescuento = precio*(100-descuento)/100;
    return precioConDescuento;
}

let precio = 300;
let descuento = 15;
console.log(`Precio inicial ${precio}`)
let precioFinal = descuentoFunction(precio, descuento);
console.log(`precio con descuento ${precioFinal}`);
console.log(typeof descuentoFunction);