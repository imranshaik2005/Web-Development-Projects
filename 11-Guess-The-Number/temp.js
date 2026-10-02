const randomNumber = Math.floor(Math.random() * (10-1)+1);
const result = document.getElementById("result");
let userGuess;

document.getElementById("submit").addEventListener("click", function(){
    userGuess = parseInt(document.getElementById("guessInput").value);
    guessCheck();
})

function guessCheck(){
    result.textContent = "";
    if(userGuess !== randomNumber){
        if(userGuess < randomNumber){
            result.textContent = "Too Low try again";
        }

        else if(userGuess > randomNumber){
            result.textContent = "Too high try again";
        }
        return;
    }
    result.textContent = "Correct Guess! Bravooo!";
}
