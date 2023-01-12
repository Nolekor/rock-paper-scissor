let playerResult = 0;
let computerResult  = 0;
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissor"]
    let randomNumber = Math.floor(Math.random()*computerChoice.length);
    return computerChoice[randomNumber]
}


function getPlayerChoice() {
   let playerChoice = prompt("Pick Rock, Paper or Scissor").toLowerCase()
   return playerChoice
}

// basic function to check who win the round, rock paper scissor Game. 
function resultRound (playerSelection, computerSelection) {
//     if (playerSelection  == computerSelection) {
//         return 'Tie'
//     } else  if (playerSelection == 'rock') {
//       if (computerSelection == 'paper') {
//        return "Computer Won"
//         } else {
//         return 'Player Won'
//     }} else if (playerSelection == 'paper') {
//         if (computerSelection  == 'scissor') {  
//             return "Computer Won"
//         } else {
//         return 'Player Won'
//     }} else if (playerSelection == 'scissor') {
//         if (computerSelection == 'rock') {
//             return "Computer Won"
//           } else {
//             return 'Player Won'
//           }
//     }
// }
    if( playerSelection=='rock' && computerSelection == 'scissor' ||
        playerSelection=='scissor'  && computerSelection=='paper' ||
        playerSelection=='paper' && computerSelection  =='rock') {
            return  'Player Won'
        } else if (playerSelection == computerSelection) {
            return 'Tie Game'
        } else {return 'Computer Won'}
    }

function game() {
    playerResult = 0;
    computerResult  = 0;
    roundCount = 0;
    for (let i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let gameResult = resultRound(playerChoice,computerChoice);
    console.log(playerChoice, computerChoice, gameResult)
        if (gameResult=='Player Won') {playerResult++
        } else  if (gameResult=='Computer Won') {computerResult++}
    roundCount++    
    }
}
game()