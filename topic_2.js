// How do I store multiple related values in a single variable, in a specific order?

// A JavaScript array is an ordered list of values.
let numbers = [10, 20, 30, 40]; 

// Accessing Array Elements
let fruits = ["Apple", "Banana", "Mango"]; 
console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(fruits[2]); 
/*
If you access an index that doesn’t exist:
No error. Just undefined.
*/
console.log(fruits[5]); 

// Updating Array Values
fruits[1] = "Orance"; 
console.log(fruits); 

// Array Length
console.log(fruits.length); 

// Last index = length - 1
console.log(fruits[-1]); 