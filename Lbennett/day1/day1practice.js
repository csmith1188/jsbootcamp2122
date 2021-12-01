// day 1 js bootcamp
// by leniece b

// primitives datatypes & literal values
5 //number
'ur mom' //string
true //bool

//storing values into a variable
var urmumWeight = 4000;
console.log(urmumWeight);

// collection datatypes
// arrays are ordered lists
var groceries = ['milk', 'bread', 'eggs'];
console.log(groceries[1]);
// objects can act like unordered lists (dictionaries)
var cart = {
  wheels: 4,
  push: () => {
    console.log('going forward');
  }
}
console.log(cart.wheels);
cart.push();

//conditional statements that will run the code in the curly braces
//if the expression provided in paranthesis resolves as 'true'
if (cart.wheels > 4) {
  console.log('you have 2 many wheels')
} else if (cart.wheels == 4) {
   console.log('you have the correct number of wheels')
} else {
  console.log('you dont have enough wheels')
}

//single line conditions
if (cart.wheels) console.log('you have wheels')
else console.log('you do not have wheels')
