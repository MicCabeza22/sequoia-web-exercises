/**
 * FOR LOOPS EXERCISES
 */

"use strict";

(function () {
    // #2 ---------------------------------------------------------

    function showMultiplicationTable(inputNumber) {
        for (var i = 0; i <= 10; i++) {
            console.log(inputNumber * i);
        }
    }

    showMultiplicationTable(7);

    // #3 ---------------------------------------------------------

    for (var i = 0; i < 10; i++) {
        var random = Math.floor(Math.random() * 180) + 20;

        if (random % 2 === 0) {
            console.log(random + " is even.");
        } else {
            console.log(random + " is odd.");
        }
    }

    // #4 ---------------------------------------------------------
    // Credit for this solution goes to Bathsheba on Stack Overflow

    for (i = 1; i < 10; i++) {
        console.log(i * (Math.pow(10, i) - 1) / 9);
    }

    // #5 ---------------------------------------------------------

    for (i = 100; i > 0; i -= 5) {
        console.log(i);
    }
})();