/*
LITERALS
*/

/* JS defines two types of values:
1: Fixed values are called LITERALS.
    - include: arrays, numbers, booleans, objects, and strings.
2: Variable values are called VARIABLES.
*/

//EX: Literal

let days = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday']; //array
console.log(days.toString());

console.log(days.length);  //counts how many items are in the array.

let tired = true; //boolean

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
};  //object literal - these objects are not being pulled froma  database.

console.log(soup.b);

let car = "Honda"; // string 

let decimal = 10.2; // number