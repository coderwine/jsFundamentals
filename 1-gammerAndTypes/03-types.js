// * TYPES

//* Booleans

// Booleans can represent: true/false, yes/no, on/off

let i = true;

let j = false;

// true =/ 'true'

let on = true;
let off = false;

console.log(on, off);

// * Null
// Null = empy value; -- not 0, not undefined.  Think of an "empty box" that was created on purpose.

let empty = null;
console.log(empty);

// * Undefined
// no value assigned (not even an empty container) - could be a box that wasn't meant to be created.

let undef = undefined;
console.log(undef);

// * Number
let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let a = Number('123');
console.log(a);

// * Strings

let stringOne = "double quote";
let stringTwo = 'single quote';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = "1050" + "100";  //Concatination - chain words together.
console.log(first);
console.log(second);

console.log(typeof first);  //typeof will allow you to view what sort of operator is being used.
console.log(typeof second);

// * Objects
//  objects are containers that hold multiple container types.
// objects have key value pairs.

let car = {
    color: "red",
    tires: 4,
    extras: "A/C and Radio",
    cool: true
};

console.log(car);

// * Array
// containers that also hold lists of items.

let list = [ 'item', 'item2', 'item3'];
//   1     2   3

/*
1 - The name of the array
2 - Array is inside of these square brackets.
3 - each item, regardless of datatype, is separated by commas.
*/

let burritos = ['large', 4, true];
console.log(burritos);

console.log(typeof burritos);

//* Addition vs Concatenation

/*
* When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
* When it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator--it smashes the values together without trying to synthesize the values.
 */

 let third = 1050 +'100';
 console.log(third);  //if a string is included within a "addition" note, it will dedicate it as a string.
 console.log(typeof third); 

let firstName = "Eric ";
let lastName = "Winebrenner ";
let houseNumber = 610;
let street = " Holiday Drive ";
let city = "Fortville, ";
let state = "Indiana";
let zipcode = 46040;
console.log('Hi, my name is '+ firstName, lastName, houseNumber, street, city, state, zipcode);

/*
Strings - Properties
********************
Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */ 

 let myName = "Eric";
 console.log(myName.length);

 /* Methods
Methods are like tools that can help us manipulate our data.  .Property and .Methods() *no parenthesis for properties*
*/

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

let home = "My home is Indianapolis";
console.log(home.includes('Indianapolis'));
//mdn docs

//Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string.

let sent = 'This sentence will be split into individual parts';

console.log(sent.split(' '));

let words = sent.split(' ');
console.log(words[3]);
