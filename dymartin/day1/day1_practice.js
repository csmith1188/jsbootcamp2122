// day 1 js practice
// by dylan


// primitive datatypes and literal values

5 //number
'e' //string
true //boolean

//saving values to Variables (primitive)
//var is global scope, let exists only in the {} that its contained in.
var e = "E"
console.log(e)

//collection datatypes

//arrays are ordered lists
var otherE = ['e', 'E', 'e?', 'E!'];
console.log(otherE[1]); //the first object in the list is index[0], it does not start at 1.

var object = {
  things: 4,
  use: () => {
    console.log("object used");
  }
}

console.log(object.use);
object.use();

//conditional statement, runs if condition to run is true, if not check other else if's, and if none are true, run else

if (e = "E") {
  console.log("yes");
} else if (e = "F") {
  console.log("the text is not e, its f");
} else {
  console.log("this is not e");
}
