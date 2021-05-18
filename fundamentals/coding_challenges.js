// CC #1.1, #1.2
/*
console.log('Challenge #1,2')

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
*/

// CC #1.3
/*
console.log('Challenge #3')

// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// Data bonus 1
// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;

// Data bonus 2
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;

console.log(avgDolphins, avgKoalas);

if (avgDolphins >= 100 || avgKoalas >= 100) {
    if (avgDolphins > avgKoalas) {
        console.log('Dolphins are the winner 🏆');
    } else if (avgDolphins < avgKoalas) {
        console.log('Koalas are the winner 🏆')
    } else {
        console.log('Both win the trophy!')
    }
} else {
    console.log('No team wins.')
}

// CC #1.4

const bill = 275; // 275, 40, 430
const tipPercent = bill >= 50 && bill <= 300 ? 0.15 : 0.2;

const tip = bill * tipPercent;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

// CC #2.1

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const avgDolphins = calcAverage(44, 23, 71);  // Data 1
const avgKoalas = calcAverage(65, 54, 49);  // Data 1
// const avgDolphins = calcAverage(85, 54, 41);  // Data 2
// const avgKoalas = calcAverage(23, 34, 27);  // Data 2

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
    } else {
        console.log(`No team wins.`);
    }
}

// Data 1
checkWinner(avgDolphins, avgKoalas);
// Data 2
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
