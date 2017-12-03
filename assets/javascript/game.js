//------------------------------------------------------------------------------
//GLOBAL VARIABLES
//------------------------------------------------------------------------------


//Array of different staple foods of USA //
var wordBank = ['KeyLimePie',
	'Tatertots',
	'SourdoughBread',
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
	var picturename = "<strong>H-A-N-G-M-A-N</strong>"
	document.getElementById('pictitle').innerHTML = picturename;
	document.getElementById('pictitle').style.color = "";
	document.getElementById('pictitle').style.background = "";
	document.getElementById("winimg").src="./assets/images/Hangman.jpg"

}

function underscore() {
	//Create underscore for each letter based on length of randomized word
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
	//Inset Words & styles for particular word win
	var picturename = "<strong> Delicious " + chosenWord + "! </strong>"
	document.getElementById('pictitle').innerHTML = picturename;
	document.getElementById('pictitle').style.color = "white";
	document.getElementById('pictitle').style.background = "green";

	//Graphic inserted into HTML DOM if chosenWord = any of the strings below
	if (chosenWord === 'ApplePie') {
		document.getElementById("winimg").src="./assets/images/ApplePie.jpg"
	}else if (chosenWord === 'BakedBeans') {
		document.getElementById("winimg").src="./assets/images/BakedBeans.jpg"
	}else if (chosenWord === 'BananaSplit') {
		document.getElementById("winimg").src="./assets/images/BananaSplit.jpg"
	}else if (chosenWord === 'BarbecueRibs') {
		document.getElementById("winimg").src="./assets/images/BarbecueRibs.jpg"
	}else if (chosenWord === 'BeefTacos') {
		document.getElementById("winimg").src="./assets/images/BeefTacos.jpg"
	}else if (chosenWord === 'BiscuitsNgravy') {
		document.getElementById("winimg").src="./assets/images/Biscuits&gravy.jpg"
	}else if (chosenWord === 'BLT') {
		document.getElementById("winimg").src="./assets/images/Blt.jpg"
	}else if (chosenWord === 'BlueBerryCobbler') {
		document.getElementById("winimg").src="./assets/images/BlueberryCobbler.jpg"
	}else if (chosenWord === 'BuffaloWings') {
		document.getElementById("winimg").src="./assets/images/BuffaloWings.jpg"
	}else if (chosenWord === 'CaliforniaRoll') {
		document.getElementById("winimg").src="./assets/images/CaliforniaRoll.jpg"
	}else if (chosenWord === 'CheeseBurger') {
		document.getElementById("winimg").src="./assets/images/CheeseBurger.jpg"
	}else if (chosenWord === 'ChicagoStylePizza') {
		document.getElementById("winimg").src="./assets/images/ChicagoStylePizza.jpg"
	}else if (chosenWord === 'ChocolateChipCookies') {
		document.getElementById("winimg").src="./assets/images/ChocolateChipCookies.jpg"
	}else if (chosenWord === 'CobbSalad') {
		document.getElementById("winimg").src="./assets/images/CobbSalad.jpg"
	}else if (chosenWord === 'Cornbread') {
		document.getElementById("winimg").src="./assets/images/Cornbread.jpg"
	}else if (chosenWord === 'Fajitas') {
		document.getElementById("winimg").src="./assets/images/Fajitas.jpg"
	}else if (chosenWord === 'FortuneCookies') {
		document.getElementById("winimg").src="./assets/images/FortuneCookies.jpg"
	}else if (chosenWord === 'FrenchFries') {
		document.getElementById("winimg").src="./assets/images/FrenchFries.jpg"
	}else if (chosenWord === 'FriedChickenNWaffles') {
		document.getElementById("winimg").src="./assets/images/FriedChicken&waffles.jpg"
	}else if (chosenWord === 'GreenChileStew') {
		document.getElementById("winimg").src="./assets/images/GreenChileStew.jpg"
	}else if (chosenWord === 'Grits') {
		document.getElementById("winimg").src="./assets/images/Grits.jpg"
	}else if (chosenWord === 'HoneyHam') {
		document.getElementById("winimg").src="./assets/images/HoneyHam.jpg"
	}else if (chosenWord === 'HotDogs') {
		document.getElementById("winimg").src="./assets/images/HotDogs.jpg"
	}else if (chosenWord === 'Jambalaya') {
		document.getElementById("winimg").src="./assets/images/Jambalaya.jpg"
	}else if (chosenWord === 'Jerky') {
		document.getElementById("winimg").src="./assets/images/Jerky.jpg"
	}else if (chosenWord === 'KeyLimePie') {
		document.getElementById("winimg").src="./assets/images/KeyLimePie.jpg"
	}else if (chosenWord === 'LobsterRolls') {
		document.getElementById("winimg").src="./assets/images/LobsterRolls.jpg"
	}else if (chosenWord === 'MacaroniNCheese') {
		document.getElementById("winimg").src="./assets/images/Macaroni&cheese.jpg"
	}else if (chosenWord === 'MarylandCrabcakes') {
		document.getElementById("winimg").src="./assets/images/MarylandCrabcakes.jpg"
	}else if (chosenWord === 'Meatloaf') {
		document.getElementById("winimg").src="./assets/images/Meatloaf.jpg"
	}else if (chosenWord === 'Nachos') {
		document.getElementById("winimg").src="./assets/images/Nachos.jpg"
	}else if (chosenWord === 'NewEnglandClamChowder') {
		document.getElementById("winimg").src="./assets/images/NewEnglandClamChowder.jpg"
	}else if (chosenWord === 'PeanutButterSandwich') {
		document.getElementById("winimg").src="./assets/images/PeanutButterSandwich.jpg"
	}else if (chosenWord === 'PhillyCheeseSteak') {
		document.getElementById("winimg").src="./assets/images/PhillyCheeseSteak.jpg"
	}else if (chosenWord === 'PoBoy') {
		document.getElementById("winimg").src="./assets/images/PoBoy.jpg"
	}else if (chosenWord === 'Popcorn') {
		document.getElementById("winimg").src="./assets/images/Popcorn.jpg"
	}else if (chosenWord === 'PotatoChips') {
		document.getElementById("winimg").src="./assets/images/PotatoChips.jpg"
	}else if (chosenWord === 'PotRoast') {
		document.getElementById("winimg").src="./assets/images/PotRoast.jpg"
	}else if (chosenWord === 'ReubenSandwich') {
		document.getElementById("winimg").src="./assets/images/ReubenSandwich.jpg"
	}else if (chosenWord === 'Smores') {
		document.getElementById("winimg").src="./assets/images/Smores.jpg"
	}else if (chosenWord === 'SourdoughBread') {
		document.getElementById("winimg").src="./assets/images/SourdoughBread.jpg"
	}else if (chosenWord === 'Tatertots') {
		document.getElementById("winimg").src="./assets/images/TaterTots.jpg"
	}else if (chosenWord === 'Twinkies') {
		document.getElementById("winimg").src="./assets/images/Twinkies.jpg"
	}
}

function loseGraphic() {
	//Inset Words & styles for particular word loss
	var picturename = "<strong> You were almost able to eat " + chosenWord + "! </strong>"
	document.getElementById('pictitle').innerHTML = picturename;
	document.getElementById('pictitle').style.color = "white";
	document.getElementById('pictitle').style.background = "red";

	//Graphic inserted into HTML DOM if chosenWord = any of the strings below
	if (chosenWord === 'ApplePie') {
		document.getElementById("winimg").src="./assets/images/ApplePie.jpg"
	}else if (chosenWord === 'BakedBeans') {
		document.getElementById("winimg").src="./assets/images/BakedBeans.jpg"
	}else if (chosenWord === 'BananaSplit') {
		document.getElementById("winimg").src="./assets/images/BananaSplit.jpg"
	}else if (chosenWord === 'BarbecueRibs') {
		document.getElementById("winimg").src="./assets/images/BarbecueRibs.jpg"
	}else if (chosenWord === 'BeefTacos') {
		document.getElementById("winimg").src="./assets/images/BeefTacos.jpg"
	}else if (chosenWord === 'BiscuitsNgravy') {
		document.getElementById("winimg").src="./assets/images/Biscuits&gravy.jpg"
	}else if (chosenWord === 'BLT') {
		document.getElementById("winimg").src="./assets/images/Blt.jpg"
	}else if (chosenWord === 'BlueBerryCobbler') {
		document.getElementById("winimg").src="./assets/images/BlueberryCobbler.jpg"
	}else if (chosenWord === 'BuffaloWings') {
		document.getElementById("winimg").src="./assets/images/BuffaloWings.jpg"
	}else if (chosenWord === 'CaliforniaRoll') {
		document.getElementById("winimg").src="./assets/images/CaliforniaRoll.jpg"
	}else if (chosenWord === 'CheeseBurger') {
		document.getElementById("winimg").src="./assets/images/CheeseBurger.jpg"
	}else if (chosenWord === 'ChicagoStylePizza') {
		document.getElementById("winimg").src="./assets/images/ChicagoStylePizza.jpg"
	}else if (chosenWord === 'ChocolateChipCookies') {
		document.getElementById("winimg").src="./assets/images/ChocolateChipCookies.jpg"
	}else if (chosenWord === 'CobbSalad') {
		document.getElementById("winimg").src="./assets/images/CobbSalad.jpg"
	}else if (chosenWord === 'Cornbread') {
		document.getElementById("winimg").src="./assets/images/Cornbread.jpg"
	}else if (chosenWord === 'Fajitas') {
		document.getElementById("winimg").src="./assets/images/Fajitas.jpg"
	}else if (chosenWord === 'FortuneCookies') {
		document.getElementById("winimg").src="./assets/images/FortuneCookies.jpg"
	}else if (chosenWord === 'FrenchFries') {
		document.getElementById("winimg").src="./assets/images/FrenchFries.jpg"
	}else if (chosenWord === 'FriedChickenNWaffles') {
		document.getElementById("winimg").src="./assets/images/FriedChicken&waffles.jpg"
	}else if (chosenWord === 'GreenChileStew') {
		document.getElementById("winimg").src="./assets/images/GreenChileStew.jpg"
	}else if (chosenWord === 'Grits') {
		document.getElementById("winimg").src="./assets/images/Grits.jpg"
	}else if (chosenWord === 'HoneyHam') {
		document.getElementById("winimg").src="./assets/images/HoneyHam.jpg"
	}else if (chosenWord === 'HotDogs') {
		document.getElementById("winimg").src="./assets/images/HotDogs.jpg"
	}else if (chosenWord === 'Jambalaya') {
		document.getElementById("winimg").src="./assets/images/Jambalaya.jpg"
	}else if (chosenWord === 'Jerky') {
		document.getElementById("winimg").src="./assets/images/Jerky.jpg"
	}else if (chosenWord === 'KeyLimePie') {
		document.getElementById("winimg").src="./assets/images/KeyLimePie.jpg"
	}else if (chosenWord === 'LobsterRolls') {
		document.getElementById("winimg").src="./assets/images/LobsterRolls.jpg"
	}else if (chosenWord === 'MacaroniNCheese') {
		document.getElementById("winimg").src="./assets/images/Macaroni&cheese.jpg"
	}else if (chosenWord === 'MarylandCrabcakes') {
		document.getElementById("winimg").src="./assets/images/MarylandCrabcakes.jpg"
	}else if (chosenWord === 'Meatloaf') {
		document.getElementById("winimg").src="./assets/images/Meatloaf.jpg"
	}else if (chosenWord === 'Nachos') {
		document.getElementById("winimg").src="./assets/images/Nachos.jpg"
	}else if (chosenWord === 'NewEnglandClamChowder') {
		document.getElementById("winimg").src="./assets/images/NewEnglandClamChowder.jpg"
	}else if (chosenWord === 'PeanutButterSandwich') {
		document.getElementById("winimg").src="./assets/images/PeanutButterSandwich.jpg"
	}else if (chosenWord === 'PhillyCheeseSteak') {
		document.getElementById("winimg").src="./assets/images/PhillyCheeseSteak.jpg"
	}else if (chosenWord === 'PoBoy') {
		document.getElementById("winimg").src="./assets/images/PoBoy.jpg"
	}else if (chosenWord === 'Popcorn') {
		document.getElementById("winimg").src="./assets/images/Popcorn.jpg"
	}else if (chosenWord === 'PotatoChips') {
		document.getElementById("winimg").src="./assets/images/PotatoChips.jpg"
	}else if (chosenWord === 'PotRoast') {
		document.getElementById("winimg").src="./assets/images/PotRoast.jpg"
	}else if (chosenWord === 'ReubenSandwich') {
		document.getElementById("winimg").src="./assets/images/ReubenSandwich.jpg"
	}else if (chosenWord === 'Smores') {
		document.getElementById("winimg").src="./assets/images/Smores.jpg"
	}else if (chosenWord === 'SourdoughBread') {
		document.getElementById("winimg").src="./assets/images/SourdoughBread.jpg"
	}else if (chosenWord === 'Tatertots') {
		document.getElementById("winimg").src="./assets/images/TaterTots.jpg"
	}else if (chosenWord === 'Twinkies') {
		document.getElementById("winimg").src="./assets/images/Twinkies.jpg"
	}
	}

function winCase (){
	//Game finishes with '>0' guesses remaining and restarts with new word
	if (rightCounter === letterCount) {
		winGraphic();
		wins++;
		//Push to HTML DOM
		document.getElementById('winsTracker').innerHTML = wins;
		alert("Press any key to continue!!");
		//Choose random words within wordBank array & Lowercase the letters
		chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		lowerChosenWord = chosenWord.toLowerCase();
		split = lowerChosenWord.split('');
		//Takes raw character count for chosen word
		letterCount = split.length;
		console.log(lowerChosenWord);
		document.onkeyup = function(event) {

				//key press will begin new game
				var userGuess = event.key;
				alert("Press any key to restart!!");
				startGame();

}
}
}

function loseCase () {
	//Game finishes with '0' guesses remaining
	if (guessWrongMaximum === 0) {
		loseGraphic();
		losses++;
		//Push to HTML DOM
		document.getElementById('lossesTracker').innerHTML = losses;
		alert("Good try, press any key to continue!!");
		//Choose random words within wordBank array & Lowercase the letters
		chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		lowerChosenWord = chosenWord.toLowerCase();
		split = lowerChosenWord.split('');
		//Takes raw character count for chosen word
		letterCount = split.length;
		console.log(lowerChosenWord);
		//Restart Game
		document.onkeyup = function(event) {

				//key press will begin new game
				var userGuess = event.key;
				alert("Press any key to restart!!");
				startGame();
}
}
}

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
																//Right Counter is increased by 1, tracking correct keystrokes used
																rightCounter++;
																//Updates the underScore array with the userGuess-keystroke
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
											//Reduces guessWrongMaximum by 1
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
