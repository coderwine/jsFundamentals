// FOR IN LOOPS
/*
Used for iterating over ENUMERABLE values in an object. This is great for debugging purposes so we can easily check the properties of an object. Although we are 'iterating' over the enumerable properties of an object, objects themselves aren't iterable.
​
// Iterables are data structures which allow us to access its elements in a sequential manner, and we can't do that with objects like we can an array.
*/


//Object For In Loop
let student = {name: 'Peter', awesome: true, degree: "JavaScript", week: 1};  //object

for(let item in student){
    // console.log(item[1]);
    console.log(student[item]);
}


//Array For In Loop
let catArray =  ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat in catArray){
    //console.log(cat);  //pulls in the index of the array (there are 5 so, this would result in 5)
    console.log(catArray[cat]);  //this views the array and views the content within the array.
}


//CHALLENGE: Write a for-in Loop that capitalizes the first letter of your name.

let name = 'erIc';
let capName;

for(let x in name) {  // x in this will search through the index of the container it is assigned.  With a string, it see the number of characters (i.e. 4 in this context).
    if(x == 0){
        capName = name[x].toUpperCase();  //because the index is 0, it will print as a uppercase.
    } else {
        capName += name[x].toLowerCase(); //when the index is beyond 0, it will print as lowercase.
    }
}

console.log(capName);  //the For In loop creates a new index of the name.

let dog = 'dOg';
let act;

for (let prop in dog){
    if (prop === 0) {
        act = dog[prop].toUpperCase
    } else {
        act += dog[prop].toLowerCase
    };
    // (prop === 0) ? console.log(prop.toUpperCase)
    //     : console.log(prop.toLowerCase);
};
console.log(act);
