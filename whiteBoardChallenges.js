/* 
Challenge: 
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode

Set each variable to its respective type.
console.log your whole address (with the space between variable).
*/

let fName = "Eric";
let lName = "Winebrenner";
let houseNumber = 610;
let street = 'Holiday Drive';

console.log(fName + " " + lName + " " + houseNumber + street);  //Concat.
console.log(`My name is ${fName} ${lName}, and my house is at ${houseNumber}${street}`);  //String Interp.


/*
? Challenge: 
**********
? Bronze: 
Write an if else statement that checks your name; 
If it is your name, console log '<name>'
If the name does not match, console.log 'Hello, what is your name?'
? Silver:
If It is your name, console log 'Hello, my name is <name>'
? Gold:
If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let name = 'Eric';
let x = 'Eric';

(x === name) ? console.log(`Hello, my name is ${name}.`)
    : console.log(`Hello, ${x}, we were looking for ${name}.`);

if(x === name) {
    console.log(`Hi, ${name}`);
}else {
    console.log(`${x}, we're looking for ${name}`);
}
 

// *******************************************************************************

/*
? Challenge: 
**********
? Use this string - let name = 'aUTuMN';
? Bronze: 
Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string; 
If it is not console.log 'hey its not written correctly' 
? Silver:
If the first letter of a string is uppercase, only console.log that letter
if it is not, console.log the rest of the string Without the first letter, and change them to lowercase 
? Gold: 
If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let season = 'aUTuMn';

// (season.charAt(0) != season.charAt(0).toUpperCase) ? console.log("Not correct");

if (season.charAt(0) != season.charAt(0).toUpperCase()) {
    console.log("Not Correct");
}

(season.charAt(0) == season.charAt(0).toUpperCase()) ? console.log(season.charAt(0))
    : console.log(season.slice(1).toLowerCase());

if (season.charAt(0) == season.charAt(0).toUpperCase()) {
    firstLetter = season.charAt(0).toUpperCase();
    
    console.log(season.charAt(0) + otherLetters);
} else {
    otherLetters = season.charAt(0).toUpperCase() + season.slice(1).toLowerCase();
    console.log(otherLetters);
}


function hi() {
    console.log('hi');
}
hi();

let hello = () => {console.log('heya')};
hello();

let helloAgain = (x) => console.log(`${x} Hellos?`);
helloAgain('More')

// *******************************************************************************
/* 
? Challenge:
? Look up the format for an Else If statement
? Set a variable age and give it an age of your choice
? Set an else if statement that convey the following:
? If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
? If the age is at least 18, console.log 'Yay! You can vote!'
? If the age is at least 21, console.log 'Yay! You can drink!'
? If the age is at least 25, console.log 'Yay! You can rent a car!'
*/

let z = 30;

let age = () => {
    if (z >= 25) {
        console.log(`${z} CAR!`);
    } else {
        if (z >= 21) {
            console.log(`${z} DRINK!`);
        }else {
            if (z >= 18) {
                console.log(`${z} VOTE!`);
            }else {
                console.log(`${z} too Young for Fun!`);
            }
        }
    }
}
age(z);

// *******************************************************************************
/*
Challenge:
Write a dessert menu;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let yum = 'ice cream';

switch(yum) {
    case 'pie':
        console.log(`${yum} it's good pie.`);
        break;
    case 'cake':
        console.log(`${yum} it is not pie`);
        break;
    default: console.log(`${yum} is unPie and unCake`);
}


// *******************************************************************************
/*
Try to rewrite the age challenge from earlier with a switch
*/
// *******************************************************************************
/* 
Challenge: Write a ternary that does the same thing as the age challenge
*/
// *******************************************************************************
/*
Challenge:
Create a variable named FB that takes numbers
Write a conditional that: 
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
Try this challenge with the 3 different conditionals we have seen.
*/


// *******************************************************************************
/*
Challenge: 
Using a for loop, count from 0, going down by 2's to -24
*/
// *******************************************************************************
/*
Challenge: 
Using a for loop, go through a name and display each letter individually
*/
// *******************************************************************************
/*
Challenge: 
Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
*/
// *******************************************************************************
/*
Challenge:
Write a for in loop that capitalizes the first letter of a student's name
*/

let oop = "aNNa";
let capName;

for (let a in oop){
    if(a == 0) {
        capName = oop[a].toUpperCase();
    } else {
        capName += oop[a].toLowerCase();
    }
}

console.log(capName);
// *******************************************************************************
/*
Challenge:
Create a function that, when invoked, lists out the numbers 1-10
*/
// *******************************************************************************
/*
Challenge:
Given the array, create a function that lists out the values individually. 
let arr = ['This', 'is', 'really', 'cool'];
*/


// *******************************************************************************
/*
Challenge:
Write a function that takes two parameters:
One parameter is for a first name,
The other paramter is for a last name;
Have them come together in a variable inside the function.
console.log 'Hello, my name is <YOUR NAME>'
Call your function 
*/
// *******************************************************************************
/*
Challenge:
Make a tip calculator using a function
Have it RETURN the value 
Capture that returned value in a VARIABLE
Print that variable
*/
// *******************************************************************************
/*
Challenge:
Write a for loop running between the numbers 0 - 100
For multiples of 3, instead of the number, console.log "Fizz"
For multiples of 5 console.log "Buzz";
For numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
For any other number, console.log the value
*/
// *******************************************************************************
/*
Challenge (Go look at MDN docs to remind you):
Create a list (with an array) of movies
Add another movie at the end 
And replace one of your existing movies with another one 
Use .forEach() to list your movies
*/
// *******************************************************************************
/*
Challenge:
First check if you are working with an array
Then flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
Using a method only, print the values of the newly arranged array
*/
// *******************************************************************************
//For More exercises on dot notation and square bracket notation, I recommend going over the repl. challenge that addressed objects and arrays again..
// *******************************************************************************
/*
Challenge (Arrays):
Color List:
Create a function that can take in arrays(2).
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)
In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.
Not to make it too hard on yourself, you can stop the count at ten
*/