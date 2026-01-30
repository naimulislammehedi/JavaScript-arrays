/*
Exercise 1:

1. Create an array called cities with these values:
    - "Dhaka", "Chittagong", "Sylhet"
2. Print:
    - The first city
    - The last city (use length, not hardcoding)
3. Change "Sylhet" to "Rajshahi"
4. Print the updated array

Write the full JavaScript code.

*/
let cities = ["Dhaka", "Chittagong", "Sylhet"]; 

console.log(cities[0]);
console.log(cities[cities.length - 1]);  

cities[2] = "Rajshahi"; 
console.log(cities); 