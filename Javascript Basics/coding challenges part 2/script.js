// CODING CHALLENGE 1
// write an arrow function that calculates average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// use calcAverage to calculate average for both teams
let dolphinsAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);
console.log(dolphinsAverage, koalasAverage);
// create function checkwinner that takes av score of each teams as parameters and logs winner to console
// a team only wins if it has double the average score of the other team

const checkWinner = function (dolphinsAverage, koalasAverage) {
  if (dolphinsAverage >= koalasAverage * 2)
    console.log(`Dolphins win (${dolphinsAverage} vs. ${koalasAverage})`);
  else if (koalasAverage >= dolphinsAverage * 2)
    console.log(`Koalas win (${koalasAverage} vs. ${dolphinsAverage})`);
  else {
    console.log("No team wins this time!");
  }
};

checkWinner(dolphinsAverage, koalasAverage);
checkWinner(43, 678);

dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);
checkWinner(dolphinsAverage, koalasAverage);

// CODING CHALLENGE 2
// calcTip function
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(100));
//create bills array
const bills = [125, 555, 44];
// create tips array with tip for each bill
const tipsArray = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tipsArray);
//BONUS
const total = [
  bills[0] + tipsArray[0],
  bills[1] + tipsArray[1],
  bills[2] + tipsArray[2],
];
console.log(total);

// CODING CHALLENGE 3
// for mark and john create objects
// create calcBMI method with new bmi property
const markObj = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnObj = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
markObj.calcBMI();
johnObj.calcBMI();
console.log(markObj.bmi, johnObj.bmi);

// console.log who has the higher bmi
const hasHigherBmi =
  markObj.calcBMI() > johnObj.calcBMI()
    ? `${markObj.fullName}'s BMI (${markObj.calcBMI()}) is higher than ${
        johnObj.fullName
      }'s (${johnObj.calcBMI()})`
    : `${johnObj.fullName}'s BMI (${johnObj.calcBMI()}) is higher than ${
        markObj.fullName
      }'s (${markObj.calcBMI()})`;

console.log(hasHigherBmi);

// CODING CHALLENGE 4
// create a bills array
const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];
// create arrays for tips and totals
// use calcTip function to calcute tips and total values
// add to tips and totals arrays
// const calcTip = function(bill){
//   return bill>= 50 && bill<=300 ? bill * 0.15 : bill * 0.2
// };

for (let bill = 0; bill <= billsArray.length - 1; bill++) {
  let tip = calcTip(billsArray[bill]);
  tips.push(tip);
  let total = tip + billsArray[bill];
  totals.push(total);
  console.log(
    "BILLS ARRAY",
    billsArray,
    "TIPS ARRAY",
    tips,
    "TOTALS ARRAY",
    totals
  );
}
// console.log("TOTALS ARRAY", totals)
const calcAverageNew = function (arr) {
  // calculate average of all numbers in the arr
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    // add all elements of the array
    sum += arr[i];
  }
  // divide by the number of total elements
  return sum / arr.length;
};

console.log(calcAverageNew([2, 3, 7]));
console.log(calcAverageNew(totals));
console.log(calcAverageNew(tips));

// CODING CHALLENGE TEMPERATURE
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]}C in ${i + 1} days`;
  }
  console.log(str);
};
printForecast([17, 21, 23]);
