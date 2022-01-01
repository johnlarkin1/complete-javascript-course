
// Coding Challenge #3
/*
Two gymnastics teams, Dolphins and Koalas. They compete against each other three times. The winner with the highest average score wins a trophy. 

1. Calculate an average score for each team using the test data below. 
2. Compare the team's average score to determine the winner and print to console. There can be draws. 
3. Bonus 1: Include a req for a min score of 100. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 100 points. 
4. Bonus 2: Minimum score also applies to a draw; so a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. 
*/

const dolphScores = [96, 108, 89];
const koalaScores = [88, 91, 110];

let scoreLength = dolphScores.length;

let dolphSum = 0;
let koalaSum = 0;

for (let i = 0; i < scoreLength; i++) {
    let dolphScore = dolphScores[i];
    let koalaScore = koalaScores[i];

    koalaSum += koalaScore;
}

let dolphAvg = dolphSum / dolphScores.length;
let koalaAvg = koalaSum / dolphScores.length;

let winner;
if (dolphAvg > koalaAvg && dolphAvg > 100) {
    winner = "Dolphins win!";
} else if (koalaAvg > dolphAvg && koalaAvg > 100) {
    winner = "Koalas win!";
} else if (koalaAvg === dolphAvg && dolphAvg > 100 && koalaAvg > 100) {
    winner = "It's a tie!";
} else {
    winner = "No one wins the trophy."
}

console.log(`Dolph avg: ${dolphAvg}; Koala avg: ${koalaAvg}. ${winner}`);
