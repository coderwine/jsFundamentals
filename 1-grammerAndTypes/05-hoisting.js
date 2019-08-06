//Hoisting
 
// var needs to be defined prior to a console.log
//JS reads through code twice, remembering left hand side of var and functions.
// Hoisting does not exist.  It is an illusion.  Code doesn't actually get moved.

console.log(scissors);

scissors = 'blue';

console.log(scissors);

var scissors;

//-------------

b();
console.log(a);

function b(){
    console.log('this is all hoisted');
}

var a = "this is not hoisted";

//functions do get hoisted and var do not.
/*
First pass: Stores our variable declarations (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know it's there), but does not assign them their values. Anything that needs to be hoisted is hoisted.
Second pass: Assigns the values to our variables and executes any hoisted source code.
*/