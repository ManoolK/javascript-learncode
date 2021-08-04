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
  university = 'University of Michigan'; // Public field
  #studyHours = 0; // Private fields
  #course;
  static numSubjects = 10; // Static public field (available only on the class)

  // Constructor method
  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear); // Call to Parent class. Before *this*!
    this.startYear = startYear; // Instance property
    this.#course = course; // Redefining private field
  }

  // Public method
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  study(h) {
    this.#makeCoffe(); // Referencing private field and method
    this.#studyHours += h;
  }

  // Private method
  #makeCoffe() {
    return 'Here is a coffe for you';
  }

  // Getter method
  get testScore() {
    return this._testScore;
  }

  // Setter method
  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }

  // Static method
  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects.`);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica.age);

// Creating new onject with *new* operator
const martha = new StudentCl('Martha Jones', 2000, 2017, 'Computer Science');
// martha.introduce();

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
// jay.introduce();

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

    // console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // for chaining methods
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      return this;
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

// console.log(acc1);
// Account.helper();

// Chaining methods
acc1.withdraw(200).deposit(50).requestLoan(25000).withdraw(5000);
// console.log(acc1.getMovements());
