function game() {
    let cpuChoice = Math.floor(Math.random() * 3 + 1);
    let result = document.getElementById("result");
    let result1 = document.getElementById("result1");
    let userChoice = document.querySelector("input[name='choice']:checked");

    if (!userChoice) {
        result.innerHTML = "Please select a choice";
        return;
    }
    userChoice = userChoice.id;
    let cpuChoiceName = "";

    if (cpuChoice === 1) {
        cpuChoiceName = "Rock";
        result1.innerHTML = ('Rock');
    } else if (cpuChoice === 2) {
        cpuChoiceName = "Paper";
        result1.innerHTML = ('Paper');
    } else {
        cpuChoiceName = "Scissors";
        result1.innerHTML = ('Scissors');
    }

    if (cpuChoiceName === 'Rock' && userChoice === 'Rock') {
        result.innerHTML = "Game tie!!";
    } else if (cpuChoiceName === 'Rock' && userChoice === 'Paper') {
        result.innerHTML = "You won!!";
    } else if (cpuChoiceName === 'Rock' && userChoice === 'Scissors') {
        result.innerHTML = "You lost!!";
    } else if (cpuChoiceName === 'Paper' && userChoice === 'Paper') {
        result.innerHTML = "Game tie!";
    } else if (cpuChoiceName === 'Paper' && userChoice === 'Rock') {
        result.innerHTML = "You lost!!";
    } else if (cpuChoiceName === 'Paper' && userChoice === 'Scissors') {
        result.innerHTML = "You won!!";
    } else if (cpuChoiceName === 'Scissors' && userChoice === 'Scissors') {
        result.innerHTML = "Game tie!";
    } else if (cpuChoiceName === 'Scissors' && userChoice === 'Rock') {
        result.innerHTML = "You won";
    } else if (cpuChoiceName === 'Scissors' && userChoice === 'Paper') {
        result.innerHTML = "You lost!";
    }
}

// function game() {
//      let cpuChoice = Math.floor(Math.random() * 3 + 1);
//     let result = document.getElementById("result");
//     let userChoice;

//     // Get the user's choice
//     const choices = document.getElementsByName("choice");
//     for (const choice of choices) {
//         if (choice.checked) {
//             userChoice = choice.id;
//             break;
//         }
//     }

//     // Check if a choice is made
//     if (!userChoice) {
//         result.innerHTML = "Please select a choice!";
//         return;
//     }

//     // Map the CPU choice number to 'Rock', 'Paper', or 'Scissors'
//     if (cpuChoice === 1) {
//         cpuChoice = "Rock";
//     } else if (cpuChoice === 2) {
//         cpuChoice = "Paper";
//     } else {
//         cpuChoice = "Scissors";
//     }

//     // Compare choices and display the result
//     if (cpuChoice === userChoice) {
//         result.innerHTML = "Game tie!";
//     } else if (
//         (cpuChoice === 'Rock' && userChoice === 'Paper') ||
//         (cpuChoice === 'Paper' && userChoice === 'Scissors') ||
//         (cpuChoice === 'Scissors' && userChoice === 'Rock')
//     ) {
//         result.innerHTML = "You won!";
//     } else {
//         result.innerHTML = "You lost!";
//     }
// }
