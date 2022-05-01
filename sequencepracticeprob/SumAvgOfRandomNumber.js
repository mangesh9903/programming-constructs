// finding Sum and Avg of 5 Random 2 digit Number

function generateRandomNumber() {
    const RESULT = Math.round(Math.random() * 89 + 10);
    return RESULT;
}
let sum = 0;
for (index = 0; index < 5; index++) {
    let number = generateRandomNumber();
    console.log("Number [ " + index + " ] = " + number);
    sum = sum + number;
}
console.log("The sum of 5 random 2 digit value is = " + sum);
console.log("The average of 5 random 2 digit value is = " + sum / 5);