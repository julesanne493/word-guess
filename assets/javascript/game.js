var animals = [
    "alligator", "baboon", "crocodile", "dolphin", "elephant", "flamingo", "giraffe", "hyena", "iguana", "jaguar", "koala", "leopard", "meerkat", "newt", "ocelot", "panda", "quail", "rhino", "shark", "tiger", "unicorn", "vulture", "walrus", "yak", "zebra"
]

var userArray = [];

var tries = 0;

var validKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function resetGame() {

    userArray = [];
    tries = 0;
    blankArray = [];
    computerGuess = animals[Math.floor(Math.random() * animals.length)];
    computerGuessArray = computerGuess.split("");

    for (var i=0; i<computerGuessArray.length; i++) {
        blankArray.push("-");
    };
    document.getElementById("word").innerHTML = blankArray.join(" ");  
    document.getElementById("user-guess").textContent = " "
    document.getElementById("user-guesses").textContent = userArray
    document.getElementById("guesses-left").textContent = computerGuessArray.length;
}

document.onkeyup = function(event) {  

    userGuess = event.key.toLowerCase();
    
    if (validKeys.indexOf(userGuess)  > -1 && userArray.indexOf(" " + userGuess) === -1) {
    userArray.push(" " + userGuess);
    document.getElementById("user-guess").textContent = userGuess;
    document.getElementById("user-guesses").textContent = userArray;

        if (computerGuessArray.indexOf(userGuess) === -1) {
            tries++;
            document.getElementById("guesses-left").textContent = (computerGuessArray.length - tries);
        }
        else {
            for (i=0; i<computerGuessArray.length; i++){
                if (computerGuessArray[i] === userGuess) {
                    var letterIndex = [i];
                    blankArray[letterIndex] = userGuess;
                    document.getElementById("word").innerHTML = blankArray.join(" ");
                }
            }
    }

    }
    if (tries === computerGuessArray.length) {
        var confirmGame = confirm("Sorry, you lost. The word was " + computerGuess + ". Play again?");
        if (confirmGame) {
            resetGame();
        }
        else {
            alert ("Boooo.")
        }
    }
    
    if (blankArray.indexOf("-") === -1) {
        var confirmGame = confirm("Congratulations! You won. The word was " + computerGuess + ". Play again?")
        if (confirmGame){
            resetGame();
        }
        else (
            alert("Boooo.")
        )
}
}

resetGame();