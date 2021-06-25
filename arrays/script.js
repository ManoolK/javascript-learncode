'use strict';

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// forEach has no break
// movements.forEach(function (movement) {
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: Deposited $${movement}`);
  } else {
    console.log(`Movement ${index + 1}: Withdrew $${Math.abs(movement)}`);
  }
});

const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP']);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`); // Set has no special key or index
});
