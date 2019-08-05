//Declarations:

let a = 2;

  let  b   =  1;
/* 1   2   3  4

1 - keyword
2 - var name
3 - assignment operator
4 - var value
*/

// within JS, var names ARE case sensitive.  no spaces.  Can use numbers but cannot be the first thing used.

let hello;
let Hello; // this would be a new var.
let firstName = 'Eric';

//var is considered an "old" term.  Typically use "let"
//Const.  ES6 - unchangable variables.

/*
Declarations are the LEFT SIDE of a variable
  It is simply the var x
  It is on the left side of the assignment operator (=)
Initializations are the RIGHT SIDE of a variable
  It sets the value of the variable
  It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
  (=) assignment operator is NOT the same as the equal operator (== or ===)
*/

let weather
weather = 87;

let x;
//console.log('Declaration',x);

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Initialization 1:', x);

y = 'Hello';
console.log('Both:', x, y);

// const

let today = "Great!";
const elevenFifty = "Wonderful!";
console.log(today, elevenFifty);

today = "Lovely";
console.log(today, elevenFifty);

/*
elevenFifty = 'Super';
console.log(today,elevenFifty);
*/