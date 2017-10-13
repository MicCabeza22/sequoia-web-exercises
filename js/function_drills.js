//  JUSTIN FUNCTION DRILLS
(function () {
// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

    function returnTwo() {
        return 2;
    }

    console.log(returnTwo());

//     2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

    function returnName() {
        return "Michael";
    }

    console.log(returnName());

//     3) Make a function called addThree() which takes in a number input and returns the number plus 3. Remember to
// define a parameter.
// ---Test this function with console.log(addThree(5))

    function addThree(number) {
        return number + 3;
    }

    console.log(addThree(5));

//     4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

    function sayString(strInput) {
        return strInput;
    }

    console.log(sayString("Hello, World!"));

//     5) Make a function called sayHowdy() which console.logs the string “Howdy!”
//    ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value

    function sayHowdy() {
        console.log("Howdy!");
    }

    sayHowdy();

// Putting console.log() on the outside of a function allows for greater flexibility.

// ---------------------------------------------------------------------------------------------------------------------

//  RYAN FUNCTION DRILLS
// Write a function called `identity(input)` that takes in an argument called input and returns that input.

    function identity(input) {
        return input;
    }

    console.log(identity("Test."));

//     Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent
//     to that function call.

    function getRandomNumber(min, max) {
        min = 1;
        max = 10;
        return Math.random() * (max - min) + min;
    }

    console.log(getRandomNumber(1, 10));

//     Write a function called `first(input)` that returns the first character in the provided string.

    function first(input) {
        return input.substring(0, 1);
    }

    console.log(first("This is a sentence"));

//     Write a function called `last(input)` that returns the last character of a string

    function last(input) {
        return input.substring(input.indexOf("."), input.length);
    }

    console.log(last("This is also a sentence."));

// Write a function called `rest(input)` that returns everything but the first character of a string.

    function rest(input) {
        return input.substring(input.indexOf("r"), input.length);
    }

    console.log(rest("Bring it on!"));

//     Write a function called `reverse(input)` that takes a string and returns it reversed.
//
//     Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
//
//     Write a function called `count(input)` that takes in a string and returns the number of characters.
//
//     Write a function called `add(a, b)` that returns the sum of a and b
//
// Write a function called `subtract(a, b)` that return the difference between the two inputs.
//
//     Write `multiply(a, b)` function that returns the product
//
// Write a divide(numerator, denominator) function that returns a divided by b
//
// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the
// `divisor`
//
// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
//
// # Super Duper Gold-Star Bonus
//
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or
// * operators
//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math
// function you want to apply. a and b are the two numbers to run that function on.
})();