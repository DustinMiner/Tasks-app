function fullName (firstName, secondName) {
  return firstName + secondName;
  //return`${firstName} ${secondName}`;
}

// console.log(fullName("Dustin", " Miner"));

function isEven (num) {
  if (num % 2 === 0){
    // console.log("True")
  } else {
    // console.log("False")
  }
}

// isEven(5)

function convertToFahrenheit(int){
  var fahr = int * 1.8 + 32
  return fahr

}

// console.log(convertToFahrenheit(50));

function rollDie(myArray) {
  var randomNum = myArray[Math.floor(Math.random()*myArray.length)];
  return randomNum
}

// console.log(roll_die([1,2,3,4,5,6]));

function fizzBuzz(){
  
  for (var i = 0; i <= 100; i++)  {
    if(i % 15 === 0){
      console.log("FizzBuzz")
    }else if( i % 5 === 0){
      console.log("Buzz")
      }else if( i % 3 === 0){
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}

// fizzBuzz();

function palindrome(string) {

  var reversedString = string.split("").filter(char => char !== " ").reverse().join("").toLowerCase();
  string = string.split("").filter(char => char !== " ").join("").toLowerCase();
  // var trimString = string.trim()
  // var stringLower = trimString.toLowerCase()
  // var splitString = stringLower.split()
  // var reverseSplit = splitString.reverse()
  // var joinString = reverseSplit.join()

  if (string === reversedString) {
    console.log(true)
  } else {
    console.log(false)
  }
}

console.log(palindrome("Never odd or even"));
console.log(palindrome("racecar"));
console.log(palindrome("Hello"));