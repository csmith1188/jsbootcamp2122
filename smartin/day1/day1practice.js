// Day 1 js bootcamp
// created by: Xx$wag$layer63xX (aka seth martin)

// Primitive Datatypes and Literal Values
5 // Number
'L + ratio + ur white' // string
true // boolean

// storing values into variables (primitive)
var ratio = 0;
console.log(ratio);

// Collection Datatypes 
// Arrays are ordered lists 
var groceries = ['milk', 'bread', 'eggs'];
console.log(groceries[1]);
// objects can act like unordered lists :gasp_emoji:
var cart = {
    wheels: 4,
    push: () => console.log('going forward lol')
}
console.log(cart.wheels);
cart.push;

// conditional statements (run if true)
if (cart.wheels >= 4) {
    console.log('ur cart is chillin cuh');
} else if (cart.wheels == 4) {
    console.log('normal bro')
} else {
    console.log('caught lackin cuh')
}

// single line condit
if (cart.wheels) console.log("you have weels"); else console.log('u dont got wels')
