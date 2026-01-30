// push() – Add to the End
let numbers = [1, 2, 3]; 
numbers.push(4); 
console.log(numbers); 

let result = numbers.push(5); 
console.log(result); 


// pop() – Remove from the End
let removed = numbers.pop(); 
console.log(removed); 
console.log(numbers); 



/*
Given this array:
let scores = [10, 20, 30];

1. Add 40 to the array
2. Add 50 to the array
3. Remove the last value and store it in a variable called lastScore
4. Print:
    - lastScore
    - The final scores array
    - Write the complete code.
*/
let scores = [10, 20, 30];
scores.push(40); 
scores.push(50); 

let lastScore = scores.pop(); 


console.log(lastScore); 
console.log(scores); 
