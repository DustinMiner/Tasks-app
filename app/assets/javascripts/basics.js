// alert("Hello!");
// Console.logging is useful for debugging, not for communicating to the user
// This is the equivalent of "puts" or "p" in ruby.
// console.log("Hello World!");
// whatever we put inside the console.log function is evaluated in javascript before it is logged to the console
// console.log(2 + 2);
// Implicit conversion of types is different
// console.log("2" + 2);
// console.log(2 + "2");
// console.log("2" * 2);

// booleans are pretty much the same
// console.log(true);
// console.log(false);
// In javascript 0 and "" are considered false values
// console.log(!"");
//Strict equality operator, it uses three equal signs to make sure the values are completely equal
// console.log(2===2);
// console.log(2==="2");
// The less strict equality operator (==) converts the values to the same type. 
// console.log (2 == "2");
// console.log (false == "");


// When we first create a varaible we must use the "var" keyword or "let" followed by the name of the variable. Variables use lower camle case naming conventions.
var myNumber = 5;

// WHen we want to reassign the variable we do not need the keyword "var" or "let"
myNumber = 4;

if (myNumber === 5) {
  console.log("It's 5!");
} else if (myNumber === 4) {
console.log("It is a 4")
} else {
  console.log("It's not 4 or a 5!");
}

//functions get hoisted typically, which means they can called from anywhere in the file even before the function is created.  
sayHi();
// Use a "function" keyword to create a new function even if you're not using parameters you still need to open the parentheses. 

function sayHi () {
  console.log("Hi!");
}
// When calling a a function javascript demands that you include the parentheses, as this tell sthe browser it is a function. 

sayHi();

// multiple parameters the same as ruby. We have to be explicit if we want to return something in javascript; it doesn't just reutrn the last line like in ruby.
function numberMultiplier (firstNum, secondNum) {
  return firstNum * secondNum;

}

// console.log(numberMultiplier(3, 5));

// Arrays work pretty much the same way
var myArray = [56, 12, 27, 4, 3, 10]



console.log(myArray);

//length is a property in javascript, not a method like it is in ruby. 
console.log(myArray.length);
// Javascript arrays use bracket notation, the same as ruby, to grab specific indexes.  
console.log(myArray[2]);
// push adds value to end of array
myArray.push(15);
console.log(myArray);
// pop delete values form end of array
myArray.pop();
console.log(myArray);

// shift is the opposite of pop, it deletes a value at the beginning of the array.
// unshift adds a value to the beginning of the array

myArray.shift();
console.log(myArray);
 myArray.unshift(56);
 console.log(myArray);

// while loops look kind of like ruby while loops except they are more syntax heavy
// var counter = 1;
//  while (counter <= 10) {
//   console.log(counter);
//   // counter ++ is the same as counter += 1
//   counter++;
// }

// For loops: Starts with the "for" keyword. First clause runs before the loop ever runs.  Typically this is where we estabish our counter variable, often called 'i'. 
//Second clasue is a conditional that runs each time the loop is about to run-- this is the equivalent of the while loop condition.  
//Third clause runs after each loop through-- typicall ythis is where we increment "i"
for (var i = 0; i <= 10; i++) {
  console.log(i);

}
// Syntax for eaching through an array "i" is each index of the array essentially.
myArray = [56, 12, 27, 4, 3, 10]
for (var i = 0; i < myArray.length; i++) {

  console.log(myArray[i])
}

// bjects (hashes in ruby) look pretty much the same but the keys in this case, firstName and lastName are not symbols.
var person = {firstName: "Dustin", lastName: "Miner"}
  console.log(person);

  // Object values can be accessed using bracket notation...
  console.log(person["firstName"]);
// And dot notation!

console.log(person.lastName);
// We can add/reassign key-value pairs by using dot notation or bracket notation
person.age = 24;
person["age"] = 25;
console.log(person);