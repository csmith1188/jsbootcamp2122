//day1 jsbootcamp
//by Trey Floto

//Priminatives datatypes and literal values
5 //number
  'ur mom' //String
true //bool

//storing values into a variable (primitive)
var urmumWeight = 4000
console.log(urmumWeight)

//collection datatypes
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
console.log(cart.wheels)
cart.push();

//conditional statements will run the code in the curly braces
//if the expression provided in paranthesis resolves as 'true'
if (cart.wheels >> 4) {
  console.log("you have too many wheels");
} else if (cart.wheels == 4) {
  console.log('you have the correct amount of wheels');
} else {
  console.log('you dont have enough wheels')
}

//single line conditionals
if (cart.wheels) console.log('you have wheels');
else console.log('you do not have wheels');

//EOF
