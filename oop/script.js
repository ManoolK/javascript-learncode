'use strict';

//////////////////////////////////////////////
// Constructor functions

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

// Inheritance
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science.');
// mike.introduce();
// mike.calcAge();

//////////////////////////////////////////////
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

// Inheritance
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica.age);

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();

//////////////////////////////////////////////
// Object.create

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

// Inheritance
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();

//////////////////////////////////////////////
// Examples

class Account {
  // Public fields
  locale = navigator.language;
  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
    }
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
Account.helper();
