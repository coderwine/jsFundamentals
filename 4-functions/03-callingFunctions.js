/**************
 CALLING FUNCTION
**************/

function hi() {
    console.log('Hi!');
}

hi();
//This is how we call, or 'invoke' our function
// It's the START button on a machine.

/*
CHALLENGE
Create a function that, when invoked, lists out the numbers 1-10
*/

function count() {
    for(let i = 0; i <=10; i++){
        console.log(i);
    };
}

count();

// How can I create the same result differently?  *****

/*
CHALLENGE
Given the array, create a function that lists out the values individually.
*/

let arr = ['This', 'is', 'really', 'cool'];
//console.log(arr);

function list(){
    for(let word in arr){
        console.log(arr[word]);
    }

    for (word of arr) {
        console.log(word);
    }
}

list();

