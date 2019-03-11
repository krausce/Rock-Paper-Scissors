
let computerPlay = () => {
    let play = ['Rock', 'Paper', 'Scissors'];
    //Select a random integer between 0 and 2 inclusive.
    let min = 0, max = 2;
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;
    return play[choice];
}

let playGame = () => {
    let userChoice = document.getElementById('user-play').value;
    let computerChoice = computerPlay();
    switch(userChoice) {
        case 'Rock':
            switch(computerChoice) {
                case 'Rock':
                    alert('You tied the computer');
                    break;
                case 'Paper':
                    alert('The computer wins. Try again.');
                    break;
                case 'Scissors': 
                    alert('You won!');
                    break;
            }
            break;
        case 'Paper':
            switch(computerChoice) {
                case 'Paper':
                    alert('You tied the computer');
                    break;
                case 'Scissors':
                    alert('The computer wins. Try again.');
                    break;
                case 'Rock': 
                    alert('You won!');
                    break;
            }
            break;
        case 'Scissors':
            switch(computerChoice) {
                case 'Scissors':
                    alert('You tied the computer');
                    break;
                case 'Rock':
                    alert('The computer wins. Try again.');
                    break;
                case 'Paper': 
                    alert('You won!');
                    break;
            }
            break;
    }
}