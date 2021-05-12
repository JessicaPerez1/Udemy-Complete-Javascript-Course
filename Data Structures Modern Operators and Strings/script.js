"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "20:00",
    adress,
    starterIndex = 1,
    mainIndex = 0,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Heres is you delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// call the method orderDelivery and passing in the object
// the keys specified below are destructured line 26
// this makes it easy to then update the values below without having to touch the orderDelivery method line 26
restaurant.orderDelivery({
  time: "22:30",
  adress: "Via del Sol 21",
  mainIndex: 2,
  starterIndex: 2,
});
// here we dont define mainIndex and time, but because we have default values in the method line 26, it will return those default values
restaurant.orderDelivery({
  adress: "Via del Sol 21",
  startIndex: 1,
});
// DESTRUCTURING OBJECTS ====================
// specify the exact propery name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// change the object's key names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values ====>
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 13 };

// to descturcutr a and b from obj, all needs to be wrapped by parenthesis
// because we already have let=a and let=b declared above
({ a, b } = obj);
console.log(a, b);

// Nested Objects
// we destructured openingHours already line 30
// we are retrieving friday info in the openingHours object
// then we are destructuring each info open and close
const {
  // reassign open to be o, and close to be c
  fri: { open: o, close: c },
} = openingHours;
console.log(open, close);

// // DESTRUCTURING ARRAYS ====================
// // extract 2 first elements from categories array inside restaurant
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // switch places into the array
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // add a order method to the restaurant object
// //that will return element at index i from starter menu and element at index i for main menu
// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // NESTED ARRAYS
// const nested = [2, 4, [5, 6]];
// // let [first, , third] = nested;
// const [first, , [third, forth]] = nested;

// // Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // returns 8, 9 and undefined because no value at position r

// SPREAD OPERATOR ==================
const arr = [7, 8, 9];
// spread operator takes ALL elements out of the arr and extract each element individually
const newArr = [1, 2, ...arr];
console.log(newArr); // returns newArr [1, 2, 7, 8, 9]
console.log(...newArr); // returns 1 2 7 8 9 => all elements individually

const newMenu = [...restaurant.mainMenu, "Gnocci"];
// this creates a new array
console.log(newMenu);

// 2 important features
// creating a copy array, similar to Object.assign()
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays
const newMenu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newMenu1);

// Iterables: arrays, strings, maps and sets but NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

// function that accepts multiple arguments and use spread operator to pass the arguments
// build an array with the 3 ingredients
const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt("Ingredient 2?"),
  //   prompt("Ingredient 3?"),
];
console.log(ingredients);
// call the orderPasta method
restaurant.orderPasta(...ingredients);

// spread operator also works on Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name); // returns "Ristorante Roma"
console.log(restaurant.name); // returns "Classico Italiano"

// REST PATERN AND PARAMETER ====================
// IN ARRAYS
// opposite of spread, REST is to pack elements into an array
// this is a SPREAD OPERATOR because on the right of == sign
const arrRest = [1, 2, ...[3, 4]];
// REST OPERATOR, because on the left of the == sign
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others); // returns 1, 2, [3, 4, 5]

// REST OPERATOR is always the last in the array because it takes the remaining elements
// there can only 1 REST in each array
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// IN OBJECTS
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// Functions and REST OPERATOR
// REST ARGUMENTS = this is compressing all numbers in an array
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 5, 87, 21, 90, 34, 56, 7, 2);

const z = [23, 5, 7];

add(...z);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

// SPREAD used where values would be seperated by a coma
// REST where we would write variables names seperated by a coma

// MODERN OPERATORS =========================
// OR OPERATOR =====> returns the FIRST TRUTHY VALUE, or the LAST FALSY value if all is false
// Logical operators can: use any datatype , return any datatype, they do short circuit evaluation: if 1st value is truthy, it will return it right away
console.log("=======OR =========");
console.log(3 || "Jonas"); // 3
console.log("" || "Jonas"); // "Jonas"
console.log(true || 0); // true
console.log(undefined || null); // undefined is falsy, null is falsy, null is returned

console.log(undefined || 0 || "" || "Hello" || 23 || null);
// undefined, 0 and "" are falsy
// will return "Hello" because it's the 1st truthy value

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // returns 10 because numGuests doesnt exist

//with short circuit
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // returns 10 if numGuests is not defined

// AND OPERATOR =====> returns the 1st FALSY value or LAST VALUE if all is TRUTHY
console.log("=======AND =========");
// does the opposite of or operator

console.log(0 && "Jonas"); // returns 0
console.log(7 && "Jonas"); // "Jonas"

console.log("Hello" && 23 && null && "jonas"); // returns null

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
// can write if statement this way
restaurant.orderPizza && restaurant.orderPizza("mushroom", "Spinach");

// THE NULLISH COALLESCING OPERATOR (??)===============
// TO USE WHEN A VALUE IS EQUAL TO 0
restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest); // returns 10 because numGuests is 0 which is a falsy value

// the below fixes the issue of having a value equal to 0
// nullish values are null and undefined
//this means ONLY if the 1 st value is null or undefined, then the 2nd value would log
// in the example below, the 1st value is falsy becasuse it's 0 (not NULL or UNDEFINED)
// which means this will log the 1st value
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
