var humanScore=0;
var compScore=0;

function getComputerChoice() {
    let value=Math.floor(Math.random()*3);
    
    switch(value){
        case 0: return "rock";

        case 1:return "Paper";

        case 2: return "Scissor";

    }
}

 const getHumanChoice=() => {
    let userChoice=prompt("Enter Your Choice ROCK or PAPER or SCISSOR").toLowerCase(); 
    return userChoice;

 }
function playRound(humanChoice,computerChoice){
   let humanChoices= humanChoice.trim().toLowerCase();
   let computerChoices=computerChoice.toLowerCase();

   if(humanChoices === ''){
    alert("Please Enter Value")
    return 'No Input';
   }

   if(humanChoices === computerChoices){
    return 'tie';
   }
   else if (
    (humanChoices === 'rock' && computerChoices === 'scissors') ||
    (humanChoices === 'paper' && computerChoices === 'rock') ||
    (humanChoices === 'scissors' && computerChoices === 'paper')
) {
    humanScore ++;
    return "You Win";
} else {
    compScore++;
    return "Comp Wins";
}
}


function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanAns = getHumanChoice();
        const compAns = getComputerChoice();
        const result = playRound(humanAns, compAns);
        console.log(result);
    }
    console.log(`Score = ${humanScore} + ${compScore}`);

    if (humanScore > compScore) {
        console.log("Congratulations! You win!");
    } else if (humanScore < compScore) {
        console.log("Sorry, computer wins!");
    } else {
        console.log("It's a tie!");
    }
}
playGame();
