/*
A String is a sequence of characters used to
represent text.

Strings can contain:
✔ Letters
✔ Numbers
✔ Symbols
✔ Spaces

Strings are written inside:

"Double Quotes"

'Single Quotes'

`Backticks` (Template Literals)

JavaScript provides many built-in methods
to manipulate strings.

====================================================
*/


// ==================================================
// Creating Strings
// ==================================================

let company = " OpenAI ";

console.log(company);

/*
Output:
-------
 OpenAI
*/


// ==================================================
// length
// ==================================================

/*
Returns the total number of characters
(including spaces).
*/

console.log(company.length);

/*
Output:
-------
8

Explanation:
------------
The spaces before and after "OpenAI"
are also counted.
*/


// ==================================================
// trim()
// ==================================================

/*
Removes spaces from the beginning
and end of a string.
*/

console.log(company.trim());

/*
Output:
-------
OpenAI
*/


// ==================================================
// toUpperCase()
// ==================================================

/*
Converts all characters to uppercase.
*/

console.log(company.toUpperCase());

/*
Output:
-------
 OPENAI
*/


// ==================================================
// toLowerCase()
// ==================================================

/*
Converts all characters to lowercase.
*/

console.log(company.toLowerCase());

/*
Output:
-------
 openai
*/


// ==================================================
// includes()
// ==================================================

/*
Checks whether a string contains
a specific word or character.

Returns:
true or false
*/

console.log(company.includes("AI"));

/*
Output:
-------
true
*/


// ==================================================
// replace()
// ==================================================

/*
Replaces a word or character
with another value.
*/

console.log(company.replace("AI","GPT"));

/*
Output:
-------
 OpenGPT
*/


// ==================================================
// Template Literals
// ==================================================

/*
Template Literals use backticks (`).

They allow us to insert variables
inside strings using ${}.
*/

let name = "Ananta";
let age = 60;

console.log(`My name is ${name} and I am ${age} years old.`);

/*
Output:
-------
My name is Ananta and I am 60 years old.
*/