var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wordBank = ["meme","parsimonious"]
var randomWord = ""
var poopBank = []
function startGame() {
	var random =Math.floor(Math.random() * (2 - 0));
	console.log(wordBank[random])
	randomWord = wordBank[random];
document.getElementById("letters-container").innerHTML = alphabet;
for (var i = 0; i < randomWord.length; i++) {
	document.getElementById("word-container").innerHTML += "-"
}
}
startGame()