/*EXPRESSIONS
**************/

function hi() {               //Declaration - this versioning can be 'hoisted'
   (1)    (2) (3)            
    console.log('Hi!');               
}           

// vs

let hey = function hi() {     //Expression - this versioning wouldn't be 'hoisted'
    console.log('Hi!');
}

//The variable 'hey' is now representative of the function 'hi()'

// ANONYMOUS FUNCTION

let hi = function () {   //wouldn't work unless the var name was tied to it.
    console.log('HEY!');
}