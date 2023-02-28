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

var computerSelection = Math.floor((Math.random()*3)+1);

function getComputerChoice(){
    if (computerSelection = 1){
        computerSelection = "scissors";
        return computerSelection;
    }
    else if (computerSelection= 2){
        computerSelection = "paper";
        return computerSelection;
    }
    else if (computerSelection= 3){
        computerSelection = "rock";
        return computerSelection;
    }
  }


function playRound(playerSelection, computerSelection) {
    // your code here!
  }

  checkPlayerSelection();
  getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
