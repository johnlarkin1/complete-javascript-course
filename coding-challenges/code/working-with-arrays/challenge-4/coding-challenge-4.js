/*
J and K are still studying sdogs. 
Studying eating.
Eating too much means the dog's current food portion is larger than recommended. Eating too little is the opposite. 
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended. 

1. Loop over the dogs array contianing dog objects. 
    a. Foreach dog, calc the recommended food portion and add it to the object as a new property. Do not create a new array. Simply loop over teh array. 
2. Find sarah's dog and log to the console whether it's eating too much or too little. Some dogs have multiple owners. 
3. Create an array containing all owners of dogs who eat too mcuh and an array with all owners of dogs who eat too little. 
4. Log a string to the console for each array created in 3.
5. Log wherether there is any dog eating exactly the amount of food that is recommended. 
6. Log to the console whether ther eis any dog eating an okay amount of food. 
7. Create an array of dogs eating an okay amount. 
8. Create a shallow copy of the dogs array and sort it by recommended food portion. 

*/

const dogs = [
  { weight: 22, currFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, currFood: 200, owners: ['Matilda'] },
  { weight: 13, currFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, currFood: 340, owners: ['Michael'] },
];

dogs.forEach(dogObj => (dogObj.recFoodPortion = dogObj.weight ** 0.75 * 28));

const DogAmount = {
  TooLittle: 'TooLittle',
  TooMuch: 'TooMuch',
  OkAmount: 'OkAmount',
  ExactlyRight: 'ExactlyRight',
};

const determineDogFoodPortion = function (dogObj) {
  if (dogObj.currFood > 1.1 * dogObj.recFoodPortion) {
    return DogAmount.TooMuch;
  } else if (dogObj.currFood < 0.9 * dogObj.recFoodPortion) {
    return DogAmount.TooLittle;
  } else if (dogObj.currFood === dogObj.recFoodPortion) {
    return DogAmount.ExactlyRight;
  } else {
    return DogAmount.OkAmount;
  }
};

const saraDog = dogs.find(dogObj => dogObj.owners.includes('Sarah'));
const eatingEnough =
  saraDog.currFood > 1.1 * saraDog.recFoodPortion
    ? 'Eating too much'
    : saraDog.currFood < 0.9 * saraDog.recFoodPortion
    ? 'Eating too little'
    : 'Okay amount';

console.log(saraDog);
console.log(eatingEnough);

dogs.forEach(
  dogObj => (dogObj.foodEvaluation = determineDogFoodPortion(dogObj))
);
console.log(dogs);

const ownersEatTooMuch = dogs
  .filter(dogObj => dogObj.foodEvaluation == DogAmount.TooMuch)
  .map(dogObj => dogObj.owners)
  .flat();
console.log(ownersEatTooMuch);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

const ownersEatTooLittle = dogs
  .filter(dogObj => dogObj.foodEvaluation == DogAmount.TooLittle)
  .map(dogObj => dogObj.owners)
  .flat();
console.log(ownersEatTooLittle);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

const okAmount = dogObj => dogObj.foodEvaluation == DogAmount.OkAmount;
console.log(
  `Are there any dogs eating *exactly* the right amount? ${dogs.some(
    dog => dog.foodEvaluation == DogAmount.ExactlyRight
  )}`
);

console.log(
  `Are there any dogs eating an *okay* amount of food? ${dogs.some(okAmount)}`
);
console.log(`Ok dogs: `, dogs.filter(okAmount));

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recFoodPortion - b.recFoodPortion);
console.log(dogsSorted); // ascending order
