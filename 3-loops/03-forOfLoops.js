// FOR OF LOOPS

//for of Loops look for iterable objects.

//Objects cannot be used within a For Of loop.  This will throw an error because object properties are not iterable.
/*
let student = {name: 'Peter', awesome: true, degree: "JavaScript", week: 1};  //object

for(let item of student){
    //console.log(item[1]);
    console.log(student[item]);
} */

let dogArray = ['husky', 'shepherd', 'corgi', 'poodle', 'pit bull', 'border collie'];

for(let dog of dogArray) {
    console.log( dog, 'goes bark');
}


