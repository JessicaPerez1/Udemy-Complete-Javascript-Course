//VARIABLES AND DATATYPES========
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = "Teacher";
console.log(job);


//variable mutation
age = "twenty eight";
job = "driver";
// alert(
//   firstName +
//     "is a " +
//     age +
//     " year old " +
//     job +
//     ". Is he married? " +
//     isMarried
// );

// var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);

//BASIC OPERATORS ===================
var year, yearJohn, yearMark;

year = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = year - ageJohn;
yearMark = year - ageMark;
console.log(yearJohn);

console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

//LOGICAL OPERATORS
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);
//result will be false in console

//TYPEOF OPERATOR
console.log(typeof johnOlder);
console.log(typeof ageJohn);

//OPERATOR PRECEDENCE

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
//Multiple operators
// minus will be executed first before the superior or equal
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average); //32

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 //32 - 6 // 26
console.log(x, y); //26, 26

//More operators
x = x * 2;
x *= 2;
console.log(x); //32
x += 10; // 65
//Increment
x = x + 1;
x += 1;
x++;


//TYPE CONVERSION AND TYPE COERCION =============
var firstName = "John";
const birthYear = 1991;
const yearNew = 2019;
var age = 28;
//type coercion: 28 that is an integer was converted to a string
console.log(firstName + " is " + age);
// 23 and 10 are converted to integers automatically
console.log("23" - "10" - 3)
// 3 will be converted to a string
console.log("23" + "10" + 3)
// converted to numbers
console.log("23" * "10")
// converted to integers, will return true
console.log("23" > "10")

var job, isMarried;
job = "teacher";
isMarried = false;

// TYPE CONVERSION 
const inputYear = "1991";
// convert string 1991 into number 1991
console.log(Number(inputYear), inputYear);
//convert 23 to a String
console.log(String(23))

// CONCATINATION
console.log(
  firstName +
    "is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

//EASIER THAN CONCAT => STRINGS AND TEMPLATE LITERALS
const johnNew = `I'm ${firstName}, a ${yearNew - birthYear} year old ${job}`;
console.log(johnNew)
// MULTI LIGN STRING
console.log("String with \n\
multiple \n\
lines");

// MULTI LINE STRING WITH TEMPLATE LITERALS
console.log(`String
with
multiple
lines`);

//CONTROL STRUCTURES => IF ELSE STATEMENTS
const newAge = 15;

if (newAge >= 18){
  console.log(`Sarah can start driving licence 🚗`)
} else {
  const yearsLeft = 18 - newAge;
  console.log(`Sarah is too young, wait another ${yearsLeft} years :)`)
}

const newBirthYear = 2012;
let century;
if (newBirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century)

// TRUTHY AND FALSY VALUES =======================
// 5 FALSY VALUES when convertd to a boolean: 0, '', undefined, null, NaN
// anything else will be tru when converted to a boolean

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); //false
console.log(Boolean("Jonas")); //true
console.log(Boolean({}));//true
console.log(Boolean(""));//false

const money = 0; // false
// const hasMoney = 100 // true

if (money) {
  console.log("Don't spend it all")
} else {
  console.log("You should get a job!")
}

let height; // falsy value
// let heightZero = 0 // falsy value
// let heightTrue = 125 // truthy value
if(height) {
  console.log("YAY height is defined")
} else {
  console.log("Height is not defined :(")
}

// EQUALITY OPERATORS ====================

// === strict equality operator => does not perform type coercion
// == loose equality operator => does perform type coercion
const ageNew = 18;
if(ageNew === 18) console.log("You just became an adult! (strict operator)");
if(ageNew == 18) console.log("You just became an adult! (loose operator)");

// "18" === 18 => false
// "18" == 18 => true
// WHEN COMPARING VALUES ALWAYS USE === and perfomr type coercion beforehand if needed

// const favorite = prompt("What is your fav number?"); // favorite is a string
const favoriteNum = Number(prompt("What is your fav number?")); /// favoriteNum is an integer
console.log(typeof favorite);

if(favoriteNum === 23){ // "23" == 23 => true, but "23" === 23 => false because favorite is a string
  console.log("Cool 23 is an amazing number!")
} else if (favoriteNum === 7) {
  console.log("7 is also a cool number")
} else if(favoriteNum === 9) {
  console.log("9 isnt too bad of a number")
} else {
  console.log("Number is not 23 or 7 or 9")
}
// different operator
if(favoriteNum !== 23) console.log("Why not 23?");

// BOOLEAN LOGIC ===================
// AND OPERATOR => true if all are true
// OR OPERATOR => tue if at least 1 is true
// NOT OPERATOR
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const isTired = false;
console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!")
} else {
  console.log("Someone else should drive...")
};

//SWITCH STATEMENT
const day = "friday";

switch(day) {
  case "monday" : // day === monday
    console.log("Plan my course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday" :
    console.log("Prepare theory videos");
    break;
  case "wednesday" :
  case "thursday" :
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday" :
    console.log("Enjoy the weekend")
    break;
  default:
    console.log("Not a valid day")
}
// same example with else/if statement
if (day === "monday") {
  console.log("Plan my course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend")
} else {
  console.log("Not a valid day")
}
// STATEMENTS AND EXPRESSIONS
// statement does not produce a value
// expressions produce a value
3 + 4 // expression
1971 // expression
true && false && !false // expression

if (23 >10) {
  const str = "23 is bigger"
} // statement

// CONDITIONAL / TERNARY OPERATOR
const ageLast = 23;
// ageLast >= 18 ? console.log("I like to drink wine") : console.log("I can only drink juice");

const drink = ageLast >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
//with else if statement
if(age >= 18) {
  drink2 = "wine"
} else {
  drink2 = "water"
}
console.log(drink2)

// ternary operator can be used in a template literal because its an expression
console.log(`I like to drink ${ageLast >= 18 ? "wine" : "water"}`)
