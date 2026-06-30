/*
Loops are used to execute the same block of code
multiple times without writing it repeatedly.

Imagine you want to print numbers from 1 to 5.

Without Loop:
-------------
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

This works, but imagine printing numbers from 1 to 100.
Writing 100 console.log() statements would be inefficient.

Loops solve this problem by repeating the same code automatically.

JavaScript provides several types of loops:

1. for Loop
2. while Loop
3. do...while Loop

====================================================
*/


// ==================================================
// FOR LOOP
// ==================================================

/*
Used when you know how many times
the loop should run.

Syntax:

for(initialization; condition; increment/decrement){

    // Code to execute

}

Initialization -> Runs only once.
Condition      -> Checked before every iteration.
Increment      -> Runs after every iteration.
*/

for(let i = 1; i <= 5; i++){

    console.log(i);

}

/*
Output:
-------
1
2
3
4
5

Explanation:
------------
Iteration 1
i = 1 → 1 <= 5 ✅ → Print 1

Iteration 2
i = 2 → 2 <= 5 ✅ → Print 2

...

Iteration 6
i = 6 → 6 <= 5 ❌

Loop Stops.
*/


// ==================================================
// WHILE LOOP
// ==================================================

/*
Used when the number of iterations
is not known beforehand.

The condition is checked FIRST.
If the condition is false,
the loop will not execute even once.
*/

let i = 1;

while(i <= 5){

    console.log(i);

    i++;

}

/*
Output:
-------
1
2
3
4
5
*/


// ==================================================
// DO...WHILE LOOP
// ==================================================

/*
Similar to while loop,
but the code executes at least once.

The condition is checked AFTER
executing the code.
*/

let j = -1;

do{

    console.log(j);

    j++;

}while(j > 0);

/*
Output:
-------
-1
*/


/*
====================================================
Difference Between while and do...while
====================================================

while

Condition → Execute

If condition is false,
the loop never runs.

Example:

let x = 10;

while(x < 5){

    console.log(x);

}

Output:
(No Output)


do...while

Execute → Condition

The loop always runs at least once.

Example:

let x = 10;

do{

    console.log(x);

}while(x < 5);

Output:
10
*/