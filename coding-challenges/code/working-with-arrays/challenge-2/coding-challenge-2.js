'use strict';

///////////////////////////////////////
// Coding Challenge #2

/*
Julia and Kate. 

Create function calcAverageHumanAge, which accepts an array of dog's ages and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, human age = 2 * dogAge, if dog > 2 years old, humanAge = 16 + dogAge * 4
2. Exlclude dogs that are less than 18 human years old (same as keeping dogs that are at least 18 years old)
3. Calculate avg human age of all adult dogs 
4. Run the function
*/

const calcAverageHumanAge = function (ages) {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
};

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
