const choices = ["Rock","Paper","Scissor"];
const playerDisplay = document.getElementById("playerEmoji");
const computerDisplay = document.getElementById("computerEmoji");
const resultDisp = document.getElementById("resDispText");
const playerScore = document.getElementById("playerSc");
const computerScore = document.getElementById("computerSc");
let playerPoints = 0;
let computerPoints =0;

function playGame(playerChoice)
{
    const computerChoice = choices[Math.floor(Math.random() *3 )];

    let result="";
    if(playerChoice === computerChoice)
    {
        result="Result: Tie";
    }
    else
    {
        switch(playerChoice)
        {
           case "Rock":
            result = computerChoice=== "Scissor" ? "Result: You Win" : "Result: You Lose";
            break;

            case "Paper":
            result = computerChoice=== "Rock" ? "Result: You Win" : "Result: You Lose";
            break;

            case "Scissor":
            result = (computerChoice=== "Paper") ? "Result: You Win" : "Result: You Lose";
            break;
        }
    }

    playerDisplay.textContent = playerChoice;
    computerDisplay.textContent = computerChoice;
    resultDisp.textContent = result;

    resultDisp.classList.remove("green-Text","red-Text");

    switch(result)
    {
        case "Result: You Win":
            resultDisp.classList.add("green-Text");
            playerPoints++;
            playerScore.textContent= "Player : " + playerPoints;
            break;

        case "Result: You Lose":
            resultDisp.classList.add("red-Text");
            computerPoints++;
            computerScore.textContent= "Computer : " + computerPoints;
            break;
       
    }

}
