let winners=[];
let choices= ["rock","paper","scissors"];

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)]
}

let playerWin = 0 ;
let computerWin=0;
let gameWinner ="";

function startGame(){
    
   
    //add event listeners for all three buttons 

        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click',() =>{
                playerSelection=button.id;
                const computerSelection = computerPlay();
                battleWinText.textContent= (playRound(computerSelection,playerSelection));
                playerWinText.textContent='Player Win Total: '+ playerWin;
                computerWinText.textContent= 'Computer Win Total: ' + computerWin;
                endGame();

                });
         });

    function playRound(computerSelection,playerSelection){

        //PC SELECTS ROCK
    
        if (computerSelection == "rock" && playerSelection == "rock") {
            alert("Draw. Both of you played Rock");   
        }
        else if (computerSelection == "rock" && playerSelection == "paper"){
            playerWin++;
            alert("You win! Paper beats Rock!");
        }
        else if (computerSelection == "rock" && playerSelection == "scissors"){
            computerWin++;
            alert("You Lose! Rock beats Scissors");
        }
        //PC SELECTS PAPER
    
        else if (computerSelection == "paper" && playerSelection == "rock"){
            computerWin++;
            alert("You Lose! Paper beats Rock");
        }
        else if (computerSelection == "paper" && playerSelection == "paper"){
            alert("Draw! Both Picked Paper");
        }
        else if (computerSelection == "paper" && playerSelection == "scissors"){
            playerWin++;
            alert("You Win! Scissors beats Paper");
        }
    
        //PC SELECTS SCISSORS
    
        else if (computerSelection == "scissors" && playerSelection == "scissors"){
            alert("Draw! Both picked Scissors");
        }
        else if (computerSelection == "scissors" && playerSelection == "paper"){
            computerWin++;
            alert("You Lose! Scissors beats Paper");
        }
        else if (computerSelection == "scissors" && playerSelection == "rock"){
            playerWin++;
            alert("You Win! Rock beats Scissors");
        }
    };


    //DOM Manipulation
    const container = document.querySelector('#container');
    const resultsDiv = document.createElement('div');
    resultsDiv.style.marginTop='20px';
    container.appendChild(resultsDiv);
    
    //player win tracking dom
    let playerWinText = document.createElement('p');
    playerWinText.style.color='blue';
    resultsDiv.appendChild(playerWinText);

    //computer win tracking dom
    let computerWinText = document.createElement('p');
    computerWinText.style.color='blue';
    resultsDiv.appendChild(computerWinText);

    //battle win dom
    const battleWinText =document.createElement('p');
    battleWinText.style.color='black';
    resultsDiv.appendChild(battleWinText);

    //game win dom
    const gameWinText = document.createElement('p');
    gameWinText.style.color="orange";
    resultsDiv.appendChild(gameWinText);

    function endGame(){
        if (playerWin == 5){
            gameWinner = "You win!";
            gameWinText.textContent=gameWinner;
    
            //disable buttons
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
    
            //Create replay button
            const playAgainButton=document.createElement('button');
            playAgainButton.textContent="Play Again";
            resultsDiv.appendChild(playAgainButton);
    
            //Make button reload page
            playAgainButton.addEventListener('click',()=>{
                location.reload();
            });
    
        }else if(computerWin == 5){
            gameWinner="You Lose!";
            gameWinText.textContent = "YOU LOSE";
    
            //disable buttons
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
    
              //Create replay button
              const playAgainButton=document.createElement('button');
              playAgainButton.textContent="Play Again";
              resultsDiv.appendChild(playAgainButton);
      
              //Make button reload page
              playAgainButton.addEventListener('click',()=>{
                  location.reload();
              });
        };
    };
    
    

};


startGame();



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


