let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msgs = document.getElementById("msgs");
const userScorePara = document.getElementById("userScore");
const computerScorePara = document.getElementById("computerScore");

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    msgs.innerText = "Game was a draw. Play again.";
};

const gameWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msgs.innerText = `You win! Your ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msgs.innerText = `You lose. ${computerChoice} beats your ${userChoice}.`;
    }
};

const playGame = (userChoice) => {
    const computerChoice = genComChoice();

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = computerChoice === "rock" ? false : true;
        }

        gameWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

