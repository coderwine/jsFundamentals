/*************
RETURN
*************/

let hi = () => {
    return 'hi';
//   (1)
};

let newName = hi();
//    (2)      (3)

console.log(newName);

/*
1.  The keyword that brings our data out of our funciton
2.  We need a new variable to hold the value of the return
3.  When called, the function becomes the value of the return.

The console log is great for testing but not great for users. */

let capitalizedName = (name) => {
    let capName = '';
    for (let letter in name) {
        if(letter == 0){
            capName += name[letter].toUpperCase();
        }else {
            capName += name[letter].toLowerCase();
        }
    }
    return capName;
}

// console.log(capName);  error, not defined.

const myName = capitalizedName('erIC');
console.log(myName +', how are you doing?');

/*
Challenge:
Make a tip calculator using a function
Have it RETURN the value
Capture that returned value in a VARIABLE
Print that variable
*/
subTotal = 50;
//tipPercent = .25;
//grandTotal = ;

let tipCalc = (x) => {
    let tipPercent = .3;
    let tip = x *= tipPercent;
    let finalAmount = x + tip;
    return finalAmount;
}

const bill = tipCalc(subTotal);
console.log(`Because the bill is ${subTotal}, The grand total should be ${bill}.`);
