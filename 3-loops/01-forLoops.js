/* ***********
For Loops
*************/

for(let i = 0; i < 10; i++){
    console.log(i);
}
/*
NOTE: There is a danger of infinite loops. There are three main parts to a loop. 
1) The 'for' keyword
2) A variable initialization and declaration. 
3) The condition that needs to be met in order to end the loop.
4) This is where the number is going to update. This one is saying each time this loop runs, update i by one. 
5) Inside of the code block for the loop, refers to the current value of the variable for that loop 
*/
//  (initialization ; stopping condition; iteration statement)

//takes 3 expressions. a variable declaration. an expression to be evaluated before each iteration. and an expression to be evaluated at the end of each iteration.

for (let i = 0; i < 10; i++) {
    //(1)     (2)    (3)     (4)
      console.log(i); // 0 1 2 3 4 5 6 7 8 9
    //           (5)
    }


//CHALLENGE:  count to 20 by 2
for(let i = 0; i <= 20; i += 2){
    console.log(i);
}

//CHALLENGE:  count from 10 by 0
for(let i = 10; i >= 0; i--){
    console.log(i);
}

//CHALLENGE: count from 0, going down by 2 to -24
for(let i = 0; i >= -24; i -= 2){
    console.log(i)
}

//CHALLENGE: go through a name and display each letter individually
let name = 'Eric';          //declaring a name sets a guide

for(let i =  0; i < name.length; i++){  //setting a condition, compare against that guide, increase that comparison + 1  
    console.log(name[i]);  //square brackets after the name allows it to print the individual letters (objects) within that container.
}

//CHALLENGE: add up all numbers from 1-50 (should = 1275)

let sum = 0;        //declare a start guide.

for(let i = 1; i <= 50; i++){  //create a new loop that includes the varied loop (this results in 50 outcomes and reapplies that to the guide).
    sum += i;  //50 outcomes with a new sum.
}

console.log(sum);  //result comes as (0 + 1 = 1 + 2 = 2 + 3 = 3 + 5... etc).

