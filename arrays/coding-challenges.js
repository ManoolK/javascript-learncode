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
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// CC #2
const calcAverageHumanAgeOld = function (ages) {
  const dogHumanAges = ages.map(function (dogAge) {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  const adultDogs = dogHumanAges.filter(age => age >= 18);
  const avgAge =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  return avgAge;
};
const avgAge1 = calcAverageHumanAgeOld([5, 2, 4, 1, 15, 8, 3]);
const avgAge2 = calcAverageHumanAgeOld([16, 6, 10, 5, 6, 1, 4]);
// console.log(avgAge, avgAge2);

// CC #3
const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

const avgAge3 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avgAge4 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avgAge3, avgAge4);

// CC #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(function (dog) {
  dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
});
console.log(dogs);

const checkEating = function (current, recommended) {
  if (current < recommended * 0.9) return 'too low';
  else if (current > recommended * 1.1) return 'too much';
  else return 'okay';
};
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${checkEating(
    sarahDog.curFood,
    sarahDog.recommendedFood
  )}.`
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

const checkEatingOkey = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkey));
console.log(dogs.filter(checkEatingOkey));

const sortedDogs = Array.from(dogs).sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);
console.log(sortedDogs);
