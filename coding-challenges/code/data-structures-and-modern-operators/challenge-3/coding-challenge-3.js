/*
Football betting app. 
Suppose we get data from a web service about a certain game. 

1. Loop over the game.scored array and print each player name to the console along with goal number
2. Use a loop to calculate the average odd and log it to the console
3. Print the 3 odds to the console, but in a nice formatted way
4. Bonus: create an object called scorers which contain the names of teh players who scores as properties and the number of goals as the values
`{
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}`
*/

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

// console.log('Got here');
// console.log(game.scored.entries());
for (const [idx, scorer] of game.scored.entries()) {
  console.log(`Goal ${idx + 1}: ${scorer}`);
}

let averageOdd = 0;
for (const odd of Object.values(game.odds)) averageOdd += odd;
averageOdd /= Object.values(game.odds).length;
console.log(`Average odd: ${averageOdd}`);

for (const [name, odd] of Object.entries(game.odds)) {
  if (name == 'x') {
    console.log(`Odd of draw: ${odd}`);
  } else {
    console.log(`Odd of victory ${game[name]} : ${odd}`);
  }
}

let scorers = {};
for (const scorer of game.scored) {
  if (scorers[scorer]) {
    scorers[scorer] += 1;
  } else {
    scorers[scorer] = 1;
  }
}

console.log(scorers);
