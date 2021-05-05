// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))


function fromDollarToYen(dollar) {
    return dollar * 109.30;
}
console.log(fromDollarToYen(2));


function fromEuroToDollar(euro) {
    return euro * 1.2;
}
console.log(fromEuroToDollar(2));


function fromYenToPound(yen) {
    return yen * 0.0066;
}
console.log(fromYenToPound(2));


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
