// Fundamentals. Part 1
/*
const country = "Russia";
const continent = "Eurasia";
let russianPopulation = 144.4;
const isIsland = false;
let language;
let finlandPopulation = 6;
const avgPopulation = 33;

console.log(country + " is in " + continent + " has population of " + russianPopulation + " millions.");

console.log(typeof isIsland);
console.log(typeof russianPopulation);
console.log(typeof country);
console.log(typeof language);

language = 'russian';

let halfPopulation = russianPopulation / 2;
console.log(`Half population ${halfPopulation}`);
console.log(`2. ${russianPopulation + 1}`);
console.log(`3. ${russianPopulation > finlandPopulation}`);
console.log(`4. ${russianPopulation < avgPopulation}`);

const description = `${country} is in ${continent}, and its ${russianPopulation} million pepole speak ${language}.`;

console.log(description);

if (russianPopulation > avgPopulation) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${avgPopulation - russianPopulation} million below average.`);
}

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border.');
} else {
    console.log('No borders')
}

const speaksEnglish = language === "english";
if (speaksEnglish && (russianPopulation <= 50) && !isIsland) {
    console.log(`You should live in ${country} :)`)
} else {
    console.log(`${country} does not meet your criteria :(`)
}

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

console.log(`${country} population is ${russianPopulation > 33 ? 'above' : 'below'} average.`);

// Fundamentals. Part 2

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const rusDesc = describeCountry('Russia', 144.4, 'Moscow');
console.log(rusDesc);

const finDesc = describeCountry('Finland', 6, 'Helsinki');
console.log(finDesc);

const usaDesc = describeCountry('USA', 332.9, 'Washington');
console.log(usaDesc);
*/
// Function declaration
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}
/*
// Function expression
const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

// Arrow function
const percentageOfWorld3 = population => population / 7900 * 100;

console.log(`China has 1441 million people, so it's about ${percentageOfWorld1(1441)} of the world population.`);

console.log(`China has 1441 million people, so it's about ${percentageOfWorld2(1441)} of the world population.`);

console.log(`China has 1441 million people, so it's about ${percentageOfWorld3(1441)} of the world population.`);


function describePopulation(country, population) {
    const percent = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percent} of the world.`;
}

console.log(describePopulation('China', 1441));
*/
const populations = [144.4, 6, 332.9, 1441];
// console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);

const neighbours = ['Finland', 'Belarus', 'Ukrain', 'China', 'USA'];

neighbours.push('Utopia');
neighbours.pop();
if (!neighbours.includes('Germany')) {
    // console.log('Probably not a central Europian country :D');
}
neighbours[neighbours.indexOf('China')] = "People's Republic of China";
// console.log(neighbours);

const myCountry = {
    country: 'Russia',
    capital: 'Moscow',
    language: 'russian',
    population: 144.4,
    neighbours: neighbours,

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countrues and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours = 0 ? true : false;
        return this.isIsland;
    }
}

myCountry.describe();

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
console.log(`Is ${myCountry.country} an island? ${myCountry.checkIsland()}`);

// 16
