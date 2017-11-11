//let's make some variables
//word and letter variables
var wordList = ['sushi', 'oatmeal', 'scallops', 'venison', 'adobo',
	 'horseradish', 'dumpling', 'guavas', 'potato', 'cookies', 
	 'custard', 'tortillas', 'avocados', 'steak', 'breadcrumbs', 
	 'pepper', 'ketchup', 'artichoke', 'molasses', 'mint',
	 'arugula', 'almonds', 'sardines', 'rosemary', 'granola',
	 'honey', 'buckwheat', 'tarragon', 'coriander', 'cucumber',
	 'beer', 'cheddar', 'walnuts', 'vinegar', 'yogurt']
var word =''		//word picked as random saved as string
var wordLength = 0	
var letters = []	//array to store letters of word
var output = []		//array to display underscore or correct letters
var wrong = []		//array to display incorrect guesses
//counters
var guesses = 1
var wins = 0
var losses = 0




//function to play audio when lose
var x = document.getElementById("loser")
function playAudioLoser(){
	x.play()
}
//function to play audio when win
var y = document.getElementById("winner")
function playAudioWinner(){
	y.play()
}




//function to begin game
function beginGame() {
//reset variables
    guesses = 10
    wrong = []
    output = []
//choose random word from array of words
	word = wordList[Math.floor(Math.random() * wordList.length)]
//break up word string into characters and store in letters array
	letters = word.split('')
	// console.log(letters)
	// console.log(word)
//determine length of word to use in loops
	wordLength = letters.length
//for loop to generate underscores
	for(var i = 0; i < wordLength; i++) {
		output.push('_')
	}
	// console.log(output)
//put new content in word, guesses, win, ad loss divs           
    document.getElementById('wordDiv').innerHTML = output.join(' ')
    document.getElementById('winDiv').innerHTML = wins
    document.getElementById('loseDiv').innerHTML = losses
    document.getElementById('guessesDiv').innerHTML = guesses
}




//function to verify user inputs and display right or wrong guesses
function verify(input){
//create and set variable for correctness
	var correct
//run loop for length of word for correct letters
	for(var i = 0; i < wordLength; i++) {
		if (input === word[i]) {
			correct = true
		}
	}
//if input is correct, replace output of underscores with input
//else push incorrect input to wrong array and take away a guess
	if (correct) {
		// console.log(correct)
		for(var i = 0; i < wordLength; i++) {
			if (input === word[i]) {
				output[i] = input
			}
		}
	} else {
		wrong.push(input)
		guesses--
	}
}




//create function to count wins and losses
function counters() {
	document.getElementById('wordDiv').innerHTML = output.join(' ')
	document.getElementById('guessesDiv').innerHTML = guesses
	document.getElementById('wrongDiv').innerHTML = wrong
//win when letters string === output string
	if(letters.toString() === output.toString()) {
		playAudioWinner()
		wins++
		wrong = []
		document.getElementById('wrongDiv').innerHTML = wrong
		document.getElementById('winDiv').innerHTML = wins
		document.getElementById('wordDiv').innerHTML = word
		beginGame()
//lose if user has no more guesses
	} else if (guesses === 0) {
		playAudioLoser()
		losses++
		wrong = []
		document.getElementById('wrongDiv').innerHTML = wrong
		document.getElementById('loseDiv').innerHTML = losses
		beginGame()
	}
}




//begin game
beginGame()




//event listener
//  when user presses key, turn letters to lowercase
//  run verify for user input
//  run counters
document.onkeypress = function() {
	var input = String.fromCharCode(event.keyCode).toLowerCase()
	verify(input)
	counters()
}