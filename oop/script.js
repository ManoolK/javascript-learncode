'use strict';

// Constructor function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const oxana = new Person('Oxana', 1975);
const matilda = new Person('Matilda', 2017);

console.log(oxana instanceof Person);

// Prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

oxana.calcAge();
console.log(oxana.__proto__); // step 3.
console.log(oxana.__proto__ === Person.prototype);

Person.prototype.species = 'Homo Sapiens';
console.log(oxana.species, matilda.species);

console.log(oxana.hasOwnProperty('firstName'));
console.log(oxana.hasOwnProperty('species'));
