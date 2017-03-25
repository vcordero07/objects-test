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

// Object.keys
// When you need to iterate over the key/value pairs in a
// JavaScript object, the built-in Object.keys method is your
// friend. Pass an object to Object.keys, and you get back
// the keys of that object as an array.
var pageViewCounts = {
  homePage: 399,
  aboutPage: 400,
  termsOfService: 22
};

console.log(Object.keys(pageViewCounts));

Object.keys(pageViewCounts).forEach(function(key){
  console.log(
    'the `' + key + '` page has ' + pageViewCounts[key] +
    ' views.'
  );
})
// Console output:
// ["homePage", "aboutPage", "termsOfService"]
// "the `homePage` page has 399 views."
// "the `aboutPage` page has 400 views."
// "the `termsOfService` page has 22 views."

// Factory Functions
// Many programming problems require working with collections
// of objects that represent instances of a single concept
// or thing.
//
// For instance, we might have an array of objects representing
// individual tweets to run an analytics function on. Or we
// might have an array of objects representing airline flights
// that we need to use to create a flight path visualization map.
//
// In the following example, we use what is called a factory
// function to generate individual instances of the idea
// of an animal.

function mammal(name, numEyes) {
  return {
    name: name,
    isWarmblooded: true,
    numEyes: numEyes,
    evolve: function() {
      console.log(
        "I'm not mutating, I'm evolving.");
      this.numEyes ++;
    },
    explainYourSelf: function() {
      console.log(
        "I'm just a " + this.name + " with " +
        this.numEyes + " eye(s). Nothing to see here."
      );
    }
  };
}

var tiger = mammal('tiger', 2);
tiger.explainYourSelf();
tiger.evolve();
tiger.explainYourSelf();

var oneEyedBadger = mammal('badger', 1);
oneEyedBadger.explainYourSelf();

// Console output:
// "I'm just a tiger with 2 eye(s). Nothing to see here."
// "I'm not mutating, I'm evolving."
// "I'm just a tiger with 3 eye(s). Nothing to see here."
// "I'm just a badger with 1 eye(s). Nothing to see here."

// Looping over collections of objects
// Looping over collections of objects is not much different
// from looping over an array of numbers, for instance. For each
// object, you'll typically have a function that you want to run.
var users = [
  {
    name: 'Bernard',
    age: 29,
    birthMonth: 'April'
  },
  {
    name: 'Bernice',
    age: 14,
    birthMonth: 'December'
  },
  {
    name: 'Gerard',
    age: 88,
    birthMonth: 'June'
  },
  {
    name: 'Stella',
    age: 3,
    birthMonth: 'September'
  }
];

users.forEach(function(user) {
  console.log(
    user.name + ' will be ' + (user.age + 1) + ' in ' +
    user.birthMonth
  );
});

// Console output:
// "Bernard will be 30 in April"
// "Bernice will be 15 in December"
// "Gerard will be 89 in June"
// "Stella will be 4 in September"
