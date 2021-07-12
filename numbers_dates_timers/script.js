'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

// console.log(0.1 + 0.2); // because of binary representation
// console.log(+'44'); // converts string to Number

// console.log(Number.parseInt('30px', 10)); // parsing. Start with a number
// console.log(Number.parseFloat('3.5rem', 10));

// console.log(Number.isNaN(20));
// console.log(Number.isNaN(+'20px'));

// The best way of checking if a value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(20 / 0));

// console.log(8 ** (1 / 3)); // cubic root

// random integers
// console.log(Math.trunc(Math.random() * 6) + 1); // from 1 to 6
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(Math.ceil(44.3)); // round up
// console.log(Math.floor(44.9)); // round down

// Rounding decimals
// console.log((2.7).toFixed(0)); // return a string!
// console.log((2.7).toFixed(3));
// console.log(+(2.7).toFixed(3));

// Remainder operator
// console.log(5 % 2); // 5 = 2 * 2 + 1
const isEven = n => n % 2 === 0;

// big int
// console.log(2 ** 53 - 1); // the biggest number
// console.log(23454835239374587235034968n);
// console.log(BigInt(23454835));
// console.log(10000n + 10000n);
// console.log(20n > 15);
// console.log(20n === 20); // but
// console.log(20n == 20);

// Dates and times
const now = new Date();
// console.log(now);

// console.log(new Date('Jul 09 2021 13:15:39'));
// console.log(new Date('December 24, 2021'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(0));

const future = new Date('December 24, 2021');
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth()); // zero based

// console.log(future.toISOString());
// console.log(future.getTime()); // time stamp
// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

// operations with dates
// console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// console.log(calcDaysPassed(now, future));

// Intarnationalization
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric', //'2-digit',
  weekday: 'long',
};
const local = navigator.language;
// console.log(new Intl.DateTimeFormat(local, options).format(now));
// console.log(new Intl.DateTimeFormat('en-GB').format(now));

const num = 23453456765.23;

const numOptions = {
  style: 'currency', // unit, percent, currency
  unit: 'mile-per-hour',
  currency: 'EUR',
  // useGrouping: false,
};

// console.log(
//   'US:      ',
//   new Intl.NumberFormat('en-US', numOptions).format(num)
// );
// console.log(
//   'Germany: ',
//   new Intl.NumberFormat('de-DE', numOptions).format(num)
// );
// console.log(
//   'Syria:   ',
//   new Intl.NumberFormat('ar-SY', numOptions).format(num)
// );
// console.log(
//   `${local}:   `,
//   new Intl.NumberFormat(local, numOptions).format(num)
// );

// setTimeout
const ingredients = ['olives', 'peperoni'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
); // in ms

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
