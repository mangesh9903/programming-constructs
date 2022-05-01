// Checking Leap year. 

let year = 2019;

if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
    console.log("Leap Year");
else
	console.log("Not a Leap Year");