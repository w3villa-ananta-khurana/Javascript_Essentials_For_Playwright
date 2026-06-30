/*
An Array is used to store multiple values in a
single variable.

Imagine you have multiple employee names.

Without Array:

let emp1 = "John";
let emp2 = "Alex";
let emp3 = "Emma";

This becomes difficult to manage.

With Array:

let employees = ["John", "Alex", "Emma"];

Now all employee names are stored together.

Array Index:
------------
Every element has a position called an Index.

Index starts from 0.

Index :   0       1       2
Value : "John" "Alex" "Emma"

====================================================
*/


// ==================================================
// Creating an Array
// ==================================================

let employees = ["John","Alex","Emma"];

console.log(employees);

/*
Output:
-------
["John", "Alex", "Emma"]
*/


// ==================================================
// Accessing Elements
// ==================================================

console.log(employees[1]);

/*
Output:
-------
Alex

Explanation:
------------
Index 0 → John
Index 1 → Alex
Index 2 → Emma
*/


// ==================================================
// push()
// ==================================================

/*
Adds a new element at the END of the array.
*/

employees.push("David");

console.log(employees);

/*
Output:
-------
["John","Alex","Emma","David"]
*/


// ==================================================
// pop()
// ==================================================

/*
Removes the LAST element from the array.
*/

employees.pop();

console.log(employees);

/*
Output:
-------
["John","Alex","Emma"]
*/


// ==================================================
// forEach()
// ==================================================

/*
Used to perform an action on every element
of an array.

It does NOT create a new array.
*/

employees.forEach((emp)=>{

    console.log(emp);

});

/*
Output:
-------
John
Alex
Emma
*/


// ==================================================
// find()
// ==================================================

/*
Returns the FIRST element
that satisfies the given condition.
*/

let numbers = [12,45,67,89];

let value = numbers.find(num => num > 50);

console.log(value);

/*
Output:
-------
67

Explanation:
------------

12 > 50 ❌
45 > 50 ❌
67 > 50 ✅

Stops searching after finding 67.
*/


// ==================================================
// map() (Advanced)
// ==================================================

/*
Creates a NEW array by transforming
every element.

Example:

let numbers = [1,2,3];

let doubled = numbers.map(num => num * 2);

Output:
[2,4,6]

Original array remains unchanged.
*/


// ==================================================
// filter() (Advanced)
// ==================================================

/*
Creates a NEW array containing only
the elements that match a condition.

Example:

let numbers = [10,15,20,25];

let even = numbers.filter(num => num % 2 == 0);

Output:
[10,20]

Original array remains unchanged.
*/