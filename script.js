let choices= ["rock","paper","scissors"];

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)]
}

/*function playerSelection(){
    let userSelection =prompt("Enter your choice:","");
    return userSelection.toLowerCase;
} */

function playRound(computerSelection,playerSelection){

    //PC SELECTS ROCK

    if (computerSelection == "rock" && playerSelection == "rock") {
        alert("Draw. Both of you played Rock");   
    }
    else if (computerSelection == "rock" && playerSelection == "paper"){
        alert("You win! Paper beats Rock!");
    }
    else if (computerSelection == "rock" && playerSelection == "scissors"){
        alert("You Lose! Rock beats Scissors");
    }
    //PC SELECTS PAPER

    else if (computerSelection == "paper" && playerSelection == "rock"){
        alert("You Lose! Paper beats Rock");
    }
    else if (computerSelection == "paper" && playerSelection == "paper"){
        alert("Draw! Both Picked Paper");
    }
    else if (computerSelection == "paper" && playerSelection == "scissors"){
        alert("You Win! Scissors beats Paper");
    }

    //PC SELECTS SCISSORS

    else if (computerSelection == "scissors" && playerSelection == "scissors"){
        alert("Draw! Both picked Scissors");
    }
    else if (computerSelection == "scissors" && playerSelection == "paper"){
        alert("You Lose! Scissors beats Paper");
    }
    else if (computerSelection == "scissors" && playerSelection == "rock"){
        alert("You Win! Rock beats Scissors");
    }
}

function game(){
    for (let i=0;i<5;i++){
        let playerChoice = prompt("Enter your choice:","");
        let playerSelection = playerChoice.toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(computerSelection,playerSelection));

    }
}

console.log(game());








