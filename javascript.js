var playerSelection;
var computerSelection;
var result;

function checkPlayerSelection () {
    playerSelection = playerSelection.toLocaleLowerCase();

    if (playerSelection=="scissors" ){
        return playerSelection;
    }   
    else if (playerSelection=="rock"){
        return playerSelection;
    }
    else if (playerSelection=="paper"){
        return playerSelection;
    }
    else{
        console.log ('Please enter either Rock, Paper, Scissors!');
        return;
    }

    }

function getComputerChoice(){
    computerSelection = Math.floor((Math.random()*3)+1);
    switch (computerSelection) {
        case 1:
            computerSelection = "scissors";
            return computerSelection;
        case 2:
            computerSelection = "paper";
            return computerSelection;
        case 3:
            computerSelection = "rock";
            return computerSelection;
    }
  }


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return result = "Congrats! You win!"; 
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return result = "No.. You lost!"; 
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return result = "No.. You lost!"; 
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return result = "Congrats! You win!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return result = "Congrats! You win!";
    }     
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return result = "No.. You lost!"; 
    } 
    else if (playerSelection == computerSelection) {
        return result = "So close... it was a tie!"; 
    }
    else {
        return result = "Your input was incorrect!"; 
    }
  }

function game(){
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Please enter your choice?")

        checkPlayerSelection();
        getComputerChoice();
        playRound(playerSelection, computerSelection);

        console.log("You have selected " + playerSelection);
        console.log("The computer has selected " +computerSelection);
        console.log(`In round ${i+1}, ${result}`)
     }
}


game();