'use strict'; // use strict mode to prevent doing mistakes 

var username = prompt("What is your name?")
alert(
    "Hello Mr. " + username
);

var userInput = prompt("would you like to get to know me ? (yes , no)");
console.log(userInput);

if (userInput.toLowerCase() === 'yes') {
    alert('I am glad to that you said yes :)');
} else {
    alert('That made me sad :(');
}

var userInput = prompt("would you like to know where did i studied ? (yes , no)");
console.log(userInput);

if (userInput.toLowerCase() === 'yes') {
    alert('Lovely :)');
} else {
    alert(' CRY :(');
}

var userInput = prompt("would you like to know what is my goals? (yes , no)");
console.log(userInput)
if (userInput.toLowerCase() === 'yes') {
    alert("Thats lovely ill show you some of them")
}
else {
    alert("Your lose anyway :(")
}

var userInput = prompt("would you like to know how many years did my education last? (yes , no)");
console.log(userInput)
if (userInput.toLowerCase() === 'yes') {
    alert("Thats lovely ill tell you")
}
else {
    alert("Idont care about you anyway :(")
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


var guess = prompt("Guess a number: ");
var number = 23;
var allowedGuess = 6;
var numGuesses = 0;

while (numGuesses < allowedGuess) {
    console.log(numGuesses);
    console.log(allowedGuess);
    if (number < guess) {
        alert("TRY AGAIN")
        alert("The answer should be one of these numbers : 20, 21, 22, 23, 24, 25")
        guess = prompt("number is high! Keep guessing!");
        numGuesses++;
    } else if (number > guess) {
        alert("The answer should be one of these numbers : 20, 21, 22, 23, 24, 25")
        guess = prompt("number is low! Keep guessing!");
        numGuesses++;

    }else if (number == guess) {
        alert("you guessed corecct");
        }
}
























