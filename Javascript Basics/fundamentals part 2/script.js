// STRICT MODE ===============
// activate strict mode to write secure code and point out errors
"use strict";

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive!');

// points out reserved variable names
// const interface = "Audio";
// const private = 455;

// FUNCTIONS ================
function logger() {
    console.log("My name is Jessica");
}
// calling, running or invoking the function
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

//FUNCTION DECLARATIONS VS EXPRESSIONS ================
// function declaration => can be called before function is defined
function calcAge1(birthYear){
    return 2037 - birthYear;
};

const age1 = calcAge1(1991);
console.log(age1)

//function expression, produces a value - anonymous function
// needs to be declared before callling it
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2)

// ARROW FUNCTIONS ===============
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// how many years left until retirement
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
    // return retirement
}
console.log(yearsUntilRetirement(1991, "Jo"))
console.log(yearsUntilRetirement(1980, "Bob"))

//FUNCTIONS CALLING FUNCTIONS ==============
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples); // 8
    const orangePieces = cutFruitPieces(oranges); // 12

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2,3));

// REVIEWING FUNCTIONS ==============
const calcAge = function(year){
    return 2037 - year;
}
const yearsUntilRetirement1 = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retired in ${retirement}`)
        return retirement;
    } else {
        return -1
    }
}
// return `${firstName} retires in ${retirement} years`
console.log(yearsUntilRetirement1(1991, "Jonas"));
console.log(yearsUntilRetirement1(1950, "Mike"));

// ARRAYS FUDAMENTALS===================================
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends)
// OR
const years = new Array (1991, 1984, 1356);

//get first element
console.log(friends[0]);
console.log(friends[2]);
//number of elements in the array
console.log(friends.length)
//get the last element of the array
console.log(friends[friends.length -1])

// replace 3rd element of array
friends[2] = "Jay";
console.log(friends)

const first = "Jonas"
const jonas = [first, 2037-45, "cool", friends]
console.log(jonas);

//example
const calcAge4 = function(year){
    return 2037 - year;
}
const yearsArray = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAge4(yearsArray[0]);
const age5 = calcAge4(yearsArray[1]);
const ageLast = calcAge4(yearsArray[yearsArray.length -1]);

console.log(age4, age5, ageLast);

const ages = [calcAge4(yearsArray[0]), calcAge4(yearsArray[1]), calcAge4(yearsArray[yearsArray.length -1])];
console.log(ages)

// BASIC ARRAY METHODS ===================
const friends1 = ["Michael", "Steven", "Peter"];
// add at the end of the array = PUSH
const newLength = friends1.push("Laura");
console.log(friends1);
console.log(newLength)
// add at the front of the array = UNSHIFT
const newLength1 = friends1.unshift("John");
console.log(friends1);
//remove last element of array = POP
const popped = friends1.pop();
console.log(popped);
//remove first element of array = SHIFT
friends1.shift()
console.log(friends1)
//return index of element
console.log(friends1.indexOf("Michael"));
// es6 method INCLUDES returns true or false
// checks of the value exists, in a strict way ===
console.log(friends1.includes("Michael"));

if(friends1.includes("Peter"))console.log("You have a friend named Peter");

// OBJECTS ======================
const jonasObject = {
    firstName: "Jonas",
    lastName: "Schwartsman",
    age: 2037-1991,
    job: "teacher",
    friends2: ["Michael", "Peter", "Steven"]
};
console.log(jonasObject)
// Dot vs Bracket notation ==========
// get lastName property value
console.log(jonasObject.lastName);
// with brackets we can use an expression
console.log(jonasObject["lastName"]);
const nameKey = "Name";
console.log(jonasObject["first" + nameKey]);
console.log(jonasObject["last" + nameKey])

// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstname, lastname, age, job and friends")
const interestedIn = ";"
if(jonas[interestedIn]){
    console.log(jonasObject[interestedIn]); //  will return teacher
} else {
    console.log("Wrong request! choose between existing options")
}
// add new properties
jonasObject.location = "Portugal";
jonasObject["twitter"] = "@jonas";
console.log(jonasObject);
//Challenge
// write "Jonas has 3 friends , and his best friend is called Michael"
console.log(`${jonasObject.firstName} has ${jonasObject.friends2.length} friends, and his best friend is
called ${jonasObject.friends2[0]}`);

// OBJECT METHODS ==================
const jonasObject1 = {
    firstName: "Jonas",
    lastName: "Schwartsman",
    birthYear: 1993,
    job: "teacher",
    friends2: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,
    // calcAge5: function(birthYear) {
    //     return 2037 - birthYear
    // }
        calcAge5: function() {
            // console.log(this);
            this.ageNew = 2037 - this.birthYear
            return this.ageNew
    },
    getSummary: function() {
        return console.log(`${this.firstName} is a ${this.calcAge5()} yo ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`)
    }
};

console.log(jonasObject1.ageNew);

//Challenge "Jonas is a 46 yo teacher, and he has a driver's license"
console.log(jonasObject1.getSummary())

// THE FOR LOOP ==============================
console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");
console.log("Lifting weights repetition 4");
console.log("Lifting weights repetition 5");
console.log("Lifting weights repetition 6");
console.log("Lifting weights repetition 7");
console.log("Lifting weights repetition 8");
console.log("Lifting weights repetition 9");
console.log("Lifting weights repetition 10");

// starting count, condition, increment
// for loop keeps running while condition is true
for (let i = 1; i <= 10; i ++){
    console.log(`Lifting weights repetition ${i}`)
}

// LOOPING ARRAYS BREAKING AND CONTINUING
const jonasArray = [
    "Jonas", "Schmidt", 2037 - 1991, "teacher", ["Michael", "Peter", "Steven" ], true
];
const types = [];
// log all elements of the jonas array
for (let i=0; i <= jonasArray.length -1; i++){
    console.log(jonasArray[i]);
    // fill types array with all types
    types[i] = typeof jonasArray[i];
    // use push method
    types.push(typeof jonasArray[i]);
    console.log(types)
}

const birthYears = [1991, 2007, 1969, 2020];
const agesArray = [];
// calculate ages for all birth years
// store to an array

for (let i = 0; i <= birthYears.length -1 ; i ++){
    const age = 2037 - birthYears[i];
    agesArray.push(age);
    console.log(agesArray)
}
// continue and break ======================
console.log("PRINT ONLY STriNGS");
for (let i=0; i <= jonasArray.length -1; i++){
    if( typeof jonasArray[i] !== "string") continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
// after a number is found, nothing else should be printed
console.log("BREAK AFTER FIRST NUMBER IS FOUND");
for (let i=0; i <= jonasArray.length -1; i++){
    if( typeof jonasArray[i] === "number") break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

//LOOPING BACKWARDS AND LOOP INSIDE A LOOP =============
const jonasArray1 = [
    "Jonas", "Schmidt", 2037 - 1991, "teacher", ["Michael", "Peter", "Steven" ]
];
for( let i = jonasArray1.length-1; i >=0; i--){
    console.log(i, jonasArray1[i])
}
// loop inside a loop
// 3 exercises and loop 5 times for each exercise
for (let exercise = 1; exercise <= 3; exercise ++){
    console.log(`Starting exercise ${exercise}`);
    for (let i = 1; i<= 5; i++){
        console.log(`Exercise ${exercise}: Lifting weights repetition${i}`)
    }
};

// WHILE LOOP ==================
// for (let i = 1; i <= 10; i ++){
//     console.log(`Lifting weights repetition ${i}`)
// };
// while loop does not need a starting counter, just condition
let rep = 1
while (rep <= 10) {
    console.log(`WHILE LOOP: Lifting weights repetition ${rep}`);
    rep ++;
};
// Math.random () => random number between 0 and 6
// Math.trunc() => to get rid of decimals, num between 0 and 5, and +1 to reach 6
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)
while( dice !== 6){
    console.log(`You rolled a ${dice} `)
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log("Loop is about to end")
}