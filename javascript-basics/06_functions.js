/*
A function is a reusable block of code that performs
a specific task.

Instead of writing the same code multiple times,
we write it once inside a function and call it
whenever needed.

Think of a function as a machine:

Input (Parameters) → Process → Output (Return Value)

Benefits of Functions:
✔ Reusability
✔ Cleaner Code
✔ Easier Maintenance
✔ Better Readability

====================================================
*/


// ==================================================
// Function Declaration
// ==================================================

/*
Syntax:

function functionName(parameters){

    // Code

}
*/

function greet(name){
    console.log("Hello " + name);
}

// Calling the function
greet("Ananta");

/*
Output:
-------
Hello Ananta

Explanation:
------------
"name" is called a Parameter.

"Ananta" is called an Argument.

Parameter -> Receives the value.
Argument  -> Sends the value.
*/


// ==================================================
// Return Statement
// ==================================================

/*
The return keyword sends a value back
to the place where the function was called.

Without return,
a function only performs an action.

With return,
it gives us a result that we can store or use later.
*/

function add(a, b){
    return a + b;
}

let result = add(10,20);
console.log(result);

/*
Output:
-------
30

Explanation:
------------
add(10,20)

a = 10
b = 20

return 30

Result is stored in "result".
*/


// ==================================================
// Arrow Function
// ==================================================

/*
Arrow Functions are a shorter way
to write functions.

Syntax:

const functionName = (parameters) => {

    // Code

}
*/

const multiply = (a,b)=> a*b;

console.log(multiply(5,4));

/*
Output:
-------
20
*/


/*
====================================================
Function Types Learned
====================================================

1. Function Declaration

function greet(){}

-------------------------

2. Function with Return

function add(){
    return value;
}
-------------------------

3. Arrow Function
const greet = () => {}
*/