//Day 1 JS Bootcamp
//by Logan Hiller

//Primitave Datatypes and Literal Values
5 //Number
  'ur mum' //String
true //bool

// Storing values into a variable (primitive)
var urmumWeight = 4000;
console.log(urmumWeight);

//Collection Datatypes
//Arrays are ordered lists
var groceries = ['milk', 'bread', 'eggs'];
console.log(groceries[1]);
//Objects can act like unordered lists (dictionaries)
var cart = {
  wheels: 4,
  push: () => {
    console.log("going forward");
  }
}
cart.push();


//conditional statements will run the code in the curly braces
//if the expression provided in paranthesis resolves as 'true'
if (cart.wheels >= 4) {
  console.log("You have sufficient wheels");
} else if (cart.wheels == 4) {
  console.log("You have the correct number of wheels")
} else {
  console.log("You do not have enough wheels");
}

//Single line consitionals
if (cart.wheels) console.log("You have wheels");
else (cart.wheels) console.log("You do not have wheels");

//EOF
