const startButton = document.querySelector(".start-button");

const gameText = document.querySelector(".game-text")

startButton.addEventListener("click", () => {
    gameText.textContent = "rock, paper, scissors!";
})


