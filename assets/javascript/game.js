var wins = 0;
var losses = 0;
var guessesRemaining = 5;
var guesses = [];

document.onkeyup = function(){
	var winsContainer = document.querySelector('#wins');
	var lossesContainer = documnet.querySelector('#losses');
	var guessesRemainingContainer = document.querySelector('#guessesRemaining');
	var guesses = document.querySelector('#guesses');

	// store the key the user pressed in a userInput variable
	var userInput = event.key;

	var possibleCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	// create an array of all alphabet characters
	// store the computer's random selection as a computerSelection variable
	// compare userInput to computerSelection,
	// if the same: wins++;
	// else { guessesRemaining-- userInput.push(guessesARRAY)}
	// if guessesRemaning === 0 { you lose }


};

function reset() {
	var wins = 0;
	var losses = 0;
	var guessesRemaining = 5;
	var guesses = [];
};