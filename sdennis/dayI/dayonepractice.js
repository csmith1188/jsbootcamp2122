// Day 1 JS Bootcamp
// By Saimye Dennis

// Primitives Datatypes and literal values
5 //Number
'ur mum' //String
true   //bool

//storing values into a variable(primitive)
var  urmumWeight = 4000;
 console.log(urmumWeight);

// Collection Datatypes
// Arrays are ordered lists
var groceries = ['milk','bread','eggs'];
console.log(groceries[1]);
//objects can act like unordered lists (dictionaries)
var cart ={
  wheels:4,
  push : () =>{
    console.log("going forward");
  }
}
console.log(cart.wheels);
cart.push();

//conditionals statements will rin the code in the curly braces
// if the expression provided in paranthesis resolves as 'true'
if (cart.wheels > 4){
  console.log("You have to many wheels");
} else if (cart.wheels == 4){
  console.log("You have the correct amount of wheels");
} else { (cart.wheels < 4)
  console.log("You dont have enough wheels");
}

//single line conditions
if (cart.wheels) console.log("you have wheels");
else  (cart.wheels) console.log("you do not have wheels");



//EOF
