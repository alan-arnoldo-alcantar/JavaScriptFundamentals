// Create using Array

const fruits = Array('apple','banana','orange');
console.log(fruits);

const numbers = Array(1,2,3,4,5);
console.log(numbers);

const emptyArray = Array(5);
console.log(emptyArray);

// create using literal syntax
const vegetables = ['carrot','potato','onion'];
console.log(vegetables);

const vacio = [5];
console.log(vacio);

const recipeIngredients = [
    'flour',
    true,
    2,
    {
        ingredients: 'milk',
        quantity: 1
    },
    false
];
console.log(recipeIngredients);

// Acceder a los elementos de un array
const firstFruit = fruits[0];
console.log(firstFruit);

console.log(fruits.length);