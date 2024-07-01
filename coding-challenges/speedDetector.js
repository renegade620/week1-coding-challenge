// this allows the program accept user input
const prompt = require('prompt-sync')({ sigint: true });

/* Write a program that takes the speed of a car as input e.g 80. 
If the speed is less than 70, it should print “Ok”. 
Otherwise, for every 5 km/s above the speed limit (70), 
it should give the driver one demerit point and print the total number of demerit points.
 For example, if the speed is 80, it should print: “Points: 2”. 
 If the driver gets more than 12 points, the function should print: “License suspended”. */

function speedDetector() {
    let speed = prompt("Enter speed of car: ");
    let demeritPoint = 1;

    // checks if speed is above the speed limit. if it is above the speed limit it prints "Ok".
    if (speed < 70) {
        return "Ok";
    } else if (speed > 70) {
        if (speed % 5 == 0) {
            let x = (speed - 70) / 5;
            demeritPoint *= x;

            if (demeritPoint > 12) {
                return "License suspended";
            } else
                return `Points: ${demeritPoint}`;
        }
    }
}

console.log(speedDetector());