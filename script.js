const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
let playerResult = 0;
let computerResult  = 0;

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissor"];
    let randomNumber = Math.floor(Math.random()*computerChoice.length);
    return computerChoice[randomNumber];
}



// basic function to check who win the round, rock paper scissor Game. 
function resultRound (playerSelection, computerSelection) {
     if(playerSelection=='rock' && computerSelection == 'scissor' ||
        playerSelection=='scissor'  && computerSelection=='paper' ||
        playerSelection=='paper' && computerSelection  =='rock') {
            return  'Player Won'
        } else if (playerSelection == computerSelection) {
            return 'Tie Game'
        } else {return 'Computer Won'}
    }