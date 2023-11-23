let gameCount = 1;
let pscore = 0;
let cscore = 0;

const rps = document.querySelector('.rpsContainer');
const roundCounter = document.querySelector('.roundCounter');
const roundContainer = document.querySelector('.roundContainer');
const score = document.querySelector('.score');

function rand(num){
    return Math.floor(Math.random()*num) + 1
}

function getComputerChoice(){
    switch (rand(3)) {
        case 1:
            return "ROCK"
            break;

        case 2:
            return "PAPER"
            break;

        case 3:
            return "SCISSORS"
            break;
    
        default:
            break;
    }
}

function round(pselect , cselect) {
    switch (pselect) {
        case cselect:
            return `Tie! ${pselect} ties with ${cselect}`;
            break;

        case "ROCK":
            if (cselect == "SCISSORS") {
                pscore++;
                return `You Win! ${pselect} beats ${cselect}`;
            }else{
                cscore++;
                return `You Lose! ${cselect} beats ${pselect}`;
            }
            break;

        case "PAPER":
            if (cselect == "ROCK") {
                pscore++;
                return `You Win! ${pselect} beats ${cselect}`;
            }else{
                cscore++;
                return `You Lose! ${cselect} beats ${pselect}`;
            }
            break;

        case "SCISSORS":
            if (cselect == "PAPER") {
                pscore++;
                return `You Win! ${pselect} beats ${cselect}`;
            }else{
                cscore++;
                return `You Lose! ${cselect} beats ${pselect}`;
            }
            break;
    }
}

function game(pselect) {
    roundCounter.innerText = `Game ${gameCount}`;
    gameCount++;

    roundContainer.innerText = round(pselect , getComputerChoice());

    score.innerText = `Player: ${pscore} - Computer ${cscore}`;
}

rps.addEventListener('click' , (e) => {
    let pselect = e.target.innerText;

    game(pselect);
});