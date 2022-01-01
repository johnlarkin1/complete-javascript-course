// Coding Challenge #1
/*
Given an array of forecasted max temperatures, the thermometer displays a string with the given temperatures. 

1. Create a function `printForecast` which takes in an array `arr` and logs a string like the above to the console. Try it with both test datasets. 
2. Use the problem-solving framework. Understand the problem and break it into subproblems. 
*/

// const data = [17, 21, 23];
const data = [12, 5, -5, 0, 4];

function printForecast(dataArray) {
  let output_str = "";
  for (let i = 0; i < data.length; i++) {
    output_str += `${data[i]}˚C in ${i + 1} days ... `;
  }
  console.log(output_str);
}

printForecast(data);
