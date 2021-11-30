//Day 1 JS Bootcamp
// by Jason Lara

// Primitives Datatypes and Literal Values
5 //number
  "hey" // String
true //bool

for
// storing values into a variable (primitives)
var hey = 20;
console.log(hey)

//Collection Datatypes
//array are ordered lists
var groceries = ['milk', 'bread', 'eggs'];
console.log(groceries[1]);
//Objects can act like unordered lists ( disctionaries)
var cart = {
  wheels: 4,
  push: () => {
    console.log("going forwards")
  }
}
console.log(cart.wheels);
cart.push();

// conditional statements will run the code in the curly braces
//if the expression provide in paranthesis resolves as "true"
if (cart.wheels > 4) {
  console.log("you have tooooo many wheels")
} else if (cart.wheels == 4) {
  console.log("you have wheels")
} else {
  console.log(" GET MORE WHEELS")
}
//single line conditionals
if (cart.wheels) console.log("you have wheels")
else console.log(" you do not have wheels");
