'use strict'; // use strict mode to prevent doing mistakes 

var username = prompt("What is your name?")
alert(
"Hello Mr. " +username
);

var userInput = prompt("would you like to get to know me ? (yes , no)");
console.log(userInput);

if(userInput.toLowerCase() === 'yes'){
    alert('I am glad to that you said yes :)');
} else {
    alert('That made me sad :(');
}

var userInput = prompt("would you like to know where did i studied ? (yes , no)");
console.log(userInput);

if(userInput.toLowerCase() === 'yes'){
    alert('Lovely :)');
} else {
    alert(' CRY :(');
}

var userInput = prompt("would you like to know what is my goals? (yes , no)");
console.log(userInput)
if(userInput.toLowerCase() === 'yes'){
    alert("Thats lovely ill show you some of them")
}
else{
    alert("Your lose anyway :(")
}

var userInput = prompt("would you like to know how many years did my education last? (yes , no)");
console.log(userInput)
if(userInput.toLowerCase() === 'yes'){
    alert("Thats lovely ill tell you")
}
else{
    alert("Idont care about you anyway :(")
}



