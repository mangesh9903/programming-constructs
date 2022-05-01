// Flip Coin 

const randomNumber = Math.floor( Math.random() * 2 ) + 1;
console.log(randomNumber);
if ( randomNumber == 1 ) {
    console.log("Its a HEAD!");
}
else {
    console.log("Its a TAIL!");
}