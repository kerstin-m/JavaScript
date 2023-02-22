/*Implement a removeItem function.
 The first parameter is an array.
 The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 Remove the item and return an array.
 Ensure that the original array was not mutated.*/

const animals = ["Dog", "Cat", "Lion"];
const removeItem = animals.slice(1, 3);

console.log(removeItem);
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
const removeItemZwei = fruits.slice(0, 6);
removeItemZwei.splice(2, 1);
console.log(removeItemZwei);
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]
