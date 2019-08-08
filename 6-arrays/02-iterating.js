// Iterating

//forEach() method
//executes a provided function once for each array element.

//forEach() has three arguments: currentValue, the index, and the entire array.
//  currentValue = the current element being processed in the array.
//  index = the index of the current element being processed.
//  array = the array the forEach method was called upon.

let food = ['Spaghetti', 'Linguini', 'Chicken Wings', 'Pizza', 'Popcorn'];

//food.forEach(f => {console.log(f)}); 
// (1)        (2)               (3)
// 1:  Array
// 2:  currentValue
// 3:  index   

//food.forEach((f, number) => {console.log(f, number)});

food.forEach((f, number, array) => {console.log(f,number,array)});
            
/*  CHALLENGE
* Create a list (with an array) of movies
* Add another moview at the end.
* and replace one of your existing movies with another one.
* use .forEach() to list your movies.  */

let movies = ['Batman','Batman Returns','Batman Forever','Batman and Robin'];

movies.push('The Dark Knight'); 
movies.splice(3,1,"Batman Begins");

movies.forEach(b => {
    console.log(b);    
});

//call back function is a "function as a parameter"
// (function => {action})
// (b => {console.log(b);});