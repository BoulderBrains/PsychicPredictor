var wins = 0;
var losses = 0;
var guessesRemaining = 5;
var guesses = [];

if (guessesRemaining > 0) {
	document.onkeyup = function() {
		// store the key the user pressed as the userInput variable
		var userInput = event.key;
		document.getElementById("userGuess").innerText = userInput;

		// list of possible characters the computer can choose from
		var possibleCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			
		// store the computer's random selection as the computerSelection variable
		var computerSelection = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
		document.getElementById("computerSelection").innerText = computerSelection;

		if (possibleCharacters.includes(userInput)) {
			if (userInput === computerSelection) {
				alert('You win!');
				wins++;
				reset();
			} else if (userInput !== computerSelection) {
				guesses.push(userInput);
				guessesRemaining--;
				setVariables();
				if (guessesRemaining === 0) {
					alert('Sorry, you lose');
					losses++;
					reset();
				}
			}
		}
	};
} 

function setVariables() {
	// creating containers to put variable in for display on the front end
	var winsContainer = document.getElementById("wins");
	var lossesContainer = document.getElementById("losses");
	var guessesRemainingContainer = document.getElementById("guessesRemaining");
	var guessesContainer = document.getElementById("guesses");

	// putting variables into the containers here
	winsContainer.innerText = wins;
	lossesContainer.innerText = losses;
	guessesRemainingContainer.innerText = guessesRemaining;
	guessesContainer.innerText = guesses;
}

function reset() {
	guessesRemaining = 5;
	guesses = [];
	document.getElementById("userGuess").innerText = "";
	document.getElementById("computerSelection").innerText = "";
	setVariables();
};

function hardReset() {
	location.reload();
}

// including this here so variable are pushed into html containers on page load
setVariables();