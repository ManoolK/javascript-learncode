'use strict';

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// 'forEach' has no break
// movements.forEach(function (movement) {
movements.forEach(function (movement, index, array) {
  console.log(
    `Movement ${index + 1}: ${
      movement > 0 ? 'Deposited' : 'Withdrew'
    } $${Math.abs(movement)}`
  );
});

const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP']);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`); // Set has no special key or index
});

// Data transformations: map, filter, reduce
// map - new array containing the results of applying an operation on all elements
// filter - new array, test condition
// reduce - 'snowball effect'

const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
const movementsUSDarr = movements.map(mov => mov * eurToUsd);
const movementsDescr = movements.map((mov, i) => `Movement ${i + 1}: ${mov}`);
// console.log(movementsUSD);
// console.log(movementsUSDarr);
// console.log(movementsDescr);
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

const balance = movements.reduce(function (acc, mov, i, arr) {
  return acc + mov;
}, 0);
// console.log(balance);

// Max value
const maxMovement = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
// console.log(maxMovement);

// Find - return the first element
const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// Some and Every
// console.log(movements.includes(450)); // equality
// console.log(movements.some(mov => mov > 0)); // condition
// console.log(movements.every(mov => mov !== 0)); // for all elements in array

// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // 1 level deep by default
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

const objs = [
  { movement: [1, 2, 3] },
  { movement: [1, 2, 3] },
  { movement: [1, 2, 3] },
];
const overalBalance = objs
  .flatMap(acc => acc.movement) // always 1 level deep
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// sorting
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // mutates the original array and alphabetically
// not alphabetically
movements.sort((a, b) => a - b); // ascending
// console.log(movements);
movements.sort((a, b) => b - a); // descending
// console.log(movements);

// other ways of creating arrays
const x = new Array(7); // creates an array with 7 empty elements
x.fill(2, 3); // mutates the original array
// console.log(x);

const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const movUI = Array.from(document.querySelectorAll('.movements__value'), el =>
//   Number(el.textContent.replace('???', ''))
// );
// console.log(movUI);

// nice title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return titleCase;
};
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Exercises
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// // console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => (mov >= 1000 ? ++acc : acc), 0);
// // console.log(numDeposits1000);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);
