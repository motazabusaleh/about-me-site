'use strict'; // use strict mode to prevent doing mistakes 
var wrongCounter = 0;
var rightCounter = 0;

function userInput() {
    var username = prompt("What is your name?")
    alert(
        "Hello Mr. " + username
    );
}

userInput();

var userInput = prompt("would you like to get to know me ? (yes , no)");
console.log(userInput);

if (userInput.toLowerCase() === 'yes') {
    alert('I am glad to that you said yes :)');
    rightCounter++;
} else {
    alert('That made me sad :(');
    wrongCounter++;
}

var userInput = prompt("would you like to know where did i studied ? (yes , no)");
console.log(userInput);

if (userInput.toLowerCase() === 'yes') {
    alert('Lovely :)');
    rightCounter++;
} else {
    alert(' CRY :(');
    wrongCounter++;
}

var userInput = prompt("would you like to know what is my goals? (yes , no)");
console.log(userInput)
if (userInput.toLowerCase() === 'yes') {
    alert("Thats lovely ill show you some of them")
    rightCounter++;
}
else {
    alert("Your lose anyway :(")
    wrongCounter++;
}

var userInput = prompt("would you like to know how many years did my education last? (yes , no)");
console.log(userInput)
if (userInput.toLowerCase() === 'yes') {
    alert("Thats lovely ill tell you")
    rightCounter++;
}
else {
    alert("Idont care about you anyway :(")
    wrongCounter++;
}

var guess = prompt("Guess a number: ");
var number = 23;
var allowedGuess = 4;
var numGuesses = 0;

while (numGuesses < allowedGuess) {
    console.log(numGuesses);
    console.log(allowedGuess);
    if (number == guess) {
        alert("you guessed corecct");
        rightCounter++;
        numGuesses = 4;
    }

    else if (number < guess) {

        guess = prompt("number is high! Keep guessing!");
        numGuesses++;
    } else if (number > guess) {

        guess = prompt("number is low! Keep guessing!");
        numGuesses++;

    }
}

alert("you have failed lets try again")


var guess2 = prompt("Guess a number: ");
var number2 = 23;
var allowedGuess2 = 6;
var numGuesses2 = 0;

while (numGuesses2 < allowedGuess2) {
    console.log(numGuesses2);
    console.log(allowedGuess2);
    if (number2 < guess2) {
        alert("TRY AGAIN")
        alert("The answer should be one of these numbers : 20, 21, 22, 23, 24, 25")
        guess2 = prompt("number2 is high! Keep guessing!");
        numGuesses2++;
    } else if (number2 > guess2) {
        alert("The answer should be one of these numbers : 20, 21, 22, 23, 24, 25")
        guess2 = prompt("number2 is low! Keep guessing!");
        numGuesses2++;

    } else if (number2 === guess2) {
        alert("you guessed corecct");
        rightCounter++;
        numGuesses2 = 6;
        
    }
}

alert(wrongCounter);
alert(rightCounter);
























