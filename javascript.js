var playerSelection = prompt("Please enter your choice?")

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
        }

    }

var computerSelection;

function getComputerChoice(){
    computerSelection = Math.floor((Math.random()*3)+1);
    if (computerSelection == 1){
        computerSelection = "scissors";
        return computerSelection;
    }
    else if (computerSelection == 2){
        computerSelection = "paper";
        return computerSelection;
    }
    else if (computerSelection == 3){
        computerSelection = "rock";
        return computerSelection;
    }
  }

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log ("Congrats! You win!"); 
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log ("No.. You lost!"); 
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log ("No.. You lost!"); 
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log ("Congrats! You win!");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log ("Congrats! You win!");
    }     
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log ("No.. You lost!"); 
    } 
    else if (playerSelection == computerSelection){
        console.log ("So close... it was a tie!"); 
    }
    else {
        console.log("did you input correctly?");
    }
  }

function game(){
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Please enter your choice?")
        checkPlayerSelection();
        getComputerChoice();
        playRound();
        console.log("You have selected " + playerSelection);
        console.log("The computer has selected " +computerSelection);
        console.log(`In round ${i+1}, ${playRound(playerSelection, computerSelection)}`)
     }
}

game();