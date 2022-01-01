/*
Improving tip calc


*/

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
const calcTip = function (billAmt) {
    return billAmt >= 50 && billAmt <= 300 ? billAmt * 0.15 : billAmt * 0.20;
}

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = []
totals = []

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);
console.log(`Average total: ${calcAverage(totals)}`);