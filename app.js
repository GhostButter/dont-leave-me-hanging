document.body.addEventListener('keydown', createLetters);
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordBank = ["hi", "parsimonious"]
var randomWord = ""
var poopBank = []

function startGame() {
    var random = Math.floor(Math.random() * (2 - 0));
    console.log(wordBank[random])
    randomWord = wordBank[random];
    document.getElementById("letters-container").innerHTML = alphabet;
    for (var i = 0; i < randomWord.length; i++) {
        document.getElementById("word-container").innerHTML += "-"
    }
    poopBank.push(document.getElementById("word-container").innerHTML)
}

function createLetters(e) {
    console.log(e)
    var index = 0
    for (i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === e.key) {
        	checkForWord(alphabet[i])
            document.getElementById('guesses-container').innerHTML += alphabet[i]
            index = i;
            alphabet.splice(index, 1);
            document.getElementById('letters-container').innerHTML = alphabet;
        }
    }
}

function checkForWord(letter) {
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === letter) {
            poopBank[i] = letter;
            document.getElementById('word-container').innerHTML = poopBank;
            console.log("This letter is in the word")
        }
    }
}
startGame();
createLetters();