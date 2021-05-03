//CODING CHALLENGE 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 105;
const johnHeight = 1.88;

// BMI CLACULATION = mass / (height * height)
let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);

let markHigherBmi = markBmi > johnBmi;

console.log (markBmi, johnBmi, markHigherBmi);

//CODING CHALLENGE 2
if (markBmi > johnBmi) {
    console.log (`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
} else {
    console.log (`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`)
}

//CODING CHALLENGE 3
// 1 teams average
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas =  (88 + 91 + 110) / 3;
console.log(averageDolphins, averageKoalas);
// 2 compare scores to see who wins
if (averageDolphins > averageKoalas) {
    console.log("The Dolphins win!")
} else if (averageKoalas > averageDolphins) {
    console.log("The Koalas win!")
} else {
    console.log("There is a draw! Both teams win")
}
// 3 Bonus 1
const averageDolphinsBonus1 = (97 + 112 + 101) / 3;
const averageKoalasBonus1 =  (109 + 95 + 123) / 3;
console.log(averageDolphinsBonus1, averageKoalasBonus1);
if (averageDolphinsBonus1 > averageKoalasBonus1 && averageDolphinsBonus1 >= 100) {
    console.log("The Dolphins win!")
} else if (averageKoalasBonus1 > averageDolphinsBonus1 && averageKoalasBonus1 >= 100) {
    console.log("The Koalas win!")
} else {
    console.log("Both teams win this time")
}
//4 Bonus 2
const averageDolphinsBonus2 = (97 + 112 + 101) / 3;
const averageKoalasBonus2 =  (109 + 95 + 106) / 3;
console.log(averageDolphinsBonus2, averageKoalasBonus2);
if (averageDolphinsBonus2 === averageKoalasBonus2 && (averageDolphinsBonus2 >= 100 && averageKoalasBonus2 >= 100 )) {
    console.log("There is a draw, both teams win!")
} else {
    console.log("No one wins the trophy")
}

//CODING CHALLENGE 4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`)