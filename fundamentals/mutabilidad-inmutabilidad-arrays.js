// mutabilidad
const fruits = Array('apple','banana','orange');
console.log(fruits);
fruits.push('kiwi');
console.log(fruits);

// inmutabilidad
const newFruits = fruits.concat(['grape','watermelon']);
console.log(newFruits);
console.log(fruits);

// check arrays with arrays
const isArray = Array.isArray(fruits);
console.log(isArray);