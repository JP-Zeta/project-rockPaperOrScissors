console.log("Hello world!");
let humanScore = 0;
let computerScore = 0;

//Opcion de la maquina
function getComputerChoice(){
    let opc;
    let choice;
    
    opc = Math.floor(Math.random() * 3);

    switch (opc) {
        case 0: 
            return choice = "rock";
            break;
        case 1: 
            return choice = "paper";
            break;
        case 2: 
            return choice = "scissors";
            break;
    
        default:
            break;
    }
}

//Opcion del humano
function getHumanChoice(){
    let choice;
    
    choice = prompt("Enter your choice Rock, Paper, Scissors): ");
    return choice.toLowerCase();
}
//console.log("Human choice: " + human);



//console.log("Computer choice: " + computer);


//Validate choices
function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {

        return humanScore++;
    } else if (humanChoice === computerChoice) {
        return 0;
    } else {
        return computerScore++;
    }
    
}

function playGame(cS, hS) {
    
    if (cS > hS) {
        console.log("Computer wins!");
    }else if (cS < hS) {
        console.log("Human wins!");
    } else {
        console.log("It's a tie!");
    }
    
}

for (let i = 0; i < 5; i++) {
    let computer = getComputerChoice();
    let human = getHumanChoice();
    playRound(human, computer);
    console.log("Human: " + human + " - Computer: " + computer);
    playGame(computerScore, humanScore);
    computerScore = 0;
    humanScore = 0;
}






