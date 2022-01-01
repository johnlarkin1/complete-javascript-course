# The Complete JavaScript Course 2021: From Zero to Expert

Date: 9/28/2021
Hosted through: Udemy
Class link: https://www.udemy.com/course/the-complete-javascript-course/learn

## Section 1: Welcome, Welcome, Welcome

### Code Editor

VSCode is what we're using. 

## Section 2: JavaScript Fundamentals

### 8. Brief Introduction to JavaScript

* High level, object oriented, multi paradigm programming language 
* Lots of abstractions (don't have to worry about memory management)
    - HTML, CSS, JavaScript
    - HTML
        + Content of the page
    - CSS
        + Presentation
    - JavaScript
        + Programming language: building web applications
* JavaScript
    - Dynamic effects and web apps in the browser
    - Framework: React, Angular, Vue
    - All these frameworks are 100% based on JavaScript
    - They might go away... but JavaScript won't
    - JavaScript is the single handely best 
    - JavaScript can run back-end apps (largely through NodeJS)
    - Going to be building FrontEnd applications in this course though
    - Also can use JavaScript for native mobile applications and Native Desktop Applications
* JavaScript releases
    - Huge updates (ES2015 or ES6) 
    - Yearly release 
    - ECMAScript is the older stuff 
    - ES5 

### 9. Linking a JavaScript File
Our JavaScript needs to be attached to an HTML file

Inline scripts are not good. Normally we use external javascript external files.


### 10. Values and Variables
Camelcase is normally the standard. 

### 12. Data Types

* Number 
    - Floating point numberes
    - Used for decimals and integers 
* String
    - Sequence of characters
    - Always put them in quotes
* Boolean
    - Logical type
    - Can only be `true` or `false`
* Undefined 
    - Value taken by a variable that is not yet defined
* Null
    - Also means empty value...
* Symbol
    - ES2015. Value is unique and can't be changed
* BigInt
    - ES2020. Larger integers than the Number type can hold
    
Variable x can be a number and then a string. There's no problem with that. 

We can use the `typeof` operator to determine types. 

`console.log(typeof true)`

Undefined is the type of a variable that has not yet been defined. 

```
let year;
console.log(year); // undefined
console.log(typeof year); // undefined
```

Null is not an object.

```
console.log(typeof null); // returns object
```

### 13. let, const, and var

`let` and `const` were introduced in ES6. 

`let` is for variables that can change later. So basically during the execution. Re-assigning these variables is perfect. "Mutating" the variable is fine. 

`const birthYear = 1991`

This means that it can never change. It is immutable. When using const we need to have an initial value. 

`var` is the old way of defining variables. We should avoid this basically at all points. Var allows to have mutating. Below the surface, var and let are pretty different. 

Don't even need to declare variables.... but it's a bad idea. This doesn't create a variable in the current scope. 

You should never write a variable without first declaring it. 

### 14. Basic Operators

* mathematical operators
    - exponential operator is `**`
* string concatenation
* typeof operator

The console has access to all the variables that are running in the script. 

### 15. Operator Precedence

* javascript has a well defined order of 
* MDN is a good documentation site to use 
* right to left precedence 
    - `x = y = 25 - 10 - 5`
    - `x = y = 10`


### 17. Strings and Template Literals

So you can do

```const jonasNew = `I'm ${firstName}` ```

The back ticks indicate the string literal.

Backticks can also create multiple line strings. which is actually dope. 

```

console.log(`String
    multiple
    lines`);

```

### 18. Taking Decisions: if / else Statements

```
const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
```

### 20. Type Conversion and Coercion

JavaScript sometimes behaves in a weird way. 

* Type Conversion 
    - This is intentional and done by the programmer 
* Coercision 
    - Automatically converts types behind the scenes

```
// type conversion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear));

console.log(Number('John')); // returns NaN
console.log(typeof NaN); // returns number

// type coercion
console.log('I am' + 23 + ' years old');
console.log('23' - '10' - 3); // returns 10
console.log('23' * '2'); // returns 46
console.log('23' > '18'); // returns true

let n = '1' + 1; // '11'
n = n - 1; // '11' - 1 = 10

2+3+4+'5' // '95'
'10'-'4'-'3'-2+'5' // '15'

/*
subtraction operator converts things to numbers
addition operator converts things to numbers'
multiplication and division operator converts things to numbers
```


### 21. Truthy and False Values

* Falsy values are not exactly false, but will become false when we convert them to a boolean
    - Only five falsy values
        + 0
        + ""
        + undefined
        + null
        + NaN

```
console.log(Boolean(0)); // returns false
console.log(Boolean(undefined)); // returns false
console.log(Boolean('Jonas')); // returns true
console.log(Boolean({})); // returns true
console.log(Boolean('')); // returns false

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}
```

### 22. Equality Operators == vs ===

`===` means is it exactly equal 

```
const age = 18;
if (age === 18) {
    console.log('You just became an adult');
}
```

`===` means does NOT perform type conversion. It checks the type


`==` means loose and this will give you type conversion

```
'18' == 18 ; // return true
'18' === 18 ;  // return false
```

```
const favorite = prompt("What's your favorite number?");
```

```
!== // NOT equal to in strict

!= // NOT equal but loose
```

### 23. Boolean Logic

This is all intuitive.

### 24. Logical Operators

```
&& // and operator
|| // or operator
! // not operator
```

### 26. Switch Statement

Alternative for writing a complicated if else if statement. 

```
const day = 'monday';
switch (day) {
    case 'monday': // basically day === 'monday'
        console.log('Plan course structure');
        console.log('Multiple lines of code');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break
    default:
        console.log('Not a valid day');
}
```

### 27. Statements and Expressions
High level overview. 

Expression is a piece of code that produces a value. 

```
3 + 4 // produces a number
1991 // produces a number
true && false // produces a value


if (23 > 10) {
    const str = '23 is bigger';
}

// doesn't produce a value, just assigns something. This is a statement. Because it doesn't produce a value.

```

Statements are like full sentences that translate to sentences. 

### 28. Conditional (Ternary) Operator

```
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log("I can't drink wine");
```

This will return an expression. So we could do something like this.

```
const drink = age >= 18 ? "wine" : "water";
console.log(drink);
```

Simplifies the code. 

### JavaScript Releases: ES5, ES6+, and ESNext

* Brendan Eich creates the very first version of JavaScript in 10 days
* Mocha renamed to JavaScript in order to attract Java developers
    - JavaScript has nothing to do with Java
* Microsoft launches IE, copying JavaScript from netscape and calling it JScript
* 1997 - JavaScript standardized 
* 2009 - ES5 released 
* 2015 - ES6 single biggest update to the language ever. Very big deal for the web developer community. 

Don't break the web. New versions are just releases.

* Old features are never removed
* Just incremental updates
* Websites keep working forever

Not forwards compatible obviously. 


* How to use modern javascript today?
    - During development:
        + Use the latest Google Chrome
        + That easy
    - During production:
        + Use Babel to transpile and polyfill your code 
        + (i.e. converting back to ES5 to ensure browser compatibility for all users)

## Section 3: JavaScript Fundamentals - Part 2

### 32. Activating Strict Mode

```
/*
Strict mode. This has to be the first line of code in the java script files (comments are fine). 

It's more secure code. It creates visible errors for us whereas javascript just fails silently.
*/

'use strict';
```

### 33. Functions

```
function logger() {
    console.log('My name is John');
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
```

### 34. Function Declarations vs Expressions

```
// this is a function declaration
function calcAge(birthYear) {
    return 2037 - birthYear;
}

// this is a function *expression*
// this is an anonymous function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

/* we call this function in the exact same way */
const age2 = calcAge2(1991);
console.log(calcAge1(1991), calcAge2(1991));
```

* Besides the technical diffs, what's the difference? 
    - Main practice difference
    - We can call function declarations BEFORE they are defined 
    - We CANNOT do this with the function expression
    - This is being of a process called hoisting 
* Function expressions are nice because all of the functions have to be defined at the top so its a bit more structured 
    - Sometimes the variables are nice to have that all defined
    

### 35. Arrow Expression

Arrow functions are new as well 

```
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

/*
Return happens implicitly
Great for one liner functions 
Don't need any functions. Birthyear is a function. 
Lets look at an example
*/


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years}`
}

console.log(yearsUntilRetirement(1991, "John"));

```


### 36. Functions Calling Other Functions

```

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pices of apple and ${orangePieces} orange pieces.`;
    return juice;
}
```

### 37. Reviewing Functions

Done. 


### 39. Introduction to Arrays

```
const friends = ['Michael', 'Steven', 'Peter'];
const years = new Array(1991, 1984, 2008, 2020);
friends[2] = 'Jay';


/*
Only primitive values are immutable 
Arrays are not primitive values so you can mutate arrays despite them being declared with arrays
can't do this
*/

// friends = ['Bob', 'Alice'];

const firstName = 'John';
const jonas = [firstName, 'Larkin', 2037 - 1991, friends];
```

### 40. Basic Array Operations (Methods)

```
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // appends onto the end; returns 5
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay'];

/*
Push returns the new length of the array
*/

friends.unshift('John'); // appends onto the front of the array; 
console.log(friends); // ['John', Michael', 'Steven', 'Peter', 'Jay'];

// Remove elements
const popped = friends.pop(); // returns the removed element; element removed from back
console.log(friends); // ['John', Michael', 'Steven', 'Peter'];
console.log(popped); // returns 'Jay'

friends.shift(); // Removes the first

friends.indexOf('Steven'); // returns 2
friends.indexOf('Bob'); // returns -1 Bob doesn't exist

friends.includes('Steven'); // true; THIS CHECKS WITH STRICT TYPE EQUALITY
```


### 42. Introduction to Objects


```
const jonas = {
    firstName : 'John',
    lastName : 'Schmedtmann',
    age: 36-10,
    job: 'teacher',
    friends: ['test', 'a']
}

/*
These are called properties with values

THIS DATA IS NOT ORDERED LIKE IT IS IN AN ARRAY
*/
```


### 43. Dot vs Bracket Notation

```
const john = {
    firstName : 'John',
    lastName : 'Schmedtmann',
    age: 36-10,
    job: 'dev',
    friends: ['henry', 'will']
}

console.log(john.lastName);
console.log(john['lastName']);

/*
The nice part about the bracket notation is you can have an expression in order to retrieve the key.
We need the bracket notation at points. 
*/

const interestedIn = prompt('What do you want to know about John? Choose between (firstName, lastName, age, job, friends)');
// undefined is what you get when you try to access a field that is undefined 
console.log(john[interestedIn]);


// Can also add things to the object
john.location = 'Cincinnati';
john['twitter'] = 'N/A';

```

### 44. Object Methods

```
const john = {
    firstName : 'John',
    lastName : 'Schmedtmann',
    birthYear: 1995,
    job: 'dev',
    friends: ['henry', 'will']
    hasDriversLicense : true,
    //calcAge : function(birthYear) {
    //    return 2037 - birthYear
    //}

    calcAge: function() {
        // console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    }
}

console.log(john.calcAge(1995));
console.log(john['calcAge'](jonas.birthYear));l

/*
We can store functions as properties no problem
We need the function expression to create this method
Any function that is attached to an object is called a method
*/
```


### 46. Iteration: The `for` loop

### 47. Looping through Arrays, Breaking, and Continuing


Skipping the rest because I'm familiar. 

```
// continue and break

for (let i = 0; i < john.length; i++) {
    // only print out string type
    //if (typeof john[i] !== 'string') continue; // only print strings
    if (typeof john[i] === 'number') break; // break on first number 
    console.log(john[i], typeof john[i]);
}
```

### 48. Looping Backwards and Loops in Loops

```
for (let i = john.length - 1; i >= 0; i--) {
    console.log('nice');
}
```

### 49. The `while` loop

```
let rep = 1;
while (rep <= 10) {
    console.log('hi');
    rep ++;
}

let dice = Math.trunc(Math.random() * 6) + 1; // creates a number zero through 1
console.log(dice);

while (dice !== 6) {
    console.log(dice);
    dice = Math.trunc(Math.random() * 6) + 1; // creates a number zero through 1
}


```


## Section 5: Developer Skills & Editor Setup

### 56. Installing Node.js and Setting up a Dev Environment

No one reloads their browser to see their changes. Two approaches to have a Live Server. 

1. We can install a VS Code extension 
2. We have use a bit more of a profssional workflow with Node.js and a so called npm packaage. 

More professional approach is as follows.

1. Install Node.js
2. npm package

### 61. Debugging with the Console and Breakpoints

We also have console.warn and console.error .

You can also go to `Sources` in the chrome debugger and then test from there. It's very nice. 

```
// Can also call debugger from the code and it'll open up the debugger there as well

debugger;
```

## Section 6. HTML and CSS Crash Course

### 64. Basic HTML Structure and Elements

ids have to be unique. classes can be used all over the place. class selector is using the dot notation

```
h1 {
    font-size: 40px;
}

.first {
    color: red
}

// this gets picked per the specific id
#your-name {
    background-color: rgb(255, 220, 105);
    border: 5px solid #444;
}
```

### 67. Introduction to the Box Model

* Content of a box is where all the content goes
* Padding is around the box
* Border for any box; border goes around the padding
* Margin is whitespace outside of the border
    - It is the space between boxes
* Fill area
    - Area that gets filled with background color or background image

## Section 7. JavaScript in the Browser: DOM and Events Fundamentals

### 70.Project #1: Guess my number!

```
'use strict';

console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
```


### 71. What is DOM and DOM Manipulation?

* DOM
    - Document Object Model
    - Structured representation of HTML documents
    - Allows JavaScript to access HTML elements and styles to manipulate them
* DOM methods and properties for DOM manipulation are NOT part of JavaScript
* DOM methods and properties can interact with JavaScript

### 72. Selecting and Manipulating Elements

```
document.querySelector('.message').textContent = 'Correct Number!';

// working on button

// second argument is a function as a argument
document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    console.log(guess);

    if (!guess) {

    }
});
```

### 74. Implementing the Game Logic

```
// Want our data in the code rather than just on the dom

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // let because we're decreasing

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber) { 
        document.querySelector('.message').textContent = 'Correct number!';
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game.';
            document.querySelector('.score').textContent = 0;
        }
        
        
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!!';
            score --;
            document.querySelector('.score').textContent = score;
        } else { 
            document.querySelector('.message').textContent = 'You lost the game.';
            document.querySelector('.score').textContent = 0;
        }
    }

});

```


### 75. Manipulating CSS Styles

```
// Want our data in the code rather than just on the dom

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // let because we're decreasing

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';

    } else if (guess === secretNumber) { 
        document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game.';
            document.querySelector('.score').textContent = 0;
        }
        
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!!';
            score --;
            document.querySelector('.score').textContent = score;
        } else { 
            document.querySelector('.message').textContent = 'You lost the game.';
            document.querySelector('.score').textContent = 0;
        }
    }

});

```


### 79. Project #2: Modal Window
See the code

### 80. Handling an ESC Keypress Event

See the code, but

```
document.addEventListener('keydown', function (e) {
  // Event function as an argument
  console.log('A key was pressed');
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
```

See all the code here.

## Section 8: How JavaScript Works Behind the Scenes

### 89. A High Level Overview of JavaScript


```
Javascript is a high level, prototype based object oriented, multi paradigm, interpreted or just in time compiled, dynamic, single threaded, garbage collected programming language with first class functions and a non blocking event loop concurrency model
```


* High level
    - Don't need to manage resources
* Garbage collected
    - Automatically handled
* Interpreted or just in time compiled 
    - Computers process only understands 0 and 1s (machine code)
    - Compiiling vs interpreting
    - JavaScript engine
* Multi-paradigm
    - Procedural (this is what we've been doing so far)
    - Object oriented 
    - Functional programming
    - Imperative vs  declarative 
* Prototype based object oriented
    - prototypal inheritance 
* First class functions
    - First-class functions (meaning they're basically just objects)
* Dynamicly type
    - No data type definitions 
* Single threaded / Non-blocking event loop
    - Most complex topics 
    - Concurrency model:
        + How the JavaScript engine handles multiple tasks happening at the same time
        + JavaScript runs in one single thread (threads are executed in CPU)
        + Event loop: takes long running tasks, executes them in the background, and puts them back in the main thread

### 90. The JavaScript Engine and Runtime

* JS Engine
    - Program that executes JavaScript code 
    - JS Engine 
        + Contains:
        + Call Stack
            * Where our code is executed 
            * Execution context
        + Heap
            * Where objects are stored 
            * Objects in memory
            
* Compilation vs Interpretation
    - Compilation: Entire code is converted into machine code at once, written to a binary file, and then executed by a computer
    - Interpretation: Runs through the source code and executes it line by line 
        + Low performance.... so not really cool
        + JavaScript not uses JIT compilation
    - Just-in-time compilation
        + Entire code is converted into macihine code at once, then executed immediately 

* JIT Compilation of JavaScript
    - Parsing 
    - Compilation (JIT) - abstract syntax tree (AST) 
    - Execution - happens in call stack

* JS Runtime in the Browser
    - Can imagine this as a container including all the things that we need to use JavaScript in the browser
    - Then JS Engine 
        + Heap
        + Call Stack
    - WEB APIs
        + DOM
        + Fetch API
        + TImers
    - CallBack Queue
        + Click 
        + Timer 
        + Data
        
### 91. Execution Contexts and the Call Stack

* Execution Contexts
    - What is an Execution Context?
        + Compilation
        + Execution
            * Creation of a global execution context (for top-level code)
                - NOT inside a function
            * Execution of top-level code (inside global EC)
            * Execution of functions and waiting for callbacks (like the click event callback)
            
    - Ok but what actually is an Execution Context?
        + JavaScript code always runs inside an Exeution Context
        + Environment in which a piece of JavaScript is executed
        + Stores all the necessary information for some code to be executed 
    - Exactly one global execution context
    - One execution context PER FUNCTION
    
    - What's inside an execution context?
        + Variable environment
            * `let`, `const`, `var` declarations
            * Functions 
            * `arguments` object
                - NOT in arrow functions
        + Scope chain
        + `this` keyword
            * NOT in arrow functions
    - All of the above are generated in the `creation phase` right before execution

* The Call Stack
    - `Place` where execution contexts get stakced on top of each other, to keep track of where we are in the execution
    
### 92. Scope and the Scope Chain

* Scoping:
    - How our program's variables are organized and accessed? 
    - Where do variables live or where cna we access a certian varaible?
* Lexical scoping:
    - Scoping is controlled by placement of functions and blocks in the code
* Scope:
    - Space or environment in  which a certain variable is declared
    - `Global` scope 
    - `Function` scope 
    - `Block` scope
* Scope of a variable:
    - Region of our code where a certain variabble can be acccessed 
* 3 types of scope:
    - Global Scope
        + outside of any function or block
        + accessible everywhere
    - Function Scope
        + variables are accessible only INSIDE function, not outside 
        + local scope
    - Block Scope
        + Variables are accessible only `inside block`
        + Like an if block
        + HOWEVER, this only applies to `let` and `const` variables
        + Functions are also block scoped
            * Only in strict mode
* The Scope Chain
    - You can always have access to variables referenced in higher scopes but at the same level you cannot (unless they're declared with `var` which is generally bad)
    - Order in which functions **are written in the code**
    - Has **nothing** to do with order in which functions were called
* Scope Chain vs Call Stack
    

* Summary
    - Scoping asks: *where do variables live?*
    - 3 types of scope in JavaScript
        + Global Scope
        + Function Scope
        + Block Scope
    - Only `let` and `const` variables are block scoped 
    - Variables declared with `var` end up in the closest function scope
    - In JavaScript, lexical scoping 
    - Every scope has access to  all the variables in the outer scope (this is the scope chain)
    - When a variable is not in the current scope, the engine looks up in teh scope chain until it finds the varaible it's looking for (variable lookup)
    - Scope chain is a one way street: scope will never have access to varaibles of an inner scope
    - Scope chain in a certain scope is equal to adding together all the variable environments of the parent scopes 
    - Scope chain has nothing to do with the order in which fucntions were called 

### 93. Scoping in Practice

```
'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthyear;
    console.log(firstName); // VARIABLE LOOKUP HAPPENS HERE
    return age;;
};

const firstName = 'Jonas';
calcAge(1991);
```


### 94. Variable Environment: Hoisting and The TDZ

* **Hoisting** : makes some types of variables accessible / usable in the code before they are actually declared 
    - Variables lifted to the top of their scope 
    - Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object
    
* `function` declarations
    - Hoisted? Yes
    - Initial Value? 
* `var` variables
* `let` and `const` variables
* `function` expressions and arrows


| type | hoisted | initial value | scope
|------|---------|---------------|------|
| `function` declarations | yes | actual function |  block | 
| `var` variables | yes | undefined | function |
| `let` and `const` variables | NO | uninitialized, TDZ| block |
| `function` expressions and arrows | | depends on if let or const | |


* Temporal dead zone for `job` variable


```
if (myName === 'Jonas') {
    console.log(`Jonas is a ${job}`); // 
    const job = 'teacher';
    console.log(x); // ReferenceError: `x` is not defined
}

console.log(addDecl(2,3)); // 5
console.log(addExpr(2,3)); // Error
console.log(addArrow(2,3)); // Error

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a + b;
}

const addArrow = (a,b) => a + b;


```

There is a global window object. That's where the var variables get scoped to.

### 96. The `this` keyword

* `this` keyword / variable 
    - Created for every execution context
    - Takes teh value of (points to) the 'owner' of the function in which the `this` keyword is used
* This is **NOT** static 
    - Depends on how the function is called 
    - Its value is only assigned when the function is actually called

### 97. The `this` Keyword in Practice

```
console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge(1991); // undefined for this

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAgeArrow(1980); // points to the global scope because it inherets the higher level scope; so would be window;
                    // this key word inherets from the parent


const jonas = {
    year: 1991, 
    calcAge : function() {
        console.log(this);
    },
};
jonas.calcAge(); // owner of the method so this -> jonas
```

### 98. Regular Functions vs Arrow Functions

```
const jonas = {
    firstName : 'John',
    year: '1995',
    calcAge : function() {
        console.log(this);
        console.log(2037 - this.year);
    },
    greet :  () => console.log(`hey ${this.firstName}`),

};
jonas.greet();
```

### 99. Primitives vs Objects (Primitive vs Reference Types)

```
let age = 30;
let oldAge = age;
age = 31; 
console.log(age); // 31
console.log(oldAge); // 30

// this works as expected

const me = {
    name: 'John',
    age: '26'
};
const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('me', me);

// both objects are updated
```

* Primitives:
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
    - Bigint
* Objects
    - Object literal
    - Arrays
    - Functions 
    - Many more

* JS Engine
    - Primitives are stored in the call stack
    - Objects have identifiers that point to a piece of memory in the stack that then in turns points to the heap
    - The stack just keeps a reference to where it's stored in the heap
    - So in the above example, the friend example would point to the same address in the stack
* Things that will get covered later:
    - Prototypal Inheritance
    - Event Loop
    - How the DOM Really Works
    
### 100. Primitives vs Objects in Practice

```
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
cl(lastName); // Daviss
cl(oldLastName); // Williams

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams', 
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams', 
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // returns a new object with all of the properties jessicaCopy.lastName = 'Davis';
// This is a totally new object in the heap
// Still a problem. Only works on this first level. THIS IS A SHALLOW COPY. 
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
// deeply nested object is linked to both

```

## Section 9: Data Structures, Modern Operators, and Strings

### Destructuring Arrays

A way of unpacking arrays into a more simple variable. 

```
const restaurant = {
    name : 'Italiano',
    location: 'Firenze, Italy';
    categories: ['Italian', 'Pizzeria', 'Vegetarian'],
    starterMenu = ['Focaccia', 'Bruschetta', 'Vegetarian'],
    mainMenu = ['Piza, 'pasta', 'risotto'];
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}

const arr = [2,3,4];
const [x,y,z] = arr;

// quick swap of two variables
[main, secondary] = [secondary, main];

// test order

const [starter, main] = restaurant.order(2, 0);

const nested = [2, 4, [5, 6]];
const [i, [j, k]] = nested;
```

### 104. Destructuring Objects

Basically the same, we just use the curly brackets

```
const restaurant = {
    name : 'Italiano',
    location: 'Firenze, Italy';
    categories: ['Italian', 'Pizzeria', 'Vegetarian'],
    starterMenu = ['Focaccia', 'Bruschetta', 'Vegetarian'],
    mainMenu = ['Piza, 'pasta', 'risotto'];
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}

const { name, openingHours, categories } = restaurant; // map these properties
// or you can redirect them like this

const { name : restaurantName, openingHours: hours, categories: tags,} = restaurant;

// can be nice to have default values 

const { menu = [], starterMenu : starters = []} = restaurant;

// mutating variables 
let a = 111;
let b = 999;
const obj = { a : 23, b : 7, c: 14};
({a, b} = obj);
console.log(a, b) // 23, 7
```

### 105. The Spread Operator (...)

Unpacking all the array values into one. 

```
const arr = [7, 8, 9];
const goodNewArr = [1,2, ...arr]; // expands the array into all the individual elements
```

Can only use the spread operator where you would basically itemize the individual values

```
// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
```

Spread operator works on ALL possible iterators. Strings, maps, sets, but not objects. 

Iterables: arrays, strings, maps, sets. NOT objects.

```
const str = 'Jonas';
const letters = [...str, ' ', 's'];
// can't do:
// console.log(`${...str} Larkin`);

const orderPasta = function(in1, in2, in3) {
    conosle.log(`Here is your pasta: ${in1}, ${in2}, ${in3}`);
}

// objects now work too i guess?

const newRest = {...restaurant, founder: 'Giuseppe'};
```



### 106. Rest Pattern and Parameters
Exact same syntax, but for condensing them into an array. Rest is to pack elements into an array

```
// Spread because on RIGHT side of = 
const arr = [1, 2, ...[3, 4]];
const [a, b , ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1, 2, (3) [3, 4, 5]
// rest element must be the last element in the unpacking 
// also works with objects 

// Functions
const add = function(...numbers) {
    console.log(numbers); // packs them all into one array
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
}

const x = [23, 5, 7];
add(...x);

/*
The add function can accept an array and also just a plethora of arrays
So it's a bit nicer to do it this way
*/
```


### 107. Short Circuiting (`&&` and `||`)
We can do a lot more with the `and` and `or` operators. 

```
/*
1. Use ANY data type
2. Can return ANY data type
3. Short circuiting
*/

console.log(3 || 'john'); // returns 3 
// 3 is a truthy value so its returned 
console.log('' || 'John'); // returns 'John'
console.log(true || 0); // returns true
console.log(undefined || null); // null (null is the last one so it is returned);

// moving to the AND operator

console.log(0 && 'John'); // and operator short circuits when the first operator is falsy 
console.log(7 && 'John'); // last one is returned 
console.log('Hello' && 23 && null && 'john'); // null is returned
```

### 108. Null Coalescing Operator (??)

```
// Works with Nullish values: null and undefined (does not include 0 or '')
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
```

### 110. Looping Arrays: The `for-of` Loop

```
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
    console.log(item); // item is always the current element of each idx
}

for (const item of menu.entries()) {
    console.log(item); // array with the index and the item itself
}

for (const [idx, element] of menu.entries()) {
    console.log(`${idx + 1} : ${element})
}
```

### 111. Enhanced Object Literals

We can just have functions be embedded in the object. 

```
const me = {
    order(starterIndex, mainIndex) {
        return 'boom';
    }
}
```

This would have property order that is a function. You can also compute property names rather than write them out literally. 


### 112. Optional Chaining (`?.`)

```
console.log(restaurant.openingHours.mon); // don't know if it opens there or not 

// if a certain property does not exist, then undefined is returned immediately
console.log(restaurant.openingHours.mon.open); // error `can't read property open on type undefined`
console.log(restaurant.openingHours.mon?.open);
```

### 113. Looping Objects: Object Keys, Values, and Entries

```
// property names
for (const day of Object.keys(openingHours)) {
    console.log(day); // thur: {...}, fri: {...}, sat: {...}
}

// property values
const values = Object.values(openingHours);
console.log(values); // 3 entries of {open, close}

// entries 
const entries = Object.entries(openingHours); // array of key, value

for (const [key, value] of entries ) {
    console.log(key, value);
}
```


### 115. Sets
Introduced in ES6.

Just a collection of unique values. 
```
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto']); 
console.log(new Set('jonas')); // {'j', 'o', 'n', 'a', 's'}
console.log(orderSet.has('Pizza')); // returns true
orderSet.add('Garlic Bread');
orderSet.delete('Garlic Bread');

// Sets do NOT have indices 
// There's no point of retrieving values from a set
// No need to get values out of a set 

orderSet.clear();

// to convert to an array
const staffUnique = [...new Set(staff)];
```

### 116. Maps: Fundamentals

```
const rest = new Map();
rest.set('name', 'Classic Italiano'); // key, value
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal'));
```

### 117. Maps: Iteration

```
const question = new Map([
    ['question', 'What is the best programming langauge in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct!'],
    [false, 'try again']
]);

// Convert object to map 

const hoursMap = new Map(Object.entries(openingHours));
```

### 118. Summary: Which Data Structure to Use?
Sources of data:

1. From the program itself
2. From the UI
3. From external sources 

Also some others:

* Other built in:
    - WeakMap
    - WeakSet
* Non built in:
    - Stacks
    - Queues
    - Linked lists
    - Trees
    - Hash tables
    

### 120. Working with Strings - Part 1

Slice method

```
const airline = 'TAP Air Portugal';
airline.slice(4);
airline.slice(4,7);
```

### 121. Working with Strings - Part 2

```
const airline = 'TAP AIR Portugal';
const passenger = 'jOHn';
passenger.toLowerCase();
passenger.toUpperCase();
// there's also trim()
// and replace() which just replaces the first instance
// replaceAll() should be coming in the future

// we can also use regular expressions
announcement.replace(/door/g, 'gate');
```


### 122. Working with Strings - Part 3

Working with strings `split` is critical. We can split on a divider string.

``` 
.padStart
```


## Section 10: A Closer Look at Functions

### 127. Default Parameters

```
'use strict';

cosnt bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

    const booking = {
        flightNum, 
        numPassengers, 
        price,
    };
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');

// the default parameters can be defined in relation to the other arguments that are passed in
```


### 128. How Passing Arguments Works: Value vs Reference

Need to be careful with passing objects because one function might alter them and if it's passed by reference, then that's an issue. 

JavaScript does NOT have pass by reference. Important distinction because even when we pass an object, we're passing that reference by value. 

### 129. First-Class and Higher-Order Functions

* Functions are first-class citizens 
* Functiosn are simply values
* Just another `type` of object
* Store functions in variables or properties
* Pass fucntions as arguments to OTHER functions
* Call methods on functions

* Higher-order functions
    - Function that receives another function as an argument, and returns a new function, or both
    - Only possible because of first-class functions
    - 1) Function that receives another ffunction
    - 2) Function that returns a new function
    
### 130. Functions Accepting Callback Functions

```
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);
```

Makes it easier to split up our code and divide the work. Also good abstraction.

### 131. Functions Returning Functions

```
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

// Basically utilizing a closure 


// Can also do

greet('hello')('jonas');

// using arrow functions

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
```

### 132. The `call` and `apply` Methods

```
const lufthansa = {
    airline: 'Ufthansa', 
    iataCode: 'LH', 
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name });
    },
}

lufthansa.book(239, 'John');
lufthansa.book(635, 'Smith');
const eurowings = {
    name: 'Eurowings', 
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(); // this function method call. allows the first argument to point to a `this`
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // another way to use it, but not that often applied

book.call(swiss, ...flightData); // this is preferred
```

### 133. The `bind` Method
Does not immediately call the function. Just returns a new function where the `this` argument is bound.

```
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

const bookEW23 book.bind(eurowings, 23); // you can start to define the arguments here as well
// so this one just needs the name of the passengers

bookEW23('John Larkin');
bookEW23('Martha Cooper');

// this is really liek like a partial application

// With Event Listeners 

lufthansa.planes = 300;
lufthansa.buyPlace = function() {
    console.log(this);
    this.planes ++; // add a new plane
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); 

// this points to the element that the handler is attached to 
// so in this case it's attached to the button element 
// `this` keyword is set dynamically 

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); 

// Partial appliucation
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVat = addTax.bind(null, 0.23); // the null jsut means we don't need the `this` argument at all throughout it.
```


### 135. Immediately Invoked Function Expressions (IIFE)

Need a function that disappears right after it is called once. Basicaly we'll need this ofr async and wait. 

```
const runOnce = function() {
    console.log('This will never run again');
};

runOnce();

function() { 
    console.log('This will never run again');
}

// We can wrap this entirely in a paranthesis. Making a function expression and then calling it immediately. 

// IIFE
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// or
(() => console.log('This will also never run again'))();

// so we're doing this to basically play games with the scoping 

// This block creates a new scope. There's no need really anymore to create a function scope
{
    const isPrivate = 23;
    var notPrivate = 46;
}
```


### 136. Closures

```
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking(); // exists in the global scope; environment is no longer active; 

// closure makes a function remember all the functions that existed at its birthplace
booker();
booker();
booker();

// understanding closures
/*
function always has access to the variable environment of the execution context in which it was created
closure: VE attached to the function, exactly as it was at the time and place the function was created
*/
```

A closure is the closed over **variable environment** of the execution context **in which a function was created**, even after that execution context is gone. 

Or in other words

A closure gives a function access to all the variables of its parent function, even after the parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time. 

OR 

A closure makes sure that a function doesn't lose connection to **variables that existed at the function's birth place.**

OR

A closure is like a backpack that a functino carries around wherever it goes. **This backpack has all the variables that were present in the environment where the function was created.**

JavaScript does this automatically. Closures are not tangible thing. You can't take variables from it. It's just an internal property. 

```
console.dir(booker); // we have scopes property. Closure, Script. Global
[[Scopes]] // double brackets means we can't access from the code 
```

### 137. More Closure Examples

```
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
};

g(); // nothing
f(); // logs 46. 

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    // callback function executed independently of the boardPassengers call
    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait*1000);
    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3);
```

## Section 11: Working with Arrays

### 141. Simple Array Methods

```

// SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); // [c, d, e]
console.log(arr.slice(2, 4)); // [c, d] really just 2 and 3 
console.log(arr.slice(-2)); // d, e
console.log(arr.slice(-1)); // e
console.log(arr.slice(1, -2)); // b, c

// can also use the slice method to make a shallow copy

// SPLICE
// this will change the original array

console.log(arr.splice(2)); // c, d, e
arr.splice(-1); // this removes the last element
console.log(arr); // a, b - original array loses what was extracted 


// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // f g h i j
console.log(arr2); // DOES MUTATE the original arr [f g h i j]

// CONCAT Method 
const letters = arr.concat(arr2);
console.log(letters); // a b c d e f g h i j 
console.log([...arr, ...arr2])); 

// JOIN method 
console.log(letters.join(' - ')); // like expected

```

### 142. Looping Arrays: `forEach`

```
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
    if (movement > 0) {
        console.log(`Deposited ${movement}`);
    } else {
        console.log(`Withdrew ${Math.abs(movement)}`);
    }
}

movements.forEach(function (movement) {
    if (movement > 0) {
        console.log(`Deposited ${movement}`);
    } else {
        console.log(`Withdrew ${Math.abs(movement)}`);
    }
});

// order always goes, (currentValue, index, total function)
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Deposited ${mov}`);
    } else {
        console.log(`Withdrew ${Math.abs(mov)}`);
    }
});
```

### 143. `forEach` with Maps and Sets

```
const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'EUR']);
currenciesUnique.forEach(function(value, _, map) {
    console.log(`${value}`);
});


```

### 144. Creating DOM Elements
See the Bankist app code. 

### 147. Data Transformations: `map`, `filter`, `reduce`

* Array methods:
    - Map
        + Takes an array
        + Applies a calling function
        + Creates a new array
    - Filter
        + returns a new array containing the array elements that passed a specific test 
    - Reduce
        + Boils (reduces) all arrays elements down to a single value (adding all elements together)
        
### 148. The `map` method

### 149. Computing Usernames
See the bankist

### 150. The `filter` method

```
const deposits = movements.filter(mov => mov > 0);
```

### 151. The `reduce` method
Boiling all the array values down to a single number

```
const balance = movements.reduce( (acc, curr, i, arr) => {
    // accumulator -> SNOWBALL
    return acc + curr;
});
```

### 153. The Magic of Chaining Methods
Chaining can cause performance delays. So keep looking to minimize how much we're chaining. 

Not a good idea to avoid mutating arrays. 

### 155. The `find` method

```
const firstWithdrawal = movements.find(mov => mov < 0);
```

similar to filter method, but find only returns the element and only returns a single one

### 159. `some` and `every`
Test for a condition instead of an equality?

```
// want to know if there's any number above zero
const anyDeposits = movements.some(mov => mov > 0);
```

```
// if every element passes the test
const allDepositsPos = movements.every(mov => mov > 0);
```

### 160. `flat` and `flatMap`


```
const arr = [[1,2,3], [4,5,6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1,2],3], [4, [5, 6]], 7, 8];
conosole.log(arrDeep.flat());
conosole.log(arrDeep.flat(2)); // 2 levels deep 

const allMovements = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
```

### 161. Sorting Arrays
```

const owners = ['Jonas', 'Zack'];
owners.sort(); // mutates array and sorts based on lexiconical notation

// Numbers - Ascending
movements.sort((a, b) => {
    // Kinda like current value and next value
    // Almost think about them being two consecutive items in the array
    // return < 0, A, B (keep order)
    // return > 0, B, A (switch order)
    if (a > b) return 1;
    if (a < b) return -1;
});

movements.sort((a, b) => a - b);
```

### 162. More Ways of Creating and Filling Arrays

```
const x = new Array(7); // creates an array with seven empty elements but with length 7
x.fill(1); // does mutate the underlying array

arr.fill(23, 2, 6); // put the value 23 into index 2 through 6-1

Array.from({length: 7}, () => 1);
const z = Array.from({length: 7}, (curr, i) => i + 1); // almost like you're using this as a callback function in a map array or something
```


## Section 12: Numbers, Dates, Intl, and Timers
### 171. Working with BigInt

```
console.log(2 ** 53 - 1); // this is the biggest number that JavaScript can safely represent
console.log(Number.MAX_SAFE_INTEGER);

// BigInt can store even bigger numbers
console.log(2341324321433848132098481320583201948n); // the "n" makes it a big number
conosle.log(BigInt(2341324321433848132098481320583201948));

// Operations
// All teh normal ones still work the exact same

console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true

// String concatenations should act about the same
```

### 172. Creating Dates
```
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
conosle.log(new Date('December 24, 2015')); 

console.log(new Date(2037, 10, 31)); // autocorrects to the next day
```

### 175. Internationalizing Dates (Intl)
See code

### 176. Internationalizing Numbers (Intl)
```
const options = {
    style: "unit",
    unit: "mile-per-hour", // celsius
    currency: 'EUR', // € have to be defined manually 
    useGrouping: false, // basically denotes if we want to use the comma or period separator
};

const num = 3888434.23;
console.log(new Intl.NumberFormat('en-US', options).format(num));
console.log(new Intl.NumberFormat('de-DE', options).format(num));
```


### 177. Timers: `setTimeout` and `setInterval`

```
// second argument is amount of ms that we will wait until we call this
// we basically delay calling this function in the background
// we schedule it for 3 seconds
setTimeout(() => console.log('Here is your pizza'), 3000);

// CODE EXECUTION DOES NOT STOP AT THIS POINT

// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(ing1, ing2),
3000, ...ingredients);

// You can cancel the timeout
// Can also spread the array out

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

setTimeout(function() {
    const now = new Date();
    console.log(now);
}, 1000);
```

### 178. Implementing a Countdown Timer

```
const startLogOutTimer = function() {
    /*
    Set time to 5 minutes
    Call the timer every second
    In each call, print the remaining time
    When 0 seconds, stop timer and log out user 
    */
    let time = 100;
    setIntervalt(function() {
        labelTimer.textContent = time;
        time--;
    }, 1000); // called every second
}

// then call this on login
```

## Section 13: Advanced DOM and Events

### 179. Section Intro

This is going to be pretty intensive. we're going to build out an elegant website. 

### 181. Project Bankist Website
Going to build the corresponding website for this. 

```
href = '#' 
```

Page will scroll to the top with links. If you have `href='#'` then it'll automatically scroll to the top. 

### 182. How the DOM Really Works

* Allows us to make JavaScript interact with the browser
* We can write JavaScript to create, modify, and delete HTML elements; set styles, classes and attributes, and listen and respond to events
* DOM Tree is generated from an HTML document, which we can then interact with
* DOM is a very complex API that contains lots of methods and properties to interact with the DOM Trees
    - `.querySelector() / .addEventListener()` etc

How is the DOM API organized?

* Every object is represented by a `Node`
    - Has child nodes 
        + Element
            * Inner HTML 
            * Class List 
            * children
            * append
            * closest()
            * Has an HTML Element child node
                - HTMLButtonElement
                - HTMLDivElement
        + Text
            * Paragraph
        + Comment
        + Document

### 183. Selecting, Creating, and Deleting Elements

### 184. Styles, Attributes, and Classes
See the code

### 185. Implementing Smooth Scrolling

### 187. Event Propagation: Bubbling and Capturing

* Document
    - Element <html>
        + Element <body>
            * Element <section>
                - Element <p>
                    + Element <a>

Things can bubble up and capture. So things are chained. This is a very important idea. 

We can set up event listeners to listen in the capturing phase or bubbling phase. Most events do this. Events propagate. 

### 188. Event Propagation in Practice

Pass

### 200. Efficient Script Loading: `defer` and `async`

* End of Body
    - Scripts are fetched and executed **after the HTML is completed parsed**
    - **Use if you need to support old browsers**
* Async in Head
    - Scripts are fetched **asynchronously** and executed **immediately**
    - Usually the DOMContentLoaded event waits for *all* scripts to execute, except for `async` scripts. So DOMContentLoaded does not wait for an async script. 
    - **Use for 3rd party scripts where order doesn't matter (e.g. Google Analytics)**
* Defer in Head
    - Scripts are fetched **asynchronously** and executed **after the HTML is completely parsed**
    - DOMContentLoaded event fires *after* defer script is executed 
    - Scripts are executed in order
    - **This is overall the best solution! Use for your own scripts, and when order matters (e.g. including a library)**
    

## Section 14: Object-Oriented Programming (OOP) with JavaScript

### 203. What is Object Oriented Programming?

* OOP is a prog paradigming based on the concepts of objects
* Objects to model real world or abstract features
* May contain data (properties/methods)
* We pack data and behavior into a block
* In OOP objects are self contained 
* Objects are building blocks of applications, and interact with one another 
* Interactions happen through an API 

JavaScript does NOT support **real** classes 

Four fundamental principles of OOP:

* Abstraction
    - Ignoring or hiding details that don't matter 
    - Get an overview perspective of the thing we're implementing 
* Encapsulation
    - Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface. 
* Inheritance 
    - Child class extends the parent class
* Polymorphism
    - A child class can *overwrite* a method it inherited from a parent class
    
### 204. OOP in JavaScript

* Prototypes
    - Objects are *linked* to a prototype object
    - **Prototypal inheritance**
        + The prototype contains methods that are accessible to all objects linked to that prototype 
        + Instance inheriting from a class
    - Behavior is delegated to the linked prototype object
        + Objects delegate their behavior to the prototype 
        + This is a different flow 
        + Normally behavior is copied from a class to instances 
        + But here prototypes (contain methods) and get that from the Object

3 ways of implementing prototypal inheritance in JS

1. Construction functions 

* Technique is create objects from a function
* This is how built in objects like ararys, maps, sets implemented

2. ES6 Classes 

* Modern alternative to constructorr function syntax
* Syntactic sugar 
* ES6 classes work exactly like construction functions
* They don't behave like classes in  classical OOP

3. Object.create

* The easiest and most straightforward way of linking an object to a prototype object

### 205. Constructor Functions and the New Operator

```
// Arrow function won't work because it won't have the `this` keyword
const Person = function(firstName, birthYear) {
    console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;

    // don't want to create thousands of copies of the same function, so that's where prototypes come in
} 

/*
new operator is very important 

1. New {} is created
2. function is created, (this is set to the function object)
3. newly created object is linked to prototype
4. function automatically returns {}
*/
const p = new Person('jonas', 1991');

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person); // true

```

### 206. Prototypes
Each and every function in javascript has a prototype object. 

```
// Prototypes
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

// now only one copy of this function for all person objects

console.log(jonas.__proto__ === Person.prototype); // jonas's prototype is the

console.log(Person.prototype.isPrototypeOf(jonas)); // person.prototype is the prototype of Jonas
console.log(Person.prototype.isPrototypeOf(Person)); // false 

// Can also set properties on the prototype 
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false
```

### 207. Prototypal Inheritance and the Prototype Chain

### 208. Prototypal Inheritance on Built-In Objects
```
console.log(jonas.__proto__.__proto__); // object prototype; top of the scope chain
console.dir(Person.prototype.constructor); //

const arr = [34, 541,243,34,54,123,421,];
console.log(arr.__proto__);

// Can add a new method to the prototype 
// Extending basically 

Array.prototype.unique = function() {
    return [...new Set(this)];
};

// THIS IS A BAD IDEA. DON'T NORMALLY DO THIS

```

### 210. ES6 Classes

```
// class Expression 
const PersonCl = class {}

// class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // THIS IS PROTOTYPAL INHERITANCE
    // so we're not creating multiple 
    // this looks a bit nicer.... so we like this a lot 
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

const jessica = new PersonCl('Jessica', 1996);

/*
1. Classes are NOT hoisted 
2. Classes are first-class citizens (i.e. passed into functions/returned from functions)
3. Classes are executed in strict mode
*/
```

### 211. Setters and Getters

```
// Getters and setters get and set values 

const account = {
    owner: 'John',
    movemenets: [200, 530, 130, 300]

    get latest() {
        return this.movements.slice(-1).pop();
    }

    set latest(mov) {
        this.movements.push(mov);
    }
};


console.log(account.latest); // don't need to call it. just want to retrieve
account.latest = 50;

// Classes also have getters and setters

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Not a name');
  }

  get fullName() {
    return this._fullName;
  }

  const walter = PersonalCl('Walter', 1965);


```

### 212. Static Method

```
Person.hey = function() {
    console.log('Hey there');
}

Person.hey(); // static and is chill
jonas.hey(); // FAILS - not inherited


or 

  static hey() {
    console.log(this);
  }

```


### 213. Object.create

```
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
```

### 315. Inheritance Between 'Classes': Constructor Functions

```
const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
```

Want to set the _proto_ of student.prototype to be person.prototype

Defining prototypes manually is exactly what Object.create does 

```

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
// Student.prototype = Person.prototype // DOES NOT WORK
// we want to INHERIT from it 

mike.calcAge(); // works great



```


### 217. Inheritance Between "Classes": ES6 Classes

```
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    calcAge() {
        console.log(2037 - this.birthYear)
    }

    greet() {
        console.log('Hey');
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ') this._fullName = name;)
        else alert(`${name} is not a full name`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there');
    }
}

class StudentCl extends PersonCl {
    // Need extends and super
    // `extends` links the prototypes
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }
}

const martha = new StudentCl('Martha Jones', 2012);
```

### 218. Inheritance Between "Classes": Object.create

```
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    console.log('Hi');
}


const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
```

### 219. Another Class Example

```
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        // Protected
        this._movements = []; // people on the team know this property isn't meant to be accessed
        this.locale = navigator.language;
    }

    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this.movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }

    _approveLoan(val) {
        // internal method
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
        }
    }
}

const acc1 = new Account('John', 'USD', 1111);

```

### 221. Encapsulation: Private Class Fields and Methods
Class fields. These are currently at Stage 3. 

* Public fields
* Private fields
* Public methods
* Private methods


```
class Account {
    // 1) Public fields
    locale = navigator.language;
    //_movements = []; // NOT on the prototype
    // fields are on the instances 

    // 2) Private fields
    #movements = []; // NOT on the prototype // the # means that it is actually private
    #pin;
    // now it is protected
    // google chrome supports these private class fields

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // Protected
        // this._movements = []; // people on the team know this property isn't meant to be accessed
        this.locale = navigator.language;
    }

    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }

    _approveLoan(val) {
        // internal method
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
        }
    }

    // Private methods
    // #approveLoan() // private class field, not as a method
    // doesn't work
}

const acc1 = new Account('John', 'USD', 1111);

```


### 222. Chaining Methods
```
class Account {
    // 1) Public fields
    locale = navigator.language;
    //_movements = []; // NOT on the prototype
    // fields are on the instances 

    // 2) Private fields
    #movements = []; // NOT on the prototype // the # means that it is actually private
    #pin;
    // now it is protected
    // google chrome supports these private class fields

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // Protected
        // this._movements = []; // people on the team know this property isn't meant to be accessed
        this.locale = navigator.language;
    }

    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }
    withdraw(val) {
        this.deposit(-val);
    }

    _approveLoan(val) {
        // internal method
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
        }
    }

    // Private methods
    // #approveLoan() // private class field, not as a method
    // doesn't work
}


acct1.deposit(300).deposit(500).withdraw(35).requestLoan(2500000).withdraw(4000);
```

### 223. ES6 Classes Summary
Complete. 

## Section 15: Mapty App: OOP, Geolocation, External Libraries, and More!

### 228. How to Plan a Web Project

1. `USER STORIES` - Description of the application from the user's perspective. Common format: "As a [type of user], I want an [action] so that a [benefit]".
2. `FEATURES` - Then map all of the user stories to specific features. 
3. `FLOWCHART` - WHAT we build. Build out the data flow and how this is all going to chain together. 
4. `ARCHITECTURE` - HOW we build it 
5. `Development Step` - implementation

### 229. Using the GeoLocation API

Very easy to use. See the code for most of these sections. 

## Section 16: Asynchronous JavaScript: Promises, Async/Await, and AJAX

### 243. Asynchronous JavaScript, AJAX, and APIs

* Synchronous 
    - Executed line by line
    - Thread of execution (part of execution context that executes code in the computer's CPU)
    - Each line of code waits for the previous line to finish
        + Alert statement is a long running operation block
* Asynch
    - after a task that runs in the background finishes
    - Code is non-blocking 
    - Callback functions alone do not make code asynch 
    
* What are AJAX calls?
    - Asynchronous JavaScript and XML:
        + Allows us to communicate with remote web servers in an asynch way 
        + With AJAX calls, we can request data from web servers dynamically 
* What is an API?
    - "Online" API
        + Application running on a server that receives requests for data and sends data back as response
        + We can build our own web APIs or use 3rd-party APIs
* AJAX normalyl uses XML but we prefer JSON these days


### 246. How the Web Works: Requests and Responses

Pass

### 247. Welcome to Callback Hell

* After the first call, make another call for the neighboring country
* Sequence of AJAX calls 

### 248. Promises and the Fetch API

* What are promises?
    - Promise: 
        + An object that is used as a placeholder for the future result of an asynch operation
        + OR
        + A container for an asynch delivered value 
        + OR
        + A container for a future value
    - We no longer need to rely oin events and callbacks passed into async functions
    - Instead of nesting callbacks, we can chain promises for a sequence of asynch operations 
* Promise LifeCycle
    - Pending (before the future value is available)
    - Settled (asynch task has finished)
        + Fulfilled (success)
        + Rejected (error)
        
### 249. Consuming Promises
* 

### 250. Chaining Promises


### 254. Asynchronous Behind the Scenes: The Event Loop

* How can asynchronous code be executed in a non-blocking way if there is only one thread of execution in the engine?
    - Asynchronous tasks run in the Web API
        + Not in the main thread of execution
        + NOT IN THE CALL STACK
    - Callback queue 
        + To do list of tasks that the call stack will have to do 
    - Event Loop Tick
        + Each time the event loop takes an action from the call stack
        + Coordination between call stack and the callback queue 
    - JavaScript language itself has no sense of time 
    - It's the runtime and the call stack
    - Engine starts
    - Microtasks queue
        + Like a callback queue but for callbacks related to promises 
        + Has **priority** over callback queue 
        

### 255. The Event Loop in Practice
```
console.log('Test start')
setTimeout(() =>console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');

// because microtask queue is given priority we will see the resolved promise line first

/*
Output:
Test start
Test end
Resolved promise 1 
0 sec timer

code outside any callback will get run first
*/
```

### 256. Building a Simple Promise

```
// This inner function is the executo function
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You win!');
  } else {
    reject('You lost!');
  }
});
```

### 259. Consuming Promises with Async / Await

### 260. Error Handling with try...catch

### 261. Returning Values from Async Functions

## Section 17: Modern Javascript Development: Modules and Tooling

### 267. An Overview of Modern JavaScript Development

* Development
    - Divide the projects into modules 
    - Can include 3rd party package
    - Node Package Manager
        + React, jQuery, Leaflet
* Build process
    - webpack or Parcel
    - Bundling 
        + Join all modules into one file
        + Important for performance 
    - Transpiling / polyfilling
        + This is done using a tool called Babel 
        + Convert modern JavaScript back to ES5
* Production
    - JavaScript Bundle
    - 


### 268. An Overview of Modules in JavaScript

* Module 
    - Reusable piece of code that encapsulates implementation details
    - Usually a standalone file, but doesn't have to me 
    - You can export and import values 
    - Imports (are the dependencies)
    - Exports (your public API)
    - Purpose
        + Compose software:
            * Small building blocks that we put together to build complex applications
        + Isolate components 
        + Abstract code
        + Organized code
        + Reuse code
        

* Native JavaScript ES6 Modules
    - ES6 Modules 
    - Modules are stored in files, exactly one module per file
    - Top level variables
        + ES6 module - scoped to module 
        + Script - global
    - Default mode
        + ES6 module - strict mode
        + Script - sloppy mode
    - Top level `this`
        + ES6 module - undefined
        + Script - window
    - Imports and exports
        + ES6 module - YES
        + Script - NO
    - HTML linking
        + ES6 module - `<script type="module">`
        + Script - `<script>`
    - File downloading
        + ES6 module - async
        + Script - sync

* How ES6 Modules are imported
    - Importing modules before execution
        + Imported synchronously 
        + Possible thanks to top level (static) imports, which make imports known before execution
        + This makes bundling and dead code eliminatino possible
    - Downloading happens in an async way
    - Linking imports to script exports
    - Things are just linked NOT copied
        + This is specific to ES6
    
### 276. Review: Writing Clean and Modern JavaScript

* Readable Code
    - Write so that others can understand it 
    - Write code so that you can understand it in 1 year
    - Avoid too clever and overcomplicated solutions
    - Use descriptive variable names: what they contain
    - Use descriptive funciton names: what they do
* General
    - Use DRY principle
    - Don't pollute global namespace, encapsulate 
    - Don't use var
    - Use strong type checks
* Functions
    - Functions should only do one thing
    - Don't use more than 3 function parameter
    - Use default parameters whenever possible
    - Generally, return same data type as received 
    - Use arrow functions when they make code more readable
* OOP
    - Use ES6 classes
    - Encapsulate data and don't mutate it 
    - Implement method chaining 
    - Do not use arrow functions as methods 
* Avoid Nested Code
    - Use early return (guard clauses)
    - Use ternary (conditional) or logical operators instead of if
    - Use multiple if instead of if / else if 
    - Avoid for loops, use array methods
    - Avoid callback based async APIS
* Asynchronous Code
    - Consume promises with async/await for best readability
    - Whenvever possible, run promises in parallel (`Promise.all`)
    - Handle errors and promise rejections
    

### 278. Declarative and Functional JavaScript Principles

* Two fundamentally different ways of writing code (paradigms)
    - Imperative 
        + Programmer explains "HOW to do things"
        + Every single step
        
```
const arr = [2,4,6,8];
const doubled = [];
for (let i = 0; i < arr.length; i++) doubled[i] = arr[i]*2;
```
* Versus
    - Declarative 
        + Programmer explains "WHAT to do"
        + We describe the way the computer should achieve the result 
        + The HOW step by step instructions get abstracted away
        + Example:
            * Description of a cake 

```
const arr = [2,4,6,8];
const doubled = arr.map(n = n*2);
```

* Subparadigm 
    - Functional Programming 
        + Declarative programming paradigm
        + Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data
        + Side effect: Modification (mutation) of any data outside of the function (mutating external variables, logging ot console, writing to DOM)
        + Pure function: Function without side effects. Does not depepnd on external variables. Given the same inputs, always returns the same outputs.
        + Immutability: State(data) is never modified! Instead, state is copied and the copy is mutated and returned. 

* You can mix paradigms 
    - Functional programming techniques
        + Try to avoid data mutations 
        + Use `built-in` methods that don't produce side effects
        + Data transformations (.map, .filter, .reduce)
        + Try to avoid side effects in functions
    - Declarative syntax 
        + Use array and object destructuring
        + Use the spread operator
        + Use the ternary operator
        + Use template literals 

### 279. Let's Fix Some Bad Code: Part 2

```
const spendingLimits = Object.freeze({
    'john': 1500,
    'matilda': 100,
});

// This makes the object totally immutable 
// we can make arrays immutable also from doing this
// Not a "DEEP" freeze, because we can still change objects inside 
// So it's shallow basically 
```

## Section 18: Forkify App: Building a Modern Application

### 282. Project Overview and Planning (I)

ALL NOTES ARE GOING TO BE IN THE CODE. Ok... I lied.

### 286. The MVC Architecture

* Business Logic
    - Code that solves the actual business problem
    - Directly related to what business does nad what it needs
* State
    - Essentially stores all the data about the application
    - Should be the singile source of truth
    - UI should be kkept in sync with the state
    - State libraries exist
* HTTP Library
    - Responsible for making and receiving AJAX requests
    - Optional but almost always necessary
* Application Logic (Router)
    - Code that is only concerned about the implementation of application itself
    - Hadnles navigation and UI events
* Presentation Logic (UI Layer)
    - Code that is concerned about the visible part of the app
    
* Model View Controller 
    
### 289. Event Handlers in MVC: Publisher - Subscriber Pattern

* Events should be handled in the controller
* Events should be listened for in the view

* RecipeView
    - addHandleerRender() // user clicks search result
* controlRecipes will be passed into addHandlerRender when program starts
* addHandlerRender listens for events and uses contrlRecipes as callback


### 305. Wrapping Up: Final Consideration

* Documentation:
    - Use JSDoc


## Section 19: Setting up Git and Deployment

### 308. Simple Deployment with Netlify
