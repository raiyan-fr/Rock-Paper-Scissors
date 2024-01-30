let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreData = document.querySelector("#user-score");
const compScoreData = document.querySelector("#comp-score");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game drawn :/, same same choosing huh";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreData.innerText = userScore;
    msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreData.innerText = compScore;
    msg.innerText = `you lost! your ${userChoice} got beaten by ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  let userWin = false;

  if (userChoice === compChoice) {
    drawGame();
  } else {
    if (
      (userChoice === "rock" && compChoice === "scissor") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissor" && compChoice === "paper")
    ) {
      userWin = true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
