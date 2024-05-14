let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    if (num >= 0.66) {
        return "rock";
    } else if (0.33 <= num && num <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

getHumanChoice = () => {
    return prompt("Rock, paper, or scissors?").toLowerCase();
    
}

playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log("No one wins! Play again.");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

playGame = () => {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (humanScore === computerScore) {
        console.log("equalityyyy");
    } else if (humanScore > computerScore) {
        console.log("The human wins!");
    } else {
        console.log("The robot wins!");
    }
}


// testing functions
function result() {
    let result = getComputerChoice();
    console.log(result);
}