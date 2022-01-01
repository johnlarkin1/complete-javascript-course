
// Coding Challenge #1
/*
Mark and John are trying to compare their BMI whihc is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height)
(mass in kg and heigh in meter)

1. Store Mark and John's mass and height in variables
2. Calculate both theri BMIs using the formula (you can implmeent both versions)
3. Create a boolean variable `markHigherBMI` container information about whether Mark has a higher BMI than john

Test Data #1: Mark wt = 78kg and is 1.69m tall. John wt = 92 kg and is 1.95 m tall. 
Test Data #2: Mark wt = 95kg and is 1.88m tall. John wt = 85 kg and is 1.76 tall.
*/

const markMassKg = 78;
const markHeightMeters = 1.69;
const johnMassKg = 92;
const johnHeightMeters = 1.95;

const markBMI = markMassKg / (markHeightMeters ** 2);
const johnBMI = johnMassKg / (johnHeightMeters ** 2);
const markHigherBMI = markBMI > johnBMI;

console.log("Mark BMI: " + markBMI);
console.log("John BMI: " + johnBMI);
console.log("Mark higher BMI? " + markHigherBMI);