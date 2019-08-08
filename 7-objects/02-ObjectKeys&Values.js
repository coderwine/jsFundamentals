// Object.keys() and Object.values()

// Object.keys() is  a method that returns an array of a given objects own property names.

let spaceJam = {
    toonSquad: { 
      human:  'Michael Jordan',  //(key) human: (value) 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }
  

//   console.log(Object.keys(spaceJam.toonSquad));
//   console.log(Object.keys(spaceJam.toonSquad.duck));
  
//   console.log(Object.values(spaceJam.toonSquad));  

let array = Object.values(spaceJam.toonSquad);
console.log(array[3]);  //pulling a specific item from the above object.
  
  