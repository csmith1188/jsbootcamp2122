// Day 1 JS Bootcamp
// by: Aidan Hamme

// Primitives Data Types and Literal Values
5  // Number
'ur mum'  // String
true  // Bool

// Stroing Values into a variable (primitive)
var urmumWeight = 4000;
console.log(urmumWeight);

// Collection Data Types
// Arrays are ordered lists
var groceries = ['milk','bread','eggs'];
console.log(groceries[1]);
// Objects can act like unordered lists (Dictionaries)
var cart = {
  wheels: 4,
  push: () => {
    console.log('Going Forword');
  }
}
console.log(cart.wheels);
cart.push()

// Conditional Statements will run the code in the {} if the expression provided in () results as true.
if (cart.wheels > 4) {
  console.log("You have too many wheels");
} else if (cart.wheels == 4) {
  console.log("You have the correct number of wheels");
} else {
  console.log("You do not have enough wheels");
}

// Single Line Conditional
if (cart.wheels) console.log("You have wheels");
else (cart.wheels) console.log("You don't have wheels");

//EOF
