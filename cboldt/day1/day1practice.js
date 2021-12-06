// Day 1 JS Bootcamp
// by Christian Boldt, the absolute god man

// Primitive Datatypes and Literal values
5 //Number
  'ur mum' //String
true //boolean

//Storing values into a variable (primitive)
var urmumWeight = 4000;
console.log(urmumWeight);

//Collection Datatypes
//Arrays are ordered lists
var groceries = ['milk', 'bread', 'eggs'];
console.log(groceries[1]);
//objects can act like unordered lists (dictionaries)
var cart = {
  wheels: 4,
  push: () => {
    console.log("going forward");
  }
}
console.log(cart.wheels);
cart.push();

//conditional statements will run the code in the curly braces
//if the expression provided in paranthesis resolves as 'true'
if (cart.wheels > 4) {
  console.log("You have to many wheels");
} else if (cart.wheels == 4){
  console.log("You have the right amount of wheels!");
} else {
  console.log("You do not have enough wheels");
}

//single line conditionals
if (cart.wheels) console.log("You have wheels");
else console.log("You do not have wheels");


//EOF
