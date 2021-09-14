// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.
My code would be based on the condition that if 35 was the variable, I would console log a return
stating temperature is below boiling point, else if variable is 350, I would console log a return stating 350 is above boiling point.
Finally, if variable is 212, I would else console log a return stating 212 is at boiling point.
Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

 var temp = 35
 var temp = 350
 var temp = 212

if(temp == 35){
  console.log("35 is below boiling point")
}else if(temp == 350){
  console.log("350 is above boiling point")
}else
  console.log("212 is at boiling point")



// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10
My code would console log the myNumbers1 variable and concat the myNumbers2 variable with the length attribute added.
This way, both variables are called to combine in length before providing a return.

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

console.log(myNumbers1.concat(myNumbers2).length)



// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"
My code would make a new variable using the letters in the string of myString1 and myString2 and instead, creating an array of each.
I would then console log reverse

var myString1 = "charlie"
var myString2 = "delta"

myString1 = ['c','h','a','r','l','i','e']
myString2 = ['d','e','l','t','a']

console.log((myString1.reverse()).join(""))


// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12
My code would be based on the condition if number1 was greater than number2, I would console log number1 subtracted by number2. Else would subtract number2 from number1.

var number1 = 42
var number2 = 27

 var number1 = 7
 var number2 = 19

if (number1 > number2){
  console.log(number1 - number2)
}else{
  console.log(number2 - number1)
}



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3
I had a tough time refactoring my previous code. My return to all my attempts came back as undefined I'm guessing because of the different data types
trying to be evaluated.

var numberRefactor1 = 42
var numberRefactor2 = "hello"

if (numberRefactor1 > numberRefactor2)
  console.log("your input is not a number")


 var numberRefactor1 = 27
 var numberRefactor2 = 24

if (numberRefactor1 > numberRefactor2){
  console.log(numberRefactor1 - numberRefactor2)
}else{
  console.log(numberRefactor2 - numberRefactor1)
}
