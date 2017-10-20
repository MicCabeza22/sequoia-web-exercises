(function() {

    "use strict";

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     */

    var confirmed = confirm("Would you like to enter a number?");
    var number = prompt("Enter a number.");


    if (isNaN(number)) {
        alert("YOU WILL ENTER A NUMBER NEXT TIME OR ELSE");
    } else {
        if (number % 2 === 0) {
            alert(number + " is even.");
        } else {
            alert(number + " is odd.");
        }

        alert(number + " plus 100 is " + (parseInt(number) + 100) + ".");

        if (number >= 0) {
            alert(number + " is positive.");
        } else {
            alert(number + " is negative.")
        }
    }

    function isANumber(input) {
        return !isNaN(input);
    }

    function isNegative(input) {
        return input < 0;
    }

    function isPositive(input) {
        return input > 0;
    }

    function isEven(input) {
        return input % 2 === 0;
    }

    function isOdd() {
        return !isEven(input);
    }

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined above, if the color passed is not
     * one of the ones defined above, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    function analyzeColor(colorName) {
        switch (colorName) {
            case "red":
                return "Stop signs are red.";
                break;
            case "orange":
                return "Orange sunsets are nice to look at.";
                break;
            case "yellow":
                return "The sun is yellow, but you shouldn't look at it to confirm it.";
                break;
            case "green":
                return "Green is the color of cold hard cash!";
                break;
            case "blue":
                return "Blue is the color of water at a water park.";
                break;
            case "indigo":
                return "I'm not exactly sure what to compare indigo to. Fancy dyes?";
                break;
            case "violet":
                return "Violets are... well, violet.";
                break;
        }
    }

    console.log(analyzeColor("violet"));

    // Don't change the next two lines!
    // These lines create two variables for you:
    // - `colors`: a list of the colors of the rainbow
    // - `randomColor`: contains a single random color value from the list (this
    //                  will contain a different color everytime the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message everytime you refresh the page
     */

    console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    // Done.

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    function calculateTotal(luckyNumber, totalAmount) {
        switch (luckyNumber) {
            case "one":
                return (totalAmount - (totalAmount * 0.1));
                break;
            case "two":
                return (totalAmount - (totalAmount * 0.25));
                break;
            case "three":
                return (totalAmount - (totalAmount * 0.35));
                break;
            case "four":
                return (totalAmount - (totalAmount * 0.5));
                break;
            case "five":
                return (totalAmount - (totalAmount * 1));
                break;
            default:
                return totalAmount;
                break;
        }
    }

    console.log(calculateTotal("three", 49.99));

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
    // Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);
    var totalAmount = prompt("Enter your total bill.");
    var finalAmount = calculateTotal(luckyNumber, totalAmount);

    alert("Your lucky number is " + luckyNumber + "!");
    alert("Your price before your discount is " + totalAmount + ".");
    alert("Your price after your discount is " + finalAmount + "!");

    /* ########################################################################## */

    // ================================= CONDITIONALS BONUSES
    // Bonus 1
    //
    // Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
    // - Catch any invalid inputs.
    // - Write the logic using if/else ifs and then refactor using a switch case

    function favoriteDayOfTheWeek(favoriteDay) {
        switch (favoriteDay) {
            case "Sunday":
                alert("Praise the Lord, it's Sunday!");
                break;
            case "Monday":
                alert("Ugh. It's Monday.");
                break;
            case "Tuesday":
                alert("At least it's now Tuesday.");
                break;
            case "Wednesday":
                alert("Got over that hump somehow.");
                break;
            case "Thursday":
                alert("It's Thursday!");
                break;
            case "Friday":
                alert("Everybody's working for the weekend!");
                break;
            case "Saturday":
                alert("Woo! Saturday!");
                break;
            default:
                alert("That is not a day of the week.");
                break;
        }
    }

    var favoriteDay = prompt("Enter your favorite day of the week");
    favoriteDayOfTheWeek(favoriteDay);
})();