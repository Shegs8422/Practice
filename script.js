/* JavaScript Functions Lesson Notes
Planning the Examples
Basic function syntax
Function parameters
Return values
Function expressions
Arrow functions
Function scope

Code Examples
1. Basic Function Declaration */
// Basic function syntax
function greet() {
    console.log("Hello!");
}
greet(); // Calling the function

//Parameters and Arguments
// Parameters
function greetPerson(name, age) {
    console.log(`Hello ${name}, you are ${age} years old`);
}
greetPerson("John", 25);

//3. Return Values
// Return values
function multiply(a, b) {
    return a * b;
}
let product = multiply(4, 5); // Returns 20

//4. Function Expression
// Function expression
const square = function(num) {
    return num * num;
};
let result = square(4); // Returns 16

//5. Arrow Function
// Arrow function syntax
const add = (a, b) => a + b;
const double = num => num * 2;

//6. Function Scope
// Scope demonstration
let globalVar = "I'm global";

function scopeTest() {
    let localVar = "I'm local";
    console.log(globalVar);   // Accessible
    console.log(localVar);    // Accessible
}

// console.log(localVar); // Would cause error - not accessible

//7. Default Parameters
// Default parameters
function greetWithDefault(name = "Guest") {
    return `Hello ${name}!`;
}