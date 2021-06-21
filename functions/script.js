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

greet('Hey')('Oxana');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hello')('Kate');
