

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}




function getHumanChoice(){
    const humanInput = prompt("Rock, Paper, Scissors", "").trim().toLowerCase();
    return humanInput;
}



function playGame(){

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        }

        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                return "You win! Rock beats Scissors";
            } else {
                return "You lose! Paper beats Rock";
            }
        }

        if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                return "You win! Paper beats Rock";
            } else {
                return "You lose! Scissors beat Paper";
            }
        }

        if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                return "You win! Scissors beat Paper";
            } else {
                return "You lose! Rock beats Scissors";
            }
        }
    }

   

 for (let i = 0; i < 5; i++){
        
         
        let roundResult = "tie";
        while (roundResult === "tie") {
            const humanSelection = getHumanChoice();
            if (!['rock', 'paper', 'scissors'].includes(humanSelection)) {
                console.log('Invalid choice. Please choose rock, paper, or scissors.');
                continue;
            }
            const computerSelection = getComputerChoice().trim().toLowerCase(); 

            console.log(`Round ${i + 1}`);
            console.log(`You chose: ${humanSelection}`);
            console.log(`The computer chose: ${computerSelection}`);

            roundResult = playRound(humanSelection, computerSelection);
            console.log(roundResult);

         }
         if (roundResult === "It's a tie!") {
            i--;
            continue; 
        }
         if (roundResult.startsWith("You win")) {
            humanScore++;
        } else if (roundResult.startsWith("You lose")) {
            computerScore++;
        }
        
    }
    console.log('Final Scores:');
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (computerScore > humanScore) {
        console.log('The computer wins the game. Better luck next time!');
    }

}
playGame();
