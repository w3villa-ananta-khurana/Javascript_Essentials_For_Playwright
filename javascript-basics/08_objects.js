/*
An object in JavaScript is a standalone containers/data structure
that stores data as a collection of key-value pairs. 
Unlike primitive data types (like numbers or strings) 
which hold a single value, an object groups related data and behavior together.

Think of an object as a person's profile.

Instead of storing each detail separately:

let name = "Ananta";
let age = 60;
let role = "QA";

We can group all related information together
inside one object.

Each piece of information is called a Property.

Syntax:

{
    key : value
}

====================================================
*/


// ==================================================
// Creating an Object
// ==================================================

let employee = {

    name: "Ananta",
    age: 60,
    role: "QA"

};

console.log(employee);

/*
Output:
-------
{
    name: 'Ananta',
    age: 60,
    role: 'QA'
}
*/


// ==================================================
// Accessing Object Properties
// ==================================================

console.log(employee.name);
console.log(employee.age);

/*
Output:
-------
Ananta
60

Explanation:
------------
employee.name → Accesses the name property

employee.age → Accesses the age property
*/


// ==================================================
// Adding a New Property
// ==================================================

employee.company = "ABC";

console.log(employee);

/*
Output:
-------
{
    name: 'Ananta',
    age: 60,
    role: 'QA',
    company: 'ABC'
}

Explanation:
------------
Objects are dynamic.

We can add new properties whenever needed.
*/


// ==================================================
// Nested Objects
// ==================================================

/*
An object can contain another object.

This is called a Nested Object.
*/

let student = {
    name: "Rahul",
    address: {
        city: "Delhi",
        pin: 110001
    }
};

console.log(student.address.city);

/*
Output:
-------
Delhi

Explanation:
------------
student

↓

address

↓

city

Access using:

student.address.city
*/


/*
====================================================
Real-Life Example
====================================================

Employee Profile

{

    name: "John",

    age: 30,

    department: "QA",

    company: "ABC Pvt Ltd"

}

Every property belongs to the same employee,
so storing them inside an object makes the
data organized.
*/
