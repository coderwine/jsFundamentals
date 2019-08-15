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

   console.log(arr[0],arr[1],arr[2],arr[3]);
}

list();





let arr = ['This', 'is', 'really', 'cool'];

function string() {
    // console.log(arr[0],arr[1],arr[2],arr[3]);
    let string = 0
    if (string = 0, string <= arr.length, string++) {
        console.log(arr[0]);
    } else {
        console.log(arr[0]+string);
    }
}
string();