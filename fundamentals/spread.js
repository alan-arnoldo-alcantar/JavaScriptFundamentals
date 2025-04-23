// spread operator
// The spread operator (...) is a syntax in JavaScript that allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected.
// It is commonly used for copying arrays, combining arrays, or passing elements of an array as arguments to a function.
// The spread operator is represented by three dots (...), followed by the iterable you want to expand.
// The spread operator is a powerful feature in JavaScript that allows for more concise and readable code when working with arrays and objects.
// The spread operator can be used in various scenarios, including:
// 1. Copying an Array

const originalArray = [1, 2, 3, 4, 5]
const copyOfAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOfAnArray)

// 2. Combining Arrrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

// 3. Creating Arrays with Additional Elements

const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

console.log(baseArray)
console.log(arrayWithAdditionalElements)

// 4. Pass elements to functions

function sum (a, b, c) {
  return a + b + c
}

const numbers = [1, 2, 3]
const result = sum(...numbers) 

console.log(result)