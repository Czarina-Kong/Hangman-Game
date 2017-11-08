//create an array of words

var words = ['sushi', 'oatmeal', 'scallops', 'venison', 'adobo',
	 'horseradish', 'dumpling', 'guavas', 'potato', 'cookies', 
	 'custard', 'tortillas', 'avocados', 'steak', 'breadcrumbs', 
	 'pepper', 'ketchup', 'artichoke', 'molasses', 'mint',
	 'arugula', 'almonds', 'sardines', 'rosemary', 'granola',
	 'honey', 'buckwheat', 'tarragon', 'coriander', 'cucumber',
	 'beer', 'cheddar', 'walnuts', 'vinegar', 'yogurt'];

//make sure array works
// for (var i = 0; i < words.length; i++) {
// 	console.log(words[i])
// }

//begin game when any key is pressed
//choose random word and display _ for every letter

// document.onkeyup = function(){
	var randomWord = words[Math.floor(Math.random() * words.length)];
	document.getElementById('game').innerHTML = randomWord;