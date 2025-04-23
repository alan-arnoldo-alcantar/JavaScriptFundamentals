// TYPE CASTING EXPLICIT
const string = '42';
const integer = parseInt(string);
console.log(integer); // 42
console.log(typeof integer); // number

const stringDecimal = '3.24';
const float = parseFloat(stringDecimal);
console.log(float); // 3.24
console.log(typeof float); // number

const binary = '1010';
const decimal = parseInt(binary, 2);
console.log(decimal); // 10
console.log(typeof decimal); // number

// TYPE CASTING IMPLICIT
const sum = '5' + 3;
console.log(sum); // 53
console.log(typeof sum); // string

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean); // 3true
console.log(typeof sumWithBoolean); // string