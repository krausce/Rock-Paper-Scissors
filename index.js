/*jshint esversion: 6 */
function computerPlay() {
    let play = ['Rock', 'Paper', 'Scissors'];
    //Select a random integer between 0 and 2 inclusive.
    let min = 0,
        max = 2;
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;
    return play[choice];
}
let playerScore = 0,
    computerScore = 0,
    roundCount = 0;

let playGame = () => {

    let roundWinner = "",
        playGame = true,
        gameMessages = "";

    while (playGame == true) {
        roundCount++;
        roundWinner = playRound();
        if (roundCount > 4 && playerScore > computerScore) {
            document.getElementById("game-messages").textContent = `CONGRATULATIONS!!!! YOU WON THE GAME!` + '\n' + `Final Score:     Computer: ${computerScore} Puny Human: ${playerScore}.` + '\nGAME OVER. If you would like to play again, simply click the drop down button.';
            reset();
            break;
        } else if (roundCount > 4 && computerScore > playerScore) {
            document.getElementById("game-messages").textContent = `LOSER!!! I knew you couldn't defeat my superior cunning and intellect!\n` + `Final Score: Computer: ${computerScore} Puny Human: ${playerScore}.` + "\nBetter luck next time chump! If you're not convinced I won fairly, click the button to try again!";
            reset();
            break;
        }
        document.getElementById("game-messages").textContent = gameMessages;
        switch (roundWinner) {
            case "tied":
                gameMessages = 'You tied the computer\n' + `Round: ${roundCount}.     Current Score     Computer: ${computerScore}     Puny Human: ${playerScore}`;
                break;
            case "computer":
                computerScore++;
                gameMessages = 'The computer wins. Better luck next time.\n' + `Round: ${roundCount}.     Current Score     Computer: ${computerScore}     Puny Human: ${playerScore}`;
                break;
            case "player":
                playerScore++;
                gameMessages = 'You won!\n' + `Round: ${roundCount}.     Current Score     Computer: ${computerScore}     Puny Human: ${playerScore}`;
                break;

        }
        document.getElementById("game-messages").textContent = gameMessages;

        playGame = false;
    }

};

function playRound() {
    let userChoice = document.getElementById("user-play").value,
        computerChoice = computerPlay();
    switch (userChoice) {
        case 'Rock':
            switch (computerChoice) {
                case 'Rock':
                    return "tied";
                case 'Paper':
                    return "computer";
                case 'Scissors':
                    return "player";
            }
            break;
        case 'Paper':
            switch (computerChoice) {
                case 'Paper':
                    return "tied";
                case 'Scissors':
                    return "computer";
                case 'Rock':
                    return "player";
            }
            break;
        case 'Scissors':
            switch (computerChoice) {
                case 'Scissors':
                    return "tied";
                case 'Rock':
                    return "computer";
                case 'Paper':
                    return "player";
            }
            break;
    }
}

let reset = () => {
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
};