// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. It's usual to tip 15% if the bill is between 50 adn 300. If not, then tip 20%. 

1. Calculate the tip depending on the bill value. Use a ternary operator. 
2. Print the bill value, tip, and final value. 

Test data: 275, 40, and 430
*/

const billAmt = 40;

const tipPct = billAmt >= 50 && billAmt <= 300 ? 0.15 : 0.2;
const tipAmt = tipPct * billAmt;
const totalDue = tipAmt + billAmt;
console.log(
  `Total: ${totalDue}; Bill Amount: ${billAmt}; Tip Amount: ${tipAmt}`
);

var x = 1;
for (var i = 0; i < 3; i++) {
  x += 5 * i;
}
console.log(x);

/*
1 + 0
1 + 5
6 + 10
*/
