/*
Football betting app. 
Suppose we get data from a web service about a certain game. 

1. Create one player array for each team (variables players1 and players2)
2. First player in any array is the goalkeeper. For Bayer Munich, create one vaariable `gk` with the goalkeeper's name, and one array fieldPlayers with all the remaining 10 players. 
3. Create an array allPlyaers (contianing all players)
4. During teh game, Munich uses 3 substitute players. Create a new array players1Final containing all plus the subs. 
5. Based on the game.odds objject, create one variable for each odd (called team1, draw, and team2)
6. Write a functino printGoals that receives an arbitrary number of player names and prints them to the console (along with how many goals they scored)
7. Team with the lower odd is more likely to win. Print to the console which team is more likely to win without using an `if/else` statement or the ternary operator. 
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

// 1.
// let players1 = game.players[0];
// let players2 = game.players[1];
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`There were ${players.length} goals.`);
};

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
