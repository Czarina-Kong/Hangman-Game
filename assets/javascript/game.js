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

//choose random word and display _ for every letter
	var randomWord = words[Math.floor(Math.random() * words.length)];
//console log random word and random word length
	console.log(randomWord)
	console.log(randomWord.length)

	for (var i = 0; i < randomWord.length; i++) {
		var underScore = document.createElement ('t')
		underScore.innerHTML='_ '
		game.appendChild(underScore)
	}

//if user keys correct letter,
//replace appropriate underscore with correct letter


  var check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
        animate();
      }
    }
  }