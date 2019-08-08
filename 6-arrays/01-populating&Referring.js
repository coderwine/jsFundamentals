/***************

***************/

//Arrays are containers that hold lists of items of various dataTypes.

let list = [ 'item1', 'item2', 'item3'];
//   (1)  (2)   (3)

// 1. name of the Array, or list;
// 2. The Array is inside of theese square brackets
// 3. each item, regardless of dataType, is separated by commas.

console.log(list[1]);
// square bracket notation is a function where we can call on a particular item within an Array.

let students = ['Tony','Marshall','Rhys','ray',23,true,['Josh','Eric','Sam']];

/*
Challenge:
Go into the nested array and get 'Sam'
print out "Hello Sam, how are you today?"
*/

console.log(`Hello ${students[6][2]}, how are you today?`);  //JS reads the array is a daisy-chain aspect instead of a "box-within-a-box" concept.  It sees the first array and then it seeks the second within that.


console.log(typeof students);  //object
console.log(students instanceof Array);  //true

// Population

let food = ['Spaghetti', 'Linguini', 'Chicken Wings', 'Pizza', 'Popcorn'];
//to loop, utilize a "forOfLoop"
food.push('Tacos');  // Adds a new item to the end of array.
food.splice(1,1,'Bananas')
//   splice (start: number, deleteCount?: number):splice
food.splice(2,0,'Sweet Potato Pie');
food.pop();  //removes the last item of the array.
food.shift(); //removes the first element from the array.
food.unshift('Fruit Snacks');  //Adds a new item to the beginning of the array.
for (pasta of food) {
    console.log(pasta);
}


