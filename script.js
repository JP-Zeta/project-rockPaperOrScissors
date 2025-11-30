/*console.log("Hello world!");
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
*/

//const { createElement } = require("react");

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


function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        mostrar("HUMANO");
        //console.log("Humano");
        humanScore++;
    } else if (humanChoice === computerChoice) {
        mostrar("EMPATE");
        //console.log("Empate");
    } else {
        mostrar("COMPUTADORA");
        //console.log("Computadora");
        computerScore++;
    }
    
    if (computerScore === 5 || humanScore === 5) {
        playGame(computerScore, humanScore);
        computerScore = 0;
        humanScore = 0;
    }
}

const mostrar = (elemento) => {
    const mostrar = document.createElement("p");
    mostrar.style.cssText = "color: white; background: black;";
    mostrar.textContent = elemento;
    result.appendChild(mostrar);
}


function playGame(cS, hS) {
    const ganador = document.createElement("p");
    ganador.style.cssText = "color: green";

    
    if (cS > hS) {
        console.log("Computer wins!");
        ganador.textContent = "Computer WINS!!!";
    }else if (cS < hS) {
        console.log("Human wins!");
        ganador.textContent = "Human WINS!!!";
    }
    result.appendChild(ganador);
}

const body = document.querySelector("body");

//1. Crear el contenedor de los botones.
const div = document.createElement("div");
div.classList.add("new");
body.appendChild(div);

//2. Crear el boton de rock
const btnRock = document.createElement("button");
btnRock.id = "rock";
btnRock.textContent = "Piedra";

//3. Crear el boton de papel
const btnPaper = document.createElement("button");
btnPaper.id = "paper";
btnPaper.textContent = "Papel"

//4. Crear el boton de scissors
const btnScissors = document.createElement("button");
btnScissors.id = "tijera";
btnScissors.textContent = "Tijeras";



div.appendChild(btnRock);
div.appendChild(btnPaper);
div.appendChild(btnScissors);




// Eventos
btnRock.addEventListener("click", function() { 
    let human = "rock";
    playRound(human, getComputerChoice()); 
});

btnPaper.addEventListener("click", function() { 
    let human = "paper";
    playRound(human, getComputerChoice()); 
});

btnScissors.addEventListener("click", function() { 
    let human = "scissors";
    playRound(human, getComputerChoice()); 
});


/*
const handleButtonClick = (playerChoice) => {
    const computerSelection = getComputerChoice();
    playRound(playerChoice, computerSelection);
};

btnRock.addEventListener("click", () => handleButtonClick("rock"));
btnPaper.addEventListener("click", () => handleButtonClick("paper")); 
*/

const result = document.createElement("div");
result.classList.add("resultado");
body.appendChild(result);