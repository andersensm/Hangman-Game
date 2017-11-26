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

//Choose random word in number format
var arrayNum = Math.floor(Math.random() * wordBank.length);
//Convert Random word from numbers to letters
var chosenLetter = wordBank[arrayNum];
//Blank Arrays
var underScore = [];
var correctGuess = [];
var wrongGuess = [];
var rightWord = [];

console.log(chosenLetter);

//Counters
var wins = 0;
var losses = 0;
var wrongLetter = 0;
var guessWrongMaximum = 10;

//------------------------------------------------------------------------------
//FUNCTIONS
//------------------------------------------------------------------------------

function reset() {

      	//Choose random word in number format
      	var arrayNum = Math.floor(Math.random() * wordBank.length);
      	//Convert Random word from numbers to letters
      	var chosenLetter = wordBank[arrayNum];
        //Reset of Counters & Arrays
        var wrongLetter = 0;
        var guessWrongMaximum = 10;
        var correctGuess = [];
        var wrongGuess = [];
        var rightWord = [];
        var underScore = [];



        startGame();
}


function startGame () {

        //Choose random word in number format
        var arrayNum = Math.floor(Math.random() * wordBank.length);
        //Convert Random word from numbers to letters
        var chosenLetter = wordBank[arrayNum];
        //Reset of Counters & Arrays
        var wrongLetter = 0;
        var guessWrongMaximum = 10;
        var correctGuess = [];
        var wrongGuess = [];
        var rightWord = [];
        var underScore = [];

        //Create Underscore for each letter based on length of randomized words
        for (var i = 0; i < chosenLetter.length; i++) {
        	underScore.push('_');
        }
        //Removes the commas within the array and replaces with white space
        document.getElementById('underscore').innerHTML = underScore.join(' ');

//IN WORK-----------------------------------------------------------------------




}

//------------------------------------------------------------------------------
//Begins Game
//------------------------------------------------------------------------------
startGame();












//If correct, update the 'underScore' to a letter and remove the 'underScore'.

//Update the 'rightWord' array. If the user types the same keys again it shouldn't count as incorrect. It will have to check back with the 'guess' array.

//If the user completes the word, change the graphic to the image associated with the 'wordBank' array and the name within the array.

//If incorrect, update the 'guess' array and also reduce the number of tries by 1.

//If the user types the same keys again it shouldn't count as incorrect. It will have to check back with the 'guess' array.

//If the user hits the 'guessMaximum', end the game.
