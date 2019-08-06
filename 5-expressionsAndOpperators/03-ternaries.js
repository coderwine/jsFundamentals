/*************
 Ternaries
*************/

// a ternarie is a shorthand as a if/else state

let number = 6;

if (number > 0) {
    console.log(true);
} else {
    console.log(false);
}

/*
() ? console.log(0) : console.log();
condition / IF / action / ElSE / action
*/

(number > 0) ? console.log(true) : console.log(false);

//////////////////////////////////////

if (number == 0) {
    console.log('Number is 0');
}else if(number >= 5) {
    console.log('Number is bigger than 5');
}else if(number < 0) {
    console.log('Number is smaller than 0');
}else {
    console.log('Nope');
};

(number == 0) ? console.log('Number is 0') : (number >=5) ? console.log('Number is bigger than 5') : (number < 0) ? console.log('Number is smaller than 0') : console.log("Nope");

////////////////////////CHALLENGE

let age = 12;
/*
(age >= 25) ? console.log('You can rent a car!') : (age >= 21) ? console.log('You can drink!') : (age >= 18) ? console.log('You can vote!') : (age <= 17) ? console.log('It\'s pretty dull out there.');
*/

(age >= 25) ? console.log(`You\'re ${age}, You can rent a car!`) : (age >= 21) ? console.log(`You\'re ${age}, You can drink!`) : (age >= 18) ? console.log(`You\'re ${age}, You can vote!`) : (age <= 17) ? console.log(`You\'re ${age}, it\'s pretty dull out there.`) : console.log("NaN");
