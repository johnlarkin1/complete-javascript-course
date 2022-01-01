/*
A dog is an adult if it is at least 3 years old, and a puppy if it's less than 3 yeras old. 

1. Create a function `checkDogs` which accepts 2 arrays of dog's ages and does:
  a. Create a shallow copy of Julia's array, remove the cat ages from the copied array (first and last two dogs)
  b. Create an array with both julia's corrected data and Kate's data
  c. For each dog remaining, log to the console where it's an adult or a puppy 
  d. Run the function for both test datasets

  Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
  Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice(1, -2); // or [...dogsJulia];
  // console.log(dogsJuliaCopy, dogsJulia);
  const allTheDogs = dogsJuliaCopy.concat(dogsKate);
  allTheDogs.forEach((dogAge, idx) => {
    console.log(
      dogAge >= 3
        ? `Dog number ${idx} is an adult, and is ${dogAge} years old`
        : `Dog number ${idx} still a puppy 🐶`
    );
  });
};

console.log('--- FIRST FUNCTION ---');
let dogsJulia = [3, 4, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];

checkDogs(dogsJulia, dogsKate);

console.log('--- SECOND FUNCTION ---');
dogsJulia = [9, 16, 6, 8, 3];
dogsKate = [10, 5, 6, 1, 4];

checkDogs(dogsJulia, dogsKate);
