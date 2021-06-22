'use strict';

// passing by Value!

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};

createBooking('LH123');
// console.log(bookings);

const flight = 'LH123';
const oxana = {
  name: 'Oxana',
  passport: 234678128,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mrs. ' + passenger.name;
  if (passenger.passport === 234678128) {
    alert('Checked in!');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, oxana);
// console.log(flight);
// console.log(oxana);

// first-class functions
// treated as values

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// higher-order functions
// receives another functions and returns a new function or both

const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// greet('Hey')('Oxana');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// greetArrow('Hello')('Kate');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  },
};

const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// lufthansa.book(239, 'Oxana ManoolK');
// lufthansa.book(635, 'John Doe');

// book.call(eurowings, 23, 'Srah Williams');
// console.log(eurowings);

// Apply method (rarely used nowadays)
const flightData = [583, 'George Cooper'];
// book.apply(eurowings, flightData);

// book.call(eurowings, ...flightData);

// bind method - for manualy set the this word. Returns a new function.
const bookEW = book.bind(eurowings);
const bookEW23 = book.bind(eurowings, 23); // preset flightNum

// bookEW(23, 'Steven Williams');
// bookEW23('Martha Williams');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

// problem with this with event listener
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

const addTax2 = function(rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTax2(0.2);
// console.log(addVAT2(100));
