/*
Conditional statements help a program make decisions.
They execute different blocks of code depending on
whether a condition is true or false.

JavaScript provides three common ways to write conditions:

1. if...else if...else
2. switch
3. Ternary Operator

====================================================
*/

// ==================================================
// if...else if...else
// ==================================================

/*
Used when we have multiple conditions to check.

Syntax:

if(condition){
    // Executes if condition is true
}
else if(condition){
    // Executes if first condition is false
}
else{
    // Executes if none of the above conditions are true
}
*/

let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}

/*
Output:
-------
Grade B

Explanation:
------------
marks = 82

82 >= 90  -> false ❌
82 >= 75  -> true ✅

So "Grade B" is printed.
*/


// ==================================================
// switch Statement
// ==================================================

/*
Used when comparing one variable against multiple values.

It is cleaner than writing multiple else-if statements
for fixed values.

Don't forget to use 'break',
otherwise execution continues to the next case.
*/

let browser = "Chrome";

switch(browser){

    case "Chrome":
        console.log("Running Chrome");
        break;

    case "Firefox":
        console.log("Running Firefox");
        break;

    default:
        console.log("Unknown Browser");
}

/*
Output:
-------
Running Chrome

Explanation:
------------
browser = "Chrome"

It matches the first case,
so "Running Chrome" is printed.
*/


// ==================================================
// Ternary Operator
// ==================================================

/*
The ternary operator is a short form of if...else.

Syntax:

condition ? value_if_true : value_if_false;
*/

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

/*
Output:
-------
Adult

Explanation:
------------
age >= 18

20 >= 18 → true

So "Adult" is assigned to result.
*/