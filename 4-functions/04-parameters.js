/**************
 PARAMETERS
**************/

function hi(name) {
           //(1)    
    console.log(`Hi ${name}!`)    //`${info}` - string interpolation
}                   //(2)

hi('Danielle');
hi('Zach');
hi(1);
// (3)

//1: The parameter(s) we need to take itno the function.
//2: Using string interpolation, we can refer to the parameter we passed.
//3: This is where we define what the parameter's value will be.

function pet(animal) {
    console.log(`My puppies name is ${animal}!`)
}

pet('Mo');
pet('Georgie');

/*
CHALLENGE:
Write a function that takes two parameters:
One parameter is for a first name,
The other parameter is for a last name;
Haave them come together in a variable inside the function.
console.log "Hello, my name is <YOUR NAME>"
call function */

function name(fName, lName){
    let wName = fName + ' ' + lName;
    console.log(`Hello, my name is ${wName}.`);
}

name('Eric', 'Winebrenner');

//What's another way I can do this?

let x = 'Anna';
let y = 'Winebrenner';
let z = `${x} ${y}`;

function name(z){
    console.log(`My name is ${z}.`)
}

name(z);