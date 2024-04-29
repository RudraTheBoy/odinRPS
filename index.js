const startScreen = document.querySelector(".mainScreen");
const startBTN = document.querySelector(".startBTN");
const gameContainer = document.querySelector(".gameContainer");
const playerMoves = document.querySelectorAll(".playerMoves");
const playerChoiceDisplay = document.querySelector(".playerChoiceDisplay");
const compChoiceDisplay = document.querySelector(".compChoiceDisplay");
const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const compScoreDisplay = document.querySelector(".compScoreDisplay");
const resultDisplay = document.querySelector(".resultDisplay");
const winLoseText = document.querySelector(".condition");
const playAgain = document.querySelector(".playAgain");
playerScoreDisplay.textContent = 0;
compScoreDisplay.textContent = 0;

startBTN.addEventListener("click", () => {
  let audio = new Audio("sounds/click.wav");
  audio.currentTime = 0;
  audio.play();
  startScreen.classList.add("animate__animated", "animate__fadeOut");
  gameContainer.classList.add(
    "animate__animated",
    "animate__fadeIn",
    "animate__delay-0.3s"
  );
  startScreen.remove();
});

function game() {
  playerMoves.forEach((Element) => {
    Element.addEventListener("click", () => {
      let audio = new Audio("sounds/click.wav");
      audio.currentTime = 0;
      audio.play();
      if (Element.id === "rock") {
        playerChoiceDisplay.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
      }
      if (Element.id === "paper") {
        playerChoiceDisplay.innerHTML = `<i class="fa-regular fa-hand"></i>`;
      }
      if (Element.id === "scissor") {
        playerChoiceDisplay.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
      }
      let randomNumber = Math.floor(Math.random() * 3 + 1);
      if (randomNumber === 1) {
        //rock
        compChoiceDisplay.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
      }
      if (randomNumber === 2) {
        //paper
        compChoiceDisplay.innerHTML = `<i class="fa-regular fa-hand"></i>`;
      }
      if (randomNumber === 3) {
        // scissor
        compChoiceDisplay.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
      }
      if (
        (randomNumber === 1 && Element.id === "scissor") || // Computer (Rock) beats Scissors
        (randomNumber === 2 && Element.id === "rock") || // Computer (Paper) beats Rock
        (randomNumber === 3 && Element.id === "paper") // Computer (Scissors) beats Paper
      ) {
        compScoreDisplay.textContent++;
      } else if (
        playerChoiceDisplay.textContent === compChoiceDisplay.textContent
      ) {
      }
      if (
        (randomNumber === 3 && Element.id === "rock") || // Player (Rock) beats Scissors
        (randomNumber === 1 && Element.id === "paper") || // Player (Paper) beats Rock
        (randomNumber === 2 && Element.id === "scissor") // Player (Scissors) beats Paper
      ) {
        playerScoreDisplay.textContent++;
      }

      if (parseInt(playerScoreDisplay.textContent) === 5) {
        document.body.style.pointerEvents = "none";
        resultDisplay.style.pointerEvents = "auto";
        gameContainer.classList.add(
          "animate__animated",
          "animate__fadeOut",
          "animate__delay-0.3s"
        );
        resultDisplay.classList.add(
          "resultVisible",
          "animate__animated",
          "animate__fadeIn"
        );
        winLoseText.innerHTML = "You won!";
      }
      if (parseInt(compScoreDisplay.textContent) === 5) {
        document.body.style.pointerEvents = "none";
        resultDisplay.style.pointerEvents = "auto";
        gameContainer.classList.add(
          "animate__animated",
          "animate__fadeOut",
          "animate__delay-0.3s"
        );
        resultDisplay.classList.add(
          "resultVisible",
          "animate__animated",
          "animate__fadeIn"
        );
        winLoseText.innerHTML = "You lost!";
      }
    });
  });
}
game();