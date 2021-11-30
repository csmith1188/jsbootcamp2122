// Day 1 js bootcamp
// by Will Shealer

// Primitives Values and Litteral Values
 5 //Number
 'ur mom' //String
 true //bool

// Storing values into a variable (primitive)
var urmomWeight = 69420;
console.log(urmomWeight)

//Collection Datatypes
// Arrays are orderd lists
var groceries = ['milk', 'bread', 'eggs'];
console.log(groceries[1]);
//objects can act like unorderd lists (dictonaries)
var cart = {
wheels: 4,
  push: () => {console.log("going forward");}
}
console.log(cart.wheels);
cart.push();

//Condititonal statements will run the code in the curly braces
//if the expression provided in paranthesis resolves as 'true'
if (cart.wheels >= 4) {
  console.log("you have to many wheels");
} else if (cart.wheels == 4) {
  console.log("you have the correct number of wheels");
} else if {
  console.log("you do not have enough wheels");
}

//single line conditionals
if (cart.wheels) console.log("you have wheels");
else console.log("you do not have wheels");
