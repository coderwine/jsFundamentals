/***************
Switch
***************/
/*Basic Syntax:
let friend = 'Bob';

switch(){
    case : 
        break;
    case :
        break;
    case :
        break;
    default:
}
*/

let friend = 'Bob';

switch(friend){    //if "friend = True (which there is a var that exists), than..."
    case 'Autumn':
        console.log("Hey Autumn, when are we going rock wall climbing?");
        break;
    case 'Dave':
        console.log("Hey Dave, how is Cooper?");
        break;
    case 'Alecx':
        console.log("Hey Alecx, when are we playing DnD?");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but I don't know you.`);  //string interpulation
}       //The '$" w/ the "back-tics" (`) tells JS to view a var in the past.

/*
Challenge:
- Write a dessert menu;
- If the dessert is pie, console.log 'Pie, pie, me oh my!'
- If the dessert is cake, console.log 'Cake is great!'
- If the dessert is icecream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = "Pie";

switch(dessert) {  //this is declaring what is within the 'dessert' container.
    case ("Pie"):
        console.log('Pie, pie, me oh my!')
        break;
    case "Cake":
        console.log('Cake is great!')
        break;
    case "Ice Cream":
        console.log('I scream for ice cream!')
        break; 
    default:  //default is not needed in order for the switch statement to work.
    console.log("Not on the menu.")      
}

//create a case where there are multiple variables.

//Challenge 2:

let age = 15;

switch(true){  //with this, it is seeking if a value is true or not. Consider this as a Statement. 
    case (age >= 25):
        console.log(`You\'re ${age}, Yay! Go Rent a car!`);
        break;
    case (age >= 21):
        console.log(`You\'re ${age}, Yay! Go Drink!`);
        break;
    case (age >= 18):
        console.log(`You\'re ${age}, Yay! Go Vote!`);
        break;
    case (age <= 17):
        console.log(`You\'re ${age}... boring...`);
    default:
        console.log("Not a Number");
}