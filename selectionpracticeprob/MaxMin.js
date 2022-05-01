// Finding Maximum and Minimum Value using random funtion

let minimum = Number.MAX_VALUE;
let maximum = Number.MIN_VALUE;

for (let index = 0; index < 5; index++) {
    let random = Math.floor(Math.random() * 1000);
    console.log("Randomly Generated Numbers Are : "+random)
    if (random > maximum)
        maximum = random
    if (random < minimum)
        minimum = random
}

console.log("Maximum = " + maximum, "\nMinimum = " + minimum)