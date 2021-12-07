//Day 1 JS Bootcamp
//By Sammy Kipp

//Primitives Values and Literal Values
5 //Number
'Hello' //String
true //Boolean

//Storing Values into a Variable (primitive)
var power = 4000
console.log(power);

//Collection Datatypes
  //Arrays are ordered lists
  var groceries = ['milk', 'ramen', 'yogurt']
  console.log(groceries[1])

  //Objects can act like unordered lists
  var cart = {
    wheels: 4,
    push:() => {
      console.log("Going forward")
    }
  }
  console.log(cart.wheels)
  cart.push()

//Conditional Statement will run code in {} if conidtion provided condition is met
if (cart.wheels > 4){
  console.log("You have too many wheels");
}
else if (cart.wheels == 4){
  console.log("You have sufficient wheels");
}
else {
  console.log("You do not have enough wheels");
}
  //Single line conditionals
  if (cart.wheels) console.log("You have wheels")
  else console.log("You do not have wheels")
