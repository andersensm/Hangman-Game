//------------------------------------------------------------------------------
//GLOBAL VARIABLES
//------------------------------------------------------------------------------


//Array of different staple foods of USA //
var wordBank = ['KeyLimePie',
	'Tatertots',
	'SourdoughBread']
	/*
	'CobbSalad',
	'PotRoast',
	'Twinkies',
	'Jerky',
	'Fajitas',
	'BananaSplit',
	'Cornbread',
	'Jambalaya',
	'BiscuitsNgravy',
	'HoneyHam',
	'CaliforniaRoll',
	'Meatloaf',
	'Grits',
	'MacaroniNCheese',
	'MarylandCrabcakes',
	'PotatoChips',
	'FortuneCookies',
	'PeanutButterSandwich',
	'BakedBeans',
	'Popcorn',
	'FriedChickenNWaffles',
	'NewEnglandClamChowder',
	'Smores',
	'LobsterRolls',
	'BuffaloWings',
	'BarbecueRibs',
	'BLT',
	'ApplePie',
	'PoBoy',
	'GreenChileStew',
	'ChocolateChipCookies',
	'BlueBerryCobbler',
	'ChicagoStylePizza',
	'Nachos',
	'PhillyCheeseSteak',
	'HotDogs',
	'CheeseBurger',
	'FrenchFries',
	'BeefTacos',
	'ReubenSandwich'
]
*/


var keylimepie = 'KeyLimePie';
var tatertots = 'Tatertots';
var sourdough = 'SourdoughBread';


var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x',
'y','z'];

//Choose random words within wordBank array & Lowercase the letters
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var lowerChosenWord = chosenWord.toLowerCase();
var split = lowerChosenWord.split('');
//Takes raw character count
var letterCount = split.length;

//Review in HTML DOM
console.log(lowerChosenWord);
console.log(letterCount);

//Blank Arrays
var underScore = [];
var userGuess = [];
var wrongGuess = [];

//Counters
var wins = 0;
var losses = 0;
var guessWrongMaximum = 10;

console.log(guessWrongMaximum);

console.log(underScore);

//------------------------------------------------------------------------------
//FUNCTIONS
//-----------------------------------------------------------------------------

function defaultVariables() {
	alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x',
	'y','z'];
	underScore = [];
	userGuess = [];
	wrongGuess = [];
	rightCounter = 0;
	guessWrongMaximum = 10;
	var picturename = "<strong>H-A-N-G-M-A-N</strong>"
	document.getElementById('pictitle').innerHTML = picturename;
	document.getElementById('pictitle').style.color = "";
	document.getElementById('pictitle').style.background = "";
	document.getElementById("winimg").src="./assets/images/Hangman.jpg"

}

function underscore() {
	//Create Underscore for each letter based on length of randomized words
	for (var i = 0; i < lowerChosenWord.length; i++) {
					underScore.push('_');
				}
				//Removes the commas within the underScore array and replaces with white space
				document.getElementById('underscore').innerHTML = underScore.join(' ');
}

function defaultHtmlDom() {
	//Push default settings to HTML DOM
	document.getElementById('wrongGuess').innerHTML = wrongGuess;
	document.getElementById('guessWrongMaximum').innerHTML = guessWrongMaximum;
}

function winGraphic() {
	//Insert Image and Words for particular word
	var picturename = "<strong> Delicious " + chosenWord + "! </strong>"
	document.getElementById('pictitle').innerHTML = picturename;
	document.getElementById('pictitle').style.color = "white";
	document.getElementById('pictitle').style.background = "green";

	if (chosenWord === sourdough) {
	document.getElementById("winimg").src="./assets/images/SourdoughBread.jpg"
} else if (chosenWord === tatertots) {
	document.getElementById("winimg").src="./assets/images/TaterTots.jpg"
} else if (chosenWord === keylimepie) {
	document.getElementById("winimg").src="./assets/images/KeyLimePie.jpg"
}
}

function winCase (){
	//Game finishes with '>0' guesses remaining and restarts with new word
	if (rightCounter === letterCount) {
		winGraphic();
		wins++;
		//Push to HTML DOM
		document.getElementById('winsTracker').innerHTML = wins;
		//Choose random words within wordBank array & Lowercase the letters
		chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		lowerChosenWord = chosenWord.toLowerCase();
		split = lowerChosenWord.split('');
		//Takes raw character count
		letterCount = split.length;
		console.log(lowerChosenWord);
		alert("Press any key to restart!!");
		//Restart Game
		document.onkeyup = function(event) {

				//userGuess will store keycode used
				var userGuess = event.key;
				startGame();
}
}
}

function loseCase () {
	//Game finishes with '0' guesses remaining and restarts
	if (guessWrongMaximum === 0) {
		losses++;
		//Push to HTML DOM
		document.getElementById('lossesTracker').innerHTML = losses;
		//Choose random words within wordBank array & Lowercase the letters
		chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		lowerChosenWord = chosenWord.toLowerCase();
		split = lowerChosenWord.split('');
		//Takes raw character count
		letterCount = split.length;
		console.log(lowerChosenWord);
		//Restart Game
}
}


//Add function to if/else statement for userGuess from below (lines 182-207  )

function onKeyEvent() {
	document.onkeyup = function(event) {

			//userGuess will store keycode used
			var userGuess = event.key;
					//For loop to go through the alphabet array, based on the key event that is chosen
					for(var i= 0; i < alphabet.length; i++) {
							//If the keystroke is equal to the userGuess and is a key within the alphabet array, it will delete the word from the alphabet array
							if(userGuess === alphabet[i]) {
									//variable for the alphabetSplice
									var alphabetSplice = alphabet.splice(i,1);

									//Looks in lowercaseChosennWord index for keystroke
									if (lowerChosenWord.indexOf(userGuess) > -1) {
											//When the lower case chosen word has a valid letter that is chosen it will cycle through all the letters within the word until all are populated
											for (var i = 0; i < letterCount; i++) {
														//
														if (lowerChosenWord[i] === userGuess) {
																rightCounter++;
																//Updates the underScore array location with the userGuess
																underScore[i] = userGuess;
																//Updates HTML file with the new key(s) that were used
																document.getElementById('underscore').innerHTML = underScore.join(' ');
																//winCase function goes into effect
																winCase();
														}

				  						}
									//key into the wrongGuess
									} else {
											wrongGuess.push(userGuess);
											//Push to HTML DOM
											document.getElementById('wrongGuess').innerHTML = wrongGuess;
											guessWrongMaximum--;
											//Push to HTML DOM
											document.getElementById('guessWrongMaximum').innerHTML = guessWrongMaximum;
											loseCase();
					  		}
	}
}
}
}

function startGame() {
			//Default settings for variables
			defaultVariables();
			//Create Underscore for each letter based on length of randomized words
			underscore();
			//Push default settings to HTML DOM
			defaultHtmlDom();
			//Any letter will initiate below script
			onKeyEvent();
}

//Calls the beginning of the game-----------------------------------------------
startGame();
