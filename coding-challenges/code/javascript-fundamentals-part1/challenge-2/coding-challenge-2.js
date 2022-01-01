
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote and imrpove it:

1. Print a nice output to the console, saying who has the higher BMI
2. Use a template literal
*/

const markMassKg = 78;
const markHeightMeters = 1.69;
const johnMassKg = 92;
const johnHeightMeters = 1.95;

const markBMI = markMassKg / (markHeightMeters ** 2);
const johnBMI = johnMassKg / (johnHeightMeters ** 2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);

} else if (markBMI < johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is lower than John's BMI (${johnBMI})`);
} else {
    console.log(`Mark's BMI (${markBMI}) is equal to John's BMI (${johnBMI})`);
}