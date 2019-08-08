/**********
ELSE
***********/

let weather = 75;

if (weather < 70) {
    console.log("Wear a jacket.");
} else {
    console.log('No jacket needed');
};


let door = "closes";

if (door != 'open') {
    console.log("Good Car Otherwise...")
};


// CHALLENGE
/*
let name = 'Eric';

if (name === 'Eric'){
    console.log('Hello, my name is ', name);
}else{
    console.log('Hello, is your name', name,'?');
};
*/

// CHALLENGE 2
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


//Bronze: 

let name = 'AUTuMN';

/* - My Attempt
let firstLetter = name.charAt(0);
console.log(firstLetter);

if (firstLetter == name.uppercase){
    console.log(firstLetter);
}else{
    console.log("Hey, its not written correctly!");
} */

//charAt(0) -- method
//[0] -- squarebracket notation

if(name.charAt(0) === name.charAt(0).toUpperCase()){
    console.log(name);
} else {
    console.log("Hey, this isn\'t written correctly.");
};

//Silver:
if(name.charAt(0) === name.charAt(0).toUpperCase()){
    console.log(name.charAt(0));
} else {
    console.log(name.slice(1).toLowerCase());
};

//Gold:
if(name.charAt(0) === name.charAt(0).toUpperCase()){
    firstLetter = name.charAt(0) + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters);
};
