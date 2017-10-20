/**
 * BREAK AND CONTINUE EXERCISES
 */

"use strict";

(function () {
    // #2 -------------------------------------------------------------------------------

    var oddNumber = prompt("Pick an odd number between 1 and 50.");

    while (oddNumber %2 === 0 || oddNumber < 1 || oddNumber > 50) {
        oddNumber = prompt("Invalid input. Please pick an odd number between 1 and 50.");

        if (oddNumber %2 !== 0) {
            break;
        }
    }

    // #3 -------------------------------------------------------------------------------

    console.log("Number to skip is: " + oddNumber);

    for (var i = 0; i < 50; i++) {
        if (i % 2 !== 1) {
            continue;
        }

        if (i % 2 === 1 && i == oddNumber) {
            console.log("Yikes! Skipping number: " + i);
        } else {
            console.log("Here is an odd number: " + i);
        }
    }

    // BONUS ----------------------------------------------------------------------------

    var number = "\n";

    for (i = 1; i < 13; i++) {
        for (var j = 1; j < 13; j++) {
            number += (i * j);
        }
        number += "\n";
    }

    console.log(number);

    // FizzBuzz -------------------------------------------------------------------------

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log("FizzBuzz");
            }
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
        console.log(i);
        }
    }
})();