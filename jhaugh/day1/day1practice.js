// Day 1 JS Bootcamp
// by Jaysin Haugh

// Primitives Datatype and Literal Values
5 //Number
  'ur mum' // String
true //bool

// Storing values into a variable (Primitive)
var urmumweight = 4000
console.log(urmumweight)
// Collection Datatypes
// Arrays are ordered lists
var groceries = ['milk', 'bread', 'eggs'];
console.log(groceries[1]);
//Objects can act like unordered lists (Dictionaries)
var cart = {
  wheels: 4,
  push: () => {
    console.log("Going forward");
  }
}
console.log(cart.wheels);
cart.push();

// Conitional statements will run the code in the curly braces
// If the expression provided in paranthesis resolves as 'true'
if (cart.wheels > 4) {
  console.log("You have too many wheels");
} else if (cart.wheels == 4) {
  console.log("You have the correct number of wheels");
} else(cart.wheels < 4) {
  console.log("You have not enough wheels");
}
