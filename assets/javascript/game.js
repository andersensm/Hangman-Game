//------------------------------------------------------------------------------
//GLOBAL VARIABLES
//------------------------------------------------------------------------------


//Array of different staple foods of USA //
var wordBank = ['Key Lime Pie',
	'Tater Tots',
	'Sourdough Bread',
	'Cobb Salad',
	'Pot Roast',
	'Twinkies',
	'Jerky',
	'Fajitas',
	'Banana Split',
	'Cornbread',
	'Jambalaya',
	'Biscuits n Gravy',
	'Honey Ham',
	'California Roll',
	'Meatloaf',
	'Grits',
	'Macaroni n Cheese',
	'Maryland Crabcakes',
	'Potato Chips',
	'Fortune Cookies',
	'Peanut Butter Sandwich',
	'Baked Beans',
	'Popcorn',
	'Fried Chicken n Waffles',
	'New England Clam Chowder',
	'Smores',
	'Lobster Rolls',
	'Buffalo Wings',
	'Barbecue Ribs',
	'BLT',
	'Apple Pie',
	'Po Boy',
	'Green Chile Stew',
	'Chocolate Chip Cookies',
	'Blueberry Cobbler',
	'Chicago Style Pizza',
	'Nachos',
	'Philly Cheese Steak',
	'Hot Dogs',
	'Cheese Burger',
	'French Fries',
	'Beef Tacos',
	'Reuben Sandwich'
]

//Choose random words within wordBank array
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var lowerChosenWord = chosenWord.toLowerCase();
var split = lowerChosenWord.split('');
var wordCount = split.length;

console.log(lowerChosenWord);
console.log(wordCount);

//Blank Arrays
var underScore = [];
var userGuess = [];
var rightGuess = [];
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

startGame();

function startGame() {
			//Default settings for variables
			underScore = [];
			userGuess = [];
			rightGuess = [];
			wrongGuess = [];
			guessWrongMaximum = 10;

			//Create Underscore for each letter based on length of randomized words
			for (var i = 0; i < lowerChosenWord.length; i++) {
				underScore.push('_');
				//Removes the commas within the array and replaces with white space
			}
				//Push default settings to HTML DOM
				document.getElementById('underscore').innerHTML = underScore.join(' ');
				document.getElementById('rightGuess').innerHTML = rightGuess;
				document.getElementById('wrongGuess').innerHTML = wrongGuess;
				document.getElementById('guessWrongMaximum').innerHTML = guessWrongMaximum;
//Any letter will initiate below script
document.onkeyup = function(event) {

				document.getElementById('winsTracker').innerHTML = wins;
				document.getElementById('lossesTracker').innerHTML = losses;
				//userGuess will store keycode used
				var userGuess = event.key;
				//Looks in lowercaseChosennWord index for keystroke
				if (lowerChosenWord.indexOf(userGuess) > -1) {
				//Adds keystroke to rightGuess array
				rightGuess.push(userGuess);
				//Push to HTML DOM
				document.getElementById('rightGuess').innerHTML = rightGuess;
				//If not 'right' then 'wrong'
				} else {
				wrongGuess.push(userGuess);
				//Push to HTML DOM
				document.getElementById('wrongGuess').innerHTML = wrongGuess;
				guessWrongMaximum--;
				//Push to HTML DOM
				document.getElementById('guessWrongMaximum').innerHTML = guessWrongMaximum;

							//Game finishes with '0' guesses remaining and restarts
							if (guessWrongMaximum == 0) {
								losses++;
								//Push to HTML DOM
								document.getElementById('lossesTracker').innerHTML = losses;
								//Choose new random words within wordBank array for restart
								chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
								lowerChosenWord = chosenWord.toLowerCase();
								split = lowerChosenWord.split('');
								wordCount = split.length;
								//Restart Game
								startGame();
							}


			}

}
}

//If correct, update the 'underScore' to a letter and remove the 'underScore'.

//Update the 'rightGuess'/'wrongGuess' arrays. If the user types the same keys again it shouldn't count as incorrect or correct, neight should be addded twice. It will have to check back with both guess arrays.

//Add in script to compare var 'wordCount.length' vs var 'chosenWord.length' for achieving completion.

//If the user completes the word, change the graphic to the image associated with the 'wordBank' array and the name within the array.

		//If the word is completed before running out of guesses, wins++

//If the user types the same keys again it shouldn't count as incorrect. It will have to check back with the 'guess' array.
