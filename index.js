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
        compChoiceDisplay.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
      }
      if (randomNumber === 2) {
        compChoiceDisplay.innerHTML = `<i class="fa-regular fa-hand"></i>`;
      }
      if (randomNumber === 3) {
        compChoiceDisplay.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
      }
      if (playerChoiceDisplay.innerHTML === compChoiceDisplay.innerHTML) {
        console.log("Tie");
      }
      if (
        (Element.id === 'rock' && randomNumber === 3) ||
        (Element.id === 'scissors' && randomNumber === 2) ||
        (Element.id === 'paper' && randomNumber === 1)
      ) {
        console.log('You gained a point!');
      }
    });
  });
}
game();
