var animals = [
    "alligator", "baboon", "crocodile", "dolphin", "elephant", "flamingo", "giraffe", "hyena", "iguana", "jaguar", "koala", "leopard", "meerkat", "newt", "ocelot", "panda", "quail", "rhino", "shark", "tiger", "unicorn", "vulture", "walrus", "yak", "zebra"
]

var userArray = [];

var tries = 0;

var validKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function resetGame() {

    // create blank array for the user's guessed letters
    userArray = [];
    // set tries to 0
    tries = 0;
    // create blank array to replace letters of the word with dashes
    blankArray = [];
    //generate a random word from the array of animals
    computerGuess = animals[Math.floor(Math.random() * animals.length)];
    //split the word into an arry of its individual letters
    computerGuessArray = computerGuess.split("");
    // fill the blank array with dashes equal to the number of letters in the word
    for (var i=0; i<computerGuessArray.length; i++) {
        blankArray.push("-");
    };
    //make the blank array a string so commas do not appear on the page
    document.getElementById("word").innerHTML = blankArray.join(" ");  
    // set the guessed letter to nothing
    document.getElementById("user-guess").textContent = " "
    // set the content of the guessed letters to the user's input
    document.getElementById("user-guesses").textContent = userArray
    // set the guesses left to be equal to the number of letters in the word
    document.getElementById("guesses-left").textContent = computerGuessArray.length;
}

// run function when user presses a key
document.onkeyup = function(event) {  

    // set the input to lower case so it doesn't create an error
    userGuess = event.key.toLowerCase();
    
    //if user's input is a valid letter and it has not already been guessed
    if (validKeys.indexOf(userGuess)  > -1 && userArray.indexOf(" " + userGuess) === -1) {
    // add user's guess to the guessed letters array and add a space so it's visually appealing
    userArray.push(" " + userGuess);
    // reset text content to update
    document.getElementById("user-guess").textContent = userGuess;
    document.getElementById("user-guesses").textContent = userArray;

        if (computerGuessArray.indexOf(userGuess) === -1) {
            tries++;
            document.getElementById("guesses-left").textContent = (computerGuessArray.length - tries);
        }
        else {
            for (i=0; i<computerGuessArray.length; i++){

                // if letter with index of i equals user input, set letter index variable to i, reset the blank array's dash at that index to be equal to the user guess, and reload the word to show the correctly guessed letter
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