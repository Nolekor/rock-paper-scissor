let playerResult = 0;
let computerResult  = 0;
let computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
const annoucerText  = document.querySelector('.announcer');
const contentAnnouncer = document.createElement('p');
let pickWinner = "";
let combatLog = [];
let player_score = `Player Score: ${playerResult}`
let computer_score = `Computer Score: ${computerResult}`
const roundCounter = document.querySelector('.round-counter');
const playerScor = document.createElement('p')
const computerScor = document.createElement('p')

roundCounter.appendChild(playerScor)
roundCounter.appendChild(computerScor)



function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissor"];
    let randomNumber = Math.floor(Math.random()*computerChoice.length);
    return computerChoice[randomNumber];
}

function getPlayerChoice() {
    
}

// basic function to check who win the round, rock paper scissor Game. 
function resultRound (playerSelection, computerSelection) {
     if(playerSelection=='rock' && computerSelection == 'scissor' ||
        playerSelection=='scissor'  && computerSelection=='paper' ||
        playerSelection=='paper' && computerSelection  =='rock') {
            return ' Player Won'
        } else if (playerSelection == computerSelection) {
            return ' Tie Game'
        } else {
            return ' Computer Won'}
    }
function onClickSelection(pChoice) {
    let cChoice = getComputerChoice()
    pickWinner = (resultRound(pChoice, cChoice))
    contentAnnouncer.textContent = pickWinner;
    annoucerText.appendChild(contentAnnouncer);
    addCombatLog();
    score(pickWinner);
    player_score = `Player Score: ${playerResult}`;
    computer_score = `Computer Score: ${computerResult}`
    playerScor.textContent = player_score;
    computerScor.textContent = computer_score;
    console.log(player_score)
    gameOver(playerResult, computerResult)
}

function addCombatLog(){
    combatLog.push(pickWinner)
    document.getElementById("demo").innerHTML = combatLog;
    console.log(combatLog)
}

function score(winner){
    if (winner ==' Player Won') {playerResult++}
    else if(winner == ' Computer Won')  {computerResult++}
    console.log(playerResult, computerResult)
}

function gameOver(player_score, computer_score) {
    if (player_score == "5") {return alert("Player Won!")}
    else if (computer_score == "5") {return alert("Computer  Won!") 
}
}




// function game() {
//     playerResult = 0;
//     computerResult  = 0;
//     roundCount = 0;
//     for (let i = 0; i < 5; i++) {
//     let playerChoice = getPlayerChoice();
//     let computerChoice = getComputerChoice();
//     let gameResult = resultRound(playerChoice,computerChoice);
//     console.log(playerChoice, computerChoice, gameResult)
//         if (gameResult=='Player Won') {playerResult++
//         } else  if (gameResult=='Computer Won') {computerResult++}
//         else {gameResult='Tie'}
//     roundCount++    
//     }
// }
// game() 