/**
 * BREAK AND CONTINUE EXERCISES
 */

"use strict";

(function () {
    // #2 --------------------------------------------------------------------------------

    var oddNumber = prompt("Pick an odd number between 1 and 50.");

    while (oddNumber %2 === 0 || oddNumber < 1 || oddNumber > 50) {
        oddNumber = prompt("Invalid input. Please pick an odd number between 1 and 50.");

        if (oddNumber %2 !== 0) {
            break;
        }
    }

    // #3 --------------------------------------------------------------------------------

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
})();