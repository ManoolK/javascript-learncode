// a football betting app

'use strict';

// data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// app
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(`Goals: ${players.length}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// The team is more likely to win.
console.log(
  'The most possible winning team is',
  (team1 < team2 && game.team1) || (team2 < team1 && game.team2)
);

// CC #2
for (const item of game.scored.entries()) {
  console.log(`Goal ${item[0] + 1}: ${item[1]}`);
}

let sumOdds = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  sumOdds += odd;
}
console.log(`The average odd is ${sumOdds / odds.length}.`);

for (const [key, odd] of Object.entries(game.odds)) {
  const teamStr = game[key] ? `victory ${game[key]}` : 'draw';
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const scores = {};
for (const item of game.scored) {
  scores[item] = 1 + (scores[item] || 0);
}
// console.log(scores);

// CC #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
// console.log(gameEvents);

const times = [...gameEvents.keys()];
console.log(
  `An event happened, on average, every ${
    times.pop() / gameEvents.size
  } minutes.`
);

for (const [key, gameEvent] of gameEvents) {
  console.log(`[${key <= 45 ? 'FIRST' : 'SECOND'} HALF] ${key}: ${gameEvent}`);
}
