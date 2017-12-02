//------------------------------------------------------------------------------
//GLOBAL VARIABLES
//------------------------------------------------------------------------------


//Array of different staple foods of USA //
var wordBank = ['KeyLimePie',
	'Tatertots',
	'Sourdoughbread',
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

	var img = "<img src="+'"assets/images/' + lowerChosenWord  + ".jpg'" + " alt=" + chosenWord + ">"


	document.getElementById('pictitle').innerHTML = picturename;

	/*
	document.getElementById('winimage').src = "assets/images/BLT.jpg";
	*/

}

function winCase (){
	//Game finishes with '>0' guesses remaining and restarts with new word
	if (rightCounter === letterCount) {
		winGraphic();
		wins++;
		//Push to HTML DOM
		document.getElementById('winsTracker').innerHTML = wins;
		//Clearns console, to review new randomized word selection
		//Choose random words within wordBank array & Lowercase the letters
		chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		lowerChosenWord = chosenWord.toLowerCase();
		split = lowerChosenWord.split('');
		//Takes raw character count
		letterCount = split.length;
		console.log(lowerChosenWord);
		//Restart Game
		startGame();
}
}

function loseCase () {
	//Game finishes with '0' guesses remaining and restarts
	if (guessWrongMaximum == 0) {
		losses++;
		//Push to HTML DOM
		document.getElementById('lossesTracker').innerHTML = losses;
		//Clearns console, to review new randomized word selection
		//Choose random words within wordBank array & Lowercase the letters
		chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		lowerChosenWord = chosenWord.toLowerCase();
		split = lowerChosenWord.split('');
		//Takes raw character count
		letterCount = split.length;
		console.log(lowerChosenWord);
		//Restart Game
		startGame();
}
}

function onKeyEvent() {
	document.onkeyup = function(event) {

					//userGuess will store keycode used
					var userGuess = event.key;

					for(var i= 0; i < alphabet.length; i++) {

					if(userGuess === alphabet[i]) {

					var alphabetSplice = alphabet.splice(i,1);



					//Looks in lowercaseChosennWord index for keystroke
					if (lowerChosenWord.indexOf(userGuess) > -1) {

						for (var i = 0; i < letterCount; i++) {

								if (lowerChosenWord[i] === userGuess) {
									rightCounter++;
									underScore[i] = userGuess;
									document.getElementById('underscore').innerHTML = underScore.join(' ');
									winCase();
								}

				  }
				}
					//If not 'right' then 'wrong'
					else {
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

startGame();
