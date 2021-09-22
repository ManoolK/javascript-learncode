// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

import add, { totalPrice as price, cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 3);
console.log(price);
console.log(cart);

// Import the default export
// import add from './shoppingCart.js';
// add('pizza', 2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shoppingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shoppingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('bread', 5);
// ShoppingCart2.addToCart('apples', 3);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shoppingCost);

// import cloneDeep from '/node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state); // doesn't work as a copy!
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hei';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const oxana = new Person('Oxana');

console.log('Oxana' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polyfilling async functions
import 'regenerator-runtime/runtime';
