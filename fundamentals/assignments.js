
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

// 7
