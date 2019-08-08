// Length and others

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);  //counts the number of items starting with 1.

let colors = ['blue','green','yellow','red','orange','purple'];
console.log(colors.length);
console.log(colors.toString());  //coverts the count to an actual string.

console.log(typeof colors.toString());

/*CHALLENGE
* First check if you are working with an array
* Then flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
* Using a method only, print the values of the newly arranged array. */

let numbers = [1,2,3,4,5];

//console.log(typeof arr);  //prints out "object"
//console.log(Array.isArray(arr));    //true
//console.log(arr.reverse());
//console.log(arr instanceof Array);

//if(numbers instanceof Array === true) {
  //  Let revNumbers = numbers.reverse();
  //  revNumbers.forEach(number => console.log(number);
//};  //Need to fix