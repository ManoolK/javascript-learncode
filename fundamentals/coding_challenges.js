// CC #1, #2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

let higher;
let lower;

if (bmiMark > bmiJohn) {
    higherMan = 'Mark';
    lowerMan = 'John';
    higherBMI = bmiMark;
    lowerBMI = bmiJohn;
} else {
    higherMan = 'John';
    lowerMan = 'Mark';
    higherBMI = bmiJohn;
    lowerBMI = bmiMark;
}

console.log(`${higherMan}'s BMI (${higherBMI}) is higher than ${lowerMan}'s (${lowerBMI})!`);
