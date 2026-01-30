/*
Arrays are ordered.
Sometimes order matters from the front, not the end.

Examples:
    - Queue systems
    - Waiting lines
    - Undo history
    - Notifications (latest on top)
*/


// unshift() – Add to the Beginning
let queue = ["B", "C"]; 
queue.unshift("A"); 

console.log(queue); 


// shift() – Remove from the Beginning
let first = queue.shift(); 

console.log(first); 
console.log(queue); 



// Exercise 3 (Think before coding)
/*
Given this array:
let tasks = ["Task2", "Task3"];

Tasks:
1. Add "Task1" to the beginning
2. Remove the first task and store it in currentTask
3. Print:
    - currentTask
    - Final tasks array
4. Use only:
    - unshift()
    - shift()
Write the complete code.
*/
let tasks = ["Task2", "Task3"]; 
tasks.unshift("Task1"); 

let currentTask = tasks.shift(); 


console.log(currentTask);
console.log(tasks);