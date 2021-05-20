/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";
console.log(firstName);


let jsIsFun = true;
console.log(typeof jsIsFun);

let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Smith';

console.log(lastName);

const firstName = 'Oxana';
const job = 'developer';
const birthYear = 1975;
const year = 2032;

const repMe = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(repMe);

console.log(`String with
multiple
lines`);

// type conversion
console.log(Number('1975'));
console.log(Number('Oxana'));
console.log(typeof NaN);
console.log(String(45), 45);

// type coercion
console.log('I am ' + 45 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' + '10' - 3);  // ! first action is concatenation +
console.log('10' - '4' - '3' - 2 + '5');  // !
console.log('23' > '18');
console.log(5 + 6 + '4' + 9 - 4 - 2);  // tricky

// 5 falsy values: 0, '', undefined, null, NaN

// === or !== - strict equality operators, whithout coercions;
// == or != - loose equality operators, with coercion.

// && - AND; || - OR

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);
*/

'use strict';
/**/
// arrays
const friends = ['Elena', 'Anna', 'Rita'];
console.log(friends[0]);

const y = new Array(1991, 1984, 2008);

console.log(friends.length);
console.log(y[y.length - 1]);

friends.push('Natasha');  // appends element to the end. returns the length of the array.
friends.unshift('Luba');  // adds element to the beginning.
friends.pop(); // removes last element. returns the removed element
friends.shift();  // removes the first element.

console.log(`Index of 'Anna' in array is ${friends.indexOf('Anna')}`);
console.log(`Is 'Anna' in my friends? ${friends.includes('Anna')}`);

const oxana = {
    firstName: 'Oxana',
    birthYear: 1975,
    friends: friends,
    job: 'developer',
    hasDriverLicense: true,

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
    },
}

console.log(`${oxana.firstName} has ${oxana.friends.length} friends, and her best friend is called ${oxana.friends[0]}.`);

console.log(oxana.calcAge());
console.log(oxana.age);

console.log(oxana.getSummary());