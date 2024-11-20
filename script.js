function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a draw!';
    }
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const resultDiv = document.createElement('div');
    document.body.appendChild(resultDiv);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.textContent.trim().toLowerCase();
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);

            resultDiv.innerHTML = `
                <p>You chose: ${userChoice}</p>
                <p>Computer chose: ${computerChoice}</p>
                <p>${result}</p>
            `;
        });
    });
});