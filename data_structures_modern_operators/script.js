'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
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
const { name: restaurantName, openingHours, categories: tags } = restaurant;
// console.log(restaurantName, tags, openingHours);

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
