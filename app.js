//objects basic

var ledZeppelin = {
  singer: 'Robert Plant',
  guitar: 'Jimmy Page',
  bass: 'John Paul Jones',
  drums: 'Jon Bonham'
}

// The curly bracket syntax above ({}) is one way we can create a new object.
// When you create an object like this, it's called an object literal. The keys
//  in our ledZeppelin object are singer, guitar, bass, and drums. The values
//  for these keys are 'Robert Plant', 'Jimmy Page', 'John Paul Jones', and
//  'Jon Bonham'. Each key is followed by a colon (:). Each key/value pair is
// separated by a comma (,).

var ledZeppelin2 = {
  'lead singer': 'Robert Plant',
  'lead guitar': 'Jimmy Page',
}

var mammal = {
  numEyes: 2,
  warmBlooded: true,
  evolve: function() {
    console.log("I'm not mutating, I'm evolving.");
    mammal.numEyes ++;
  }
}

console.log('mammal has ' + mammal.numEyes + ' eyes');
mammal.evolve();
console.log('mammal has ' + mammal.numEyes + ' eyes');

// Note that just like functions outside of objects, an object method can
//take arguments. Here's an example:

var simpleCalculator = {
  add: function(a, b) {
    return a+b;
  }
};

simpleCalculator.add(1, 1); // => 2

// Adding key/value pairs to an object
// Once an object is defined, you can add new key/value pairs to it using
// either dot or bracket notation. Here's an example:

var myFamily = {
  lastName: 'Doe',
  mom: 'Cynthia',
  dad: 'Paul',
};

myFamily.sister = 'Lucinda';
myFamily['brother'] = 'Merle';
myFamily.sayHi = function() {
  console.log('Hello from the ' + myFamily.lastName + 's');
}

// Updating values
// Updating values in objects is just like adding them.

var foo = {
  bar: 'bizz'
};

foo.bar = 'bang';

// Deleting key/value pairs
// To delete a key/value pair from an object, use the delete command:

var foo = {
  bar: true
};
delete foo.bar;
console.log(foo.bar); // => undefined

// Self reference and this
// In the myFamily object we looked at earlier, we added a method called sayHi that made use of self reference:

var myFamily = {
  lastName: 'Doe',
  mom: 'Cynthia',
  dad: 'Paul',
  sayHi: function() {
    console.log('Hello from the ' + myFamily.lastName + 's');
  }
};

//to this:

var myFamily = {
  lastName: 'Doe',
  mom: 'Cynthia',
  dad: 'Paul',
  sayHi: function() {
    console.log('Hello from the ' + this.lastName + 's');
  }
};
