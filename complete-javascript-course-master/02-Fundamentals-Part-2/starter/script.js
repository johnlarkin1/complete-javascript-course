/*
Strict mode. This has to be the first line of code in the java script files (comments are fine). 

It's more secure code. It creates visible errors for us whereas javascript just fails silently.
*/

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive");