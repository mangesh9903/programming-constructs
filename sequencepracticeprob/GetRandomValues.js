//Randomn Function to get Single Digit
console.log("------------  Randomn Function to get Single Digit  -------------------");
const random = Math.floor(Math.random() * 10);
console.log("Random value : "+random);

console.log("-----------------------------------------------------------------------");
//Randomn to get number between 1 and 6

console.log("---------------  Randomn to get number between 1 and 6 ---------------");

const randomValue = Math.floor(Math.random() * 6 + 1);
console.log("Randomn to get number between 1 and 6 is : "+randomValue)
console.log("-----------------------------------------------------------------------");

console.log("---------------------  Add 2 random dice numbers -----------------------------");
//Add 2 random dice numbers
let number1 = Math.floor(Math.random() * 6 + 1)
console.log("The number of dice 1 is : " + number1);
let number2 = Math.floor(Math.random() * 6 + 1)
console.log("The number of dice 2 is : " + number2);
let sum = number1 + number2;
console.log("Sum = " + sum);
console.log("-----------------------------------------------------------------------");