console.log("Hello World");

var playerSelection = prompt()

function checkPlayerSelection () {
    playerSelection = playerSelection.toLocaleLowerCase();

    if (playerSelection== "scissors" ){
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

function getComputerChoice(computerSelection){
    var x = ["scissors","paper","rock"];
    var  i = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    var computerSelection = x[i];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }

  checkPlayerSelection();
  console.log(playerSelection);
