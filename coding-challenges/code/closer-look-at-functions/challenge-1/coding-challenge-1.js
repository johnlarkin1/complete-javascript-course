'use strict';

/*
Building a poll application. 

1. Create a method called 'registerNewAnswer' on the 'poll' object.
  a. Display a prompt window for the user to input the number of the selected option. Prompt should look like:
  What is your favorite programming language?
  0: JavaScript
  1: Python
  2: Rust
  3: C++
  b. Update the 'answers' array property. If the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number nad if the number makes sense. 
2. Call this method whenever the user clicks the 'Answer poll' button
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type') whichj can be either string or array. If the type is array, display the results as is. If it's string, show a string. 
4. Run the displayResults method at the end of each register new answers. 
5. Use the displayResults method to display the 2 arrays in the test data. Use both the array and the string option. Don't put the arrays in the poll object. 
*/

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

const displayResults = function (arrayToDisplay, typeToDisplay = 'array') {
  if (typeToDisplay === 'string') {
    console.log(`Poll results are ${arrayToDisplay.join(', ')}`);
  } else if (typeToDisplay === 'array') {
    console.log(arrayToDisplay);
  }
};

const registerNewUser = function () {
  const pick = Number(prompt(poll.question + '\n' + poll.options.join('\n')));
  if (!pick || pick > poll.options.length) {
    console.log(pick);
    console.log('You picked an inappropriate value. Please retry.');
  } else {
    poll.answers[pick] += 1;
  }
  displayResults(poll.answers);
};

document.querySelector('.poll').addEventListener('click', registerNewUser);

displayResults(data1, 'array');
displayResults(data1, 'string');
displayResults(data2, 'array');
displayResults(data2, 'string');

/*
Coudl also have it be a part of the poll object 


const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt(poll.question + '\n' + poll.options.join('\n')));
    console.log(answer);

    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')});
    }
  }
};

document.querySelector('.poll').addEventListener('click', poll.registeredNewAnswer.bind(poll));

poll.displayResults.call({answers: [5,2,3]}, 'string');

*/

let f;
const g = function () {
  let a = 23;
  f = function () {
    a++;
    console.log(a);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
f();
f();
f();
f();

// Re-assigning f function
h();
f();
