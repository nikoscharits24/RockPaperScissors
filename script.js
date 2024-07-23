let humanScore = 0;
let computerScore = 0;

function getComputerChoice(array){
    const randomChoice = Math.floor(Math.random() * array.length);
    return array[randomChoice];
}

const choices = ["Rock", "Paper", "Scissors"];


function getHumanChoice(){
    const humanChoice = prompt("Rock, Paper, Scissors", "");
    return humanChoice;
}




console.log(getHumanChoice());
console.log(getComputerChoice(choices));