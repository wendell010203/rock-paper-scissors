let pscore = 0;
let cscore = 0;

function rand(num){
    return Math.floor(Math.random()*num) + 1
}

function getComputerChoice(){
    switch (rand(3)) {
        case 1:
            return "Rock"
            break;

        case 2:
            return "Paper"
            break;

        case 3:
            return "Scissors"
            break;
    
        default:
            break;
    }
}

function round(pselect , cselect) {
    if (pselect == cselect) {
        return `Tie! ${pselect} ties with ${cselect}`;
    }else if (pselect == "ROCK") {
        if (cselect == "SCISSORS") {
            pscore++;
            return `You Win! ${pselect} beats ${cselect}`;
        }else{
            cscore++;
            return `You Lose! ${cselect} beats ${pselect}`;
        }
    }else if (pselect == "PAPER") {
        if (cselect == "ROCK") {
            pscore++;
            return `You Win! ${pselect} beats ${cselect}`;
        }else{
            cscore++;
            return `You Lose! ${cselect} beats ${pselect}`;
        }
    }else if (pselect == "SCISSORS"){
        if (cselect == "PAPER") {
            pscore++;
            return `You Win! ${pselect} beats ${cselect}`;
        }else{
            cscore++;
            return `You Lose! ${cselect} beats ${pselect}`;
        }
    }else{
        console.log(`${pselect} is not a choice. choose between rock, paper, scissors`);
    }
}

function game(rounds) {
    for(let i = 1; i <= rounds; i++){
        console.log(`Game ${i}`);

        console.log(round(prompt("rock paper scissors?").toUpperCase() , getComputerChoice().toUpperCase()));
    
        console.log(`Player: ${pscore} - Computer ${cscore}`);
    }

    if(pscore == cscore){
        console.log("its a tie");
    }else if(pscore > cscore) {
        console.log("you win");
    }else{
        console.log("you lose");
    }
}

game(2);