/**
 * WHILE LOOPS EXERCISES
 */

"use strict";

(function () {
    // #1 -----------------------------------------------------------------

    var i = 1;

    while (i <= 65536) {
        console.log(i);
        i *= 2;
    }

    // #2 -----------------------------------------------------------------

    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        var sellCones = Math.floor(Math.random() * 5) + 1;

        allCones -= sellCones;
        console.log(sellCones + " cone(s) sold.");

        if (allCones < sellCones) {
            console.log("I cannot sell more cones than I have available.");
        }
    } while (allCones > 0);

    if (allCones === 0) {
        console.log("All cones have been sold!");
    }
})();