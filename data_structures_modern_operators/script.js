'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// destructuring array
const arr = [2, 3, 4];
const [x, y, z] = arr;

let [main, , secondary] = restaurant.categories; // skip the second element
// console.log(main, secondary);

// switch
[main, secondary] = [secondary, main];

// default values
const [a = 0, b = 0, c = 0] = [4, 7];
// console.log(a, b, c);

// destructing object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, tags, hours);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// switch
// ({ a, b } = obj);

// nested objects
const {
  fri: { open: opn, close: cls },
} = openingHours;
// console.log(opn, cls);

// spread operator ...
const arr2 = [7, 8, 9];
const newArr = [1, 2, ...arr2];
// console.log(newArr);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Mike' };
// console.log(newRestaurant);

// rest pattern and parameters
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
// console.log(a1, b1, others);
const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
// add(2, 3);
// add(5, 7, 9);
// const x1 = [2, 4, 6, 8, 9, 4, 1];
// add(...x1);

// short circuiting - short circuit evaluation (&& and ||)
const guests1 = restaurant.numGuests || 10;
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'pork');

// nullish coalescing operator (??) instead of falsy value
restaurant.numGuests = 0;
const guestNumCorrect = restaurant.numGuests ?? 10;
// console.log(guestNumCorrect);

// The for-of loop
// for (const item of arr2) console.log(item);
// for (const item of arr2.entries()) console.log(item); // with array iterator

// Optional chaining (?.)
// console.log(restaurant.openingHours.mon?.open); // only if mon exists
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');  // with methods

// Looping objects
let openStr = `We're open: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
// console.log(openStr);

const values = Object.values(openingHours);
// console.log(values);

// for (const [key, { open, close }] of Object.entries(openingHours)) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

// sets
const orderSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto']);
// console.log(orderSet.size);
// console.log(orderSet.has('Bread'));
orderSet.add('Chiabatta');
orderSet.delete('Risotto');
// orderSet.clear();
// for (const order of orderSet) console.log(order);

// maps
const cafe = new Map(); // input: Array of arrays, Object
cafe.set('name', 'Coffee Bean');
cafe.set(1, 'Chocolattie');
cafe
  .set('categories', ['Italian', 'Coffee'])
  .set('open', 11)
  .set('close', 20)
  .set('loyal', 1)
  .set(true, 'We are open for you')
  .set(false, 'We are closed, sorry');
// console.log(cafe.set(2, "Mike's Pastry"));

// console.log(cafe.get('name'));

const time = 21;
// console.log(cafe.get(time > cafe.get('open') && time < cafe.get('close')));
// console.log(cafe.has('open'));
// cafe.delete(2);
// cafe.clear();
// console.log(cafe.size);

const arr1 = [1, 2];
cafe.set(arr1, 'Test');
// console.log(cafe.get(arr1));

for (const [key, value] of cafe) {
  if (typeof key === 'number') {
    console.log(`??offee shops ${key}: ${value}`);
  }
}
// const answer = Number(prompt('What cafe do you like?'));
// console.log(cafe.get(answer === cafe.get('loyal')));

// Convert map to array
// const arr3 = [...cafe];

// Strings
const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7)); // before last index

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  console.log(s === 'B' || s === 'E' ? true : false);
};

// checkMiddleSeat('11B');

// console.log(airline.toLowerCase()); // toUpperCase

const loginEmail = '  Email@Gmail.Com  \n';
const normalizedEmail = loginEmail.trim().toLowerCase();
// console.log(normalizedEmail);

// replacing
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate')); // replaceAll
// another variant
// console.log(announcement.replace(/door/g, 'gate')); // /str/g - regular explression

// Booleans
const plane2 = 'A320neo';
// console.log(plane2.includes(plane));
// console.log(plane2.startsWith('A32')); // endsWith

// .split('divider')
// .join('divider')

// Padding
const msg = 'Go to gate 23!';
// console.log(msg.padStart(25, '=').padEnd('35', '='));

// Repeat
const msg2 = 'All Departures Delayed....';
// console.log(msg2.repeat(5));

// String methods practice
const flights_log =
  '_Delayed_Departure;fao89478237;txl3278946770;11:25\
+_Arrival;bru8972384877;fao89478237;11:45\
+_Delayed_Arrival;hel487903384;fao89478237;12:05\
+_Departure;fao89478237;lis4783958945;12:30';

// ???? Delayed Departure from FAO to TXL (11h25)
//               Arrival from BRU to FAO (11h45)
//   ???? Delayed Arrival from HEL to FAO (12h05)
//             Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights_log.split('+')) {
  const [status, from, to, time] = flight.split(';');
  const output = `${status.includes('Delayed') ? '????' : ''}${status.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
}
