/*
Write a program that receives a list of variable names written in underscore_case and converts them to camelCase. 

INput will come from a text area inserted into the DOM. See the code below. And the conversion will happen when the button is pressed. 

Test data (paseted to textarea, including spaces):
underscore_case
  first_name
Some_Variable
 calculated_AGE
delayed_departure

Should produce:

underscoreCase
firstName
someVariable
calculateAge
delayedDeparture

*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const parseAndCleanIndividual = function (word) {
  const lowerAndTrim = word.trim().toLowerCase();
  const splitOnBar = lowerAndTrim.split('_');
  let capitalizedPortion = '';
  for (const wordToCap of splitOnBar.slice(1)) {
    capitalizedPortion += wordToCap[0].toUpperCase() + wordToCap.slice(1);
  }
  return splitOnBar[0] + capitalizedPortion;
};

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const splitWords = text.split('\n');
  console.log(splitWords);

  // for (word of splitWords) {
  //   const cleansed = parseAndCleanIndividual(word);
  //   console.log(cleansed);
  //   console;
  // }
  for (const [i, word] of splitWords.entries()) {
    const cleansed = parseAndCleanIndividual(word);
    console.log(cleansed.padEnd(20, ' '), '✅'.repeat(i + 1));
  }
});
