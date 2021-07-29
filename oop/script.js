'use strict';

// Constructor function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const oxana = new Person('Oxana', 1975);
const matilda = new Person('Matilda', 2017);

// console.log(oxana instanceof Person);

// Prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// oxana.calcAge();
// console.log(oxana.__proto__); // step 3.
// console.log(oxana.__proto__ === Person.prototype);

Person.prototype.species = 'Homo Sapiens';
// console.log(oxana.species, matilda.species);

// console.log(oxana.hasOwnProperty('firstName'));
// console.log(oxana.hasOwnProperty('species'));

// add static method
Person.hey = function () {
  console.log('Hey there!');
};

// ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there!');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica.age);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init('Steven', 1979);
