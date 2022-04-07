let winners=[];
let choices= ["rock","paper","scissors"];

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function startGame(){
    let playerWin = 0 ;
    let computerWin=0;
    let gameWinner ='';

    //add event listeners for all three buttons 

        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click',() =>{
                playerSelection=button.id;
                const computerSelection = computerPlay();
                console.log(playRound(computerSelection,playerSelection));
                battleWinText= (playRound(computerSelection,playerSelection));
                
                playerWinText='Player Win Total: '+ playerWin;
                computerWinText= 'Computer Win Total: ' + computerWin;

        })
    }

    function playRound(computerSelection,playerSelection){

        //PC SELECTS ROCK
    
        if (computerSelection == "rock" && playerSelection == "rock") {
            return "Tie";   
        }
        else if (computerSelection == "rock" && playerSelection == "paper"){
            return "Player";
        }
        else if (computerSelection == "rock" && playerSelection == "scissors"){
            return "Computer";
        }
        //PC SELECTS PAPER
    
        else if (computerSelection == "paper" && playerSelection == "rock"){
            return "Computer";
        }
        else if (computerSelection == "paper" && playerSelection == "paper"){
            return "Tie";
        }
        else if (computerSelection == "paper" && playerSelection == "scissors"){
            return "Player";
        }
    
        //PC SELECTS SCISSORS
    
        else if (computerSelection == "scissors" && playerSelection == "scissors"){
            return "Tie";
        }
        else if (computerSelection == "scissors" && playerSelection == "paper"){
            return "Computer";
        }
        else if (computerSelection == "scissors" && playerSelection == "rock"){
            return "Player";
        }
    };











//DOM Manipulation
const container = document.querySelector('#container');
const resultsDiv = document.createElement('div');
resultsDiv.style.marginTop='20px';
container.appendChild(resultsDiv);

//player win tracking dom
const playerWinText = document.createElement('p');
playerWinText.style.color='blue';
//playerWinText.textContent = "Player wins: " + playerWin;
resultsDiv.appendChild(playerWinText);

//computer win tracking dom
const computerWinText = document.createElement('p');
computerWinText.style.color='blue';
//computerWinText.textContent = "Computer wins: " + computerWin;
resultsDiv.appendChild(computerWinText);

//battle win dom
const battleWinText =document.createElement('p');
battleWinText.style.color='black';
resultsDiv.appendChild(battleWinText);

//game win dom
const gameWinText = document.createElement('p');
gameWinText.style.color="orange";
//gameWinText.textContent=gameWinner;
resultsDiv.appendChild(gameWinText);



/*
function game(){
    for (let i=0;i<5;i++){
        let playerChoice = prompt("Enter your choice:","");
        let playerSelection = playerChoice.toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(computerSelection,playerSelection));

    }
} 
*/

/*function playRound(computerSelection,playerSelection){

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
};*/


