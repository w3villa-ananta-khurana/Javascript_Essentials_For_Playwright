/*
Operators are special symbols used to perform operations
on values and variables.

They help us perform calculations, compare values,
and make logical decisions in our programs.

Common Types of Operators:
1. Arithmetic Operators
2. Comparison Operators
3. Logical Operators

====================================================
*/

const { log } = require("node:console");

// -------------------------
// Arithmetic Operators
// -------------------------

let a = 10;
let b = 3;
let c = "abc";

// console.log(a+b+c);
console.log(typeof(c-b));
console.log(typeof(c+b));
console.log(c+b);

// console.log(a + b); // Addition
// console.log(a - b); // Subtraction
// console.log(a * b); // Multiplication
// console.log(a / b); // Division
// console.log(a % b); // Modulus (Remainder)

// -------------------------
// Comparison Operators
// -------------------------

// console.log(a > b);  // Greater Than
// console.log(a < b);  // Less Than
// console.log(a == b); // Equal To
// console.log(a != b); // Not Equal To


// // -------------------------
// // Logical Operators
// // -------------------------

// console.log(true && false); // AND
// console.log(true || false); // OR