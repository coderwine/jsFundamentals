//  SQUARE BRACKET NOTATION

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    "water": true,
    sun: true,
    size: 10
  };

  // Square bracket notation can help us be able to find a value in an object. This way can be handy if we need to set a key to a variable and then use that variable to parse through an object
// It works because of the fact that all property keys( before the colon) are strings.

console.log(garden.vegetable);  //standard DOT NOTATION

let x = 'vegetable';
//console.log(garden.x, garden[x]);  //garden.x doesn't work because 'x' is not a key.
                                   //garden[x] works because 'x' represents the word 'vegetable', which does exist.

let baking = {};
baking['zucchini'] = 'better make some bread!';  // We can also set a key value pair with square brackets.

// console.log(baking);
// console.log(baking.garden.vegetable);  // => 'zucchini'
console.log(baking[garden[x]]);

//////////////////////////////////////////////////////////////////////////////

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    "water": true,
    sun: true,
    size: 10
  };

  let key = 'water';

//   console.log(Object.keys(garden));
  Object.keys(garden).forEach(g => {   //'g' represents each iteration of the forEach loop.
      //console.log(g);
      if(key === g) {
          console.log(garden[key]);
      }
  })