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
				document.getElementById('underscore').innerHTML = underScore.join(' ');
				document.getElementById('rightGuess').innerHTML = rightGuess;
				document.getElementById('wrongGuess').innerHTML = wrongGuess;
				document.getElementById('guessWrongMaximum').innerHTML = guessWrongMaximum;

document.onkeyup = function(event) {

				document.getElementById('winsTracker').innerHTML = wins;
				document.getElementById('lossesTracker').innerHTML = losses;


				var userGuess = event.key;

				if (lowerChosenWord.indexOf(userGuess) > -1) {


				rightGuess.push(userGuess);


				document.getElementById('rightGuess').innerHTML = rightGuess;


				} else {

				wrongGuess.push(userGuess);

				document.getElementById('wrongGuess').innerHTML = wrongGuess;

				guessWrongMaximum--;

				document.getElementById('guessWrongMaximum').innerHTML = guessWrongMaximum;

							if (guessWrongMaximum == 0) {
								losses++;
								document.getElementById('winsTracker').innerHTML = wins;
								document.getElementById('lossesTracker').innerHTML = losses;

								//Choose random words within wordBank array
								chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
								lowerChosenWord = chosenWord.toLowerCase();
								split = lowerChosenWord.split('');
								wordCount = split.length;


								startGame();
							}


			}

}
}

//If correct, update the 'underScore' to a letter and remove the 'underScore'.

//Update the 'rightGuess'/'wrongGuess' arrays. If the user types the same keys again it shouldn't count as incorrect or correct, neight should be addded twice. It will have to check back with both guess arrays.

//If the user completes the word, change the graphic to the image associated with the 'wordBank' array and the name within the array.

		//If the word is completed before running out of guesses, wins++

//If the user types the same keys again it shouldn't count as incorrect. It will have to check back with the 'guess' array.
