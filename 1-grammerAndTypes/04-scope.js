/*
? Scope
*/

// two different types of scope
/* Global & Local

- Global:  Can only access var within a global area.  "The World"
- Local: You can access variables within a global and local.  "Indianapolis"

Scope refers to where a var is defined and accessible.
 - JavaScript has function scope: each function creates a new scope.
 - Scope determines the visibility of these variables
 - Variables defined inside a functiona are not visible from outside teh function.
*/


// Var vs Let

//Block Scope

var x = 12;

function varTest() {
  var x = 33;
  if (1 == 1) {
    var x = 45;
    console.log('inside if varTest',x);
  }
  console.log('outside if varTest',x)
};

varTest();
console.log('outside varTest function', x);

var x = 12;

function letTest() {
  var x = 33;
  if (true) {
    let x = 45;
    console.log('inside letTest if function',x);
  }
  console.log('outside letTest if function',x);
}

letTest();
console.log('outside letTest function',x);

function constTest() {
  const scope = 1;
  if (true) {
    const scope = 2;
    console.log('constTest inside',scope);
  }
  console.log('constTest outside',scope);
}

constTest();
