/*
Scope defines where a variable can be accessed.
A variable is only available inside the area
(scope) where it is declared.

There are two common types of scope:

1. Global Scope
2. Local (Function/Block) Scope

====================================================
*/

// ==================================================
// Global Scope
// ==================================================

/*
A variable declared outside any function
is called a Global Variable.

It can be accessed from anywhere
in the program.
*/

let global = "I'm Global";


// ==================================================
// Local Scope
// ==================================================

/*
A variable declared inside a function
is called a Local Variable.

It can only be accessed inside
that function.
*/

function demo(){

    let local = "I'm Local";

    console.log(global);   // Accessible
    console.log(local);    // Accessible

}

demo();


// console.log(local); // ❌ Error
