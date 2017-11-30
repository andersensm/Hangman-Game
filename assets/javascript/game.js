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

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x',
'y','z'];

//Choose random words within wordBank array
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var lowerChosenWord = chosenWord.toLowerCase();
//Removes White Space between words within string and takes raw character count
var removeWhiteSpace = lowerChosenWord.split(' ').join('');
var letterCount = removeWhiteSpace.length;

//Review in HTML DOM
console.log(lowerChosenWord);
console.log(letterCount);

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
			alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x',
			'y','z'];
			underScore = [];
			userGuess = [];
			rightGuess = [];
			wrongGuess = [];
			rightCounter = 0;
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

			/* WORKING----------------------
							for(var i= 0; i < alphabet.length; i++) {

									if(userGuess === alphabet[i]) {

												var alphabetSplice = alphabet.splice(i,1);
									}
			*///WORKING------------------


							//Looks in lowercaseChosennWord index for keystroke
							if (lowerChosenWord.indexOf(userGuess) > -1) {



			//If correct, update the 'underScore' to a letter and remove the 'underScore'.
			/* WORKING----------------------
								for(var i= 0; i < letterCount; i++) {

									if(removeWhiteSpace === userGuess) {
			*/ //WORKING------------------
											//Adds keystroke to rightGuess array
											rightGuess.push(userGuess);
											//Push to HTML DOM
											document.getElementById('rightGuess').innerHTML = rightGuess;
											rightCounter++;
			/*WORKING------------------
											underScore[i] = userGuess;
											document.getElementById('underscore').innerHTML = underScore.join(' ');
			*///WORKING------------------
														//Game finishes with '>0' guesses remaining and restarts with new word
														if (rightCounter === letterCount) {
															wins++;
															//Push to HTML DOM
															document.getElementById('winsTracker').innerHTML = wins;
															//Choose random words within wordBank array
															chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
															lowerChosenWord = chosenWord.toLowerCase();
															//Removes White Space between words within string and takes raw character count
															removeWhiteSpace = lowerChosenWord.split(" ").join("");
															letterCount = removeWhiteSpace.length;
															console.log(lowerChosenWord);

															startGame();
			/*WORKING------------------

															//Insert Image and Words for particular word

															var picturename =

															"<strong>" + chosenWord + "</strong>"

															var img =

															"<img src="assets/images/" + lowerChosenWord ".jpg" alt="+ chosenWord +">"

															document.getElementById('winimage').innerHTML = img;

															document.getElementById('pictitle').innerHTML = picturename;

															//Win game
															winGame();

															}
			*///WORKING------------------
														}
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
															//Choose random words within wordBank array
															chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
															lowerChosenWord = chosenWord.toLowerCase();
															//Removes White Space between words within string and takes raw character count
															removeWhiteSpace = lowerChosenWord.split(" ").join("");
															letterCount = removeWhiteSpace.length;
															console.log(lowerChosenWord);
															//Restart Game
															startGame();
														}

											}

}
}
/* WORKING------------------
function winGame() {

                alert("Press Spacebar for next word!");

                document.onkeyup = function(event){

                //Keycode Spacebar
                                if(event.keyCode === 32){
																	//Choose random words within wordBank array
																	chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
                                  lowerChosenWord = chosenWord.toLowerCase();
                                  //Removes White Space between words within string and takes raw character count
                                  removeWhiteSpace = lowerChosenWord.split(" ").join("");
                                  letterCount = removeWhiteSpace.length;

																  startGame();
																	}

							 }
}
*///WORKING------------------

//If correct, update the 'underScore' to a letter and remove the 'underScore'.

//Update the 'rightGuess'/'wrongGuess' arrays. If the user types the same keys again it shouldn't count as incorrect or correct, neight should be addded twice. It will have to check back with both guess arrays.

//If the user completes the word, change the graphic to the image associated with the 'wordBank' array and the name within the array.

//If the user types the same keys again it shouldn't count as incorrect. It will have to check back with the 'guess' array.
