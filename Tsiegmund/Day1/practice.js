//Day 1 Jsbootcamp
//By Tyler Siegmund

// Primitive datatypes and literal values
5 //Number!!!!
'hello' //a string
true //boolean

//storing values into a variable (Primitive)
var number = 5;
//console.log(number)

//collection datatypes
//Arrays are ordered lists
var groceries = ['milk','bread','eggs']
console.log(groceries[2])
//objcts can act like unordered lists
var cart = {
  wheels: 4,
  push: () => {console.log("going forward")}
}
console.log(cart.wheels)
cart.push()

//conditional statements will run the code in the curly braces
//if the expression provided in the parenthesis resolves as true
if (cart.wheels > 4) {
  console.log("Why do you have so many wheels? Seriously")
} else if (cart.wheels == 4) {
  console.log("good job. Your cart works.")
} else {
  console.log("Get more wheels.")
}

//single line conditions
if (cart.wheels) console.log("you have wheels")
else console.log("you do not have wheels")
