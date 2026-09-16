/*
A data type defines the kind of value a variable can store.

Examples:
- Text          → String
- Numbers       → Number
- True/False    → Boolean
- Empty Value   → Null
- No Value Yet  → Undefined

JavaScript is a dynamically typed language,
which means you don't need to specify the data type.
JavaScript automatically determines it based on the assigned value.

The 'typeof' operator is used to check the data type of a variable.

====================================================
*/

// String
let name = 5+"A";
// Number
let age = 24;
// Boolean
let isQA = true;
// Null (Intentional empty value)
let salary = null;
// Undefined (Value not assigned)
let city;

console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof isQA);      // boolean
console.log(typeof salary);    // object (JavaScript quirk)
console.log(typeof city);      // undefined