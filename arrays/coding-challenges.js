'use strict';

// CC #1

const checkDogs = function (dogsJulia, dogsKate) {
  const actualDogsJulia = dogsJulia.slice(1, -2);
  const allDogs = actualDogsJulia.concat(dogsKate);
  allDogs.forEach(function (dogAge, index) {
    const dogMsg =
      dogAge >= 3 ? `an adult, and is ${dogAge} years old` : 'still a puppy 🐶';
    console.log(`Dog number ${index + 1} is ${dogMsg}`);
  });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
