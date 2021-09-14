// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
 console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: My answer was incorrect because I began counting at zero thinking this had to do with the position, but in fact had to do with the value instead.


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: My answer was correct because the square brackets are asking for the index of the letter in position 3 which is l.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: J
// b) Verify and explain: My answer was incorrect because I was focused on the character that would return an index of 1 when it had to do with the word.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY","SUNDAY"]
// b) Verify and explain: The code came back with an errorstating that "weekendDays.toUpperCase())" is not a function, but I'm certain it would return with my previous answer.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: 28
// b) Verify and explain: The code returned number as an answer and I believe it is because the code was calling on the first data type in the variable.
