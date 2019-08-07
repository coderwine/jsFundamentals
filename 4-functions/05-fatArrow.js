/*****************
 FAT ARROW FUNCTIONS
 ****************/

let hi = () => {
//    (1)   (2)
    console.log('hello!')
}

hi();

// -> is NOT the same as =>

// 1: We need to set the fat arrow function to a variable
// 2: We use the 'fat arrow' to signify it's a function.

//Block Body
// ****************
let hi = () => {
    //    (1)   (2)
        console.log('hello!')
    }

// Concise Body   
// ****************
let hi = () => console.log('hi');

let apples = (x) => {
    console.log(`There are ${x} apples in the basket`);
}
apples(25);

let apples = x => console.log(`There are ${x} apples in the basket`);  //only works if there is only 1 parameter.
apples(10);

// More than one parameter will require parenthesis
// Return (if one-line fat arrow function) is implied.

//Fat Arrow functions setup should be reflective on one line.

let func = () => console.log('hi');  // this works

/*
let func = ()
    => console.log('hi');  //will NOT work */