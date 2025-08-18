let gameStarted = false;

const startButton = document.querySelector(".start-button");

let gameText = document.querySelector(".game-text")

let winnerText = document.querySelector(".winner-text");

const firstTo5Button = document.querySelector(".first-to-5-button")

const firstTo10Button = document.querySelector(".first-to-10-button")

startButton.addEventListener("click", () => {
    if(gameStarted === false){
        rockButton.style.display = "block";
        scissorsButton.style.display = "block";
        paperButton.style.display = "block";
        userChoiceImage.style.display = "none";
        cpuChoiceImage.style.display = "none"
        winnerText.style.fontSize = "18px";
    }
    resetGame();
    gameText.style.display = "none";
    gameStarted = true;
    firstTo5Button.style.display = "block";
    firstTo10Button.style.display = "block";
    startButton.style.display = "none";
    winnerText.style.display = "none";
})

firstTo5Button.addEventListener("click", () => {
    gameText.textContent = `"Rock, Paper, Scissors!"`;
    firstTo5Button.style.display = "none";
    firstTo10Button.style.display = "none";
    gameText.style.display = "flex";
    scoreToWin = 5;
})

firstTo10Button.addEventListener("click", () => {
    gameText.textContent = `"Rock, Paper, Scissors!"`;
    firstTo5Button.style.display = "none";
    firstTo10Button.style.display = "none";
    gameText.style.display = "flex";
    scoreToWin = 10;
})

function checkScore(scoreToWin){
    if(userScore == scoreToWin){
        winnerText.style.fontSize = "50px";
        winnerText.textContent = "You won the game!";
        startButton.style.display = "block";
        startButton.textContent = "Play again!";
        rockButton.style.display = "none";
        scissorsButton.style.display = "none";
        paperButton.style.display = "none";
        gameStarted = false;
    }
    if(cpuScore == scoreToWin){
        winnerText.style.fontSize = "50px";
        winnerText.textContent = "You lost the game!"; 
        startButton.style.display = "block";
        startButton.textContent = "Play again!";
        rockButton.style.display = "none";
        scissorsButton.style.display = "none";
        paperButton.style.display = "none";
        gameStarted = false;
    }
}



let userScoreText = document.querySelector(".user-score");
let cpuScoreText = document.querySelector(".cpu-score")


const rockButton = document.querySelector(".rock");

rockButton.addEventListener("click", () => {
    if(gameStarted === true){

        firstTo5Button.style.display = "none";
        firstTo10Button.style.display = "none";
        userInput = "rock";
        runMatch(userInput);
        gameText.textContent = `You chose rock and CPU chose ${cpuInput}`
        setUserChoiceImage(userInput);
        setCPUChoiceImage(cpuInput);
        winningTextLine();
        userScoreText.textContent = `You: ${userScore}`
        cpuScoreText.textContent = `CPU: ${cpuScore}`
        checkScore(scoreToWin);

    }
})

const paperButton = document.querySelector(".paper");

paperButton.addEventListener("click", () => {
    if(gameStarted === true){
        userInput = "paper";
        runMatch(userInput);
        gameText.textContent = `You chose paper and CPU chose ${cpuInput}`
        setUserChoiceImage(userInput);
        setCPUChoiceImage(cpuInput);
        winningTextLine();
        userScoreText.textContent = `You: ${userScore}`
        cpuScoreText.textContent = `CPU: ${cpuScore}`
        checkScore(scoreToWin);
    }
})

const scissorsButton = document.querySelector(".scissors");

scissorsButton.addEventListener("click", () => {
    if(gameStarted === true){
        userInput = "scissors"
        runMatch(userInput);
        gameText.textContent = `You chose scissors and CPU chose ${cpuInput}`
        setUserChoiceImage(userInput);
        setCPUChoiceImage(cpuInput);
        winningTextLine();
        userScoreText.textContent = `You: ${userScore}`
        cpuScoreText.textContent = `CPU: ${cpuScore}`
        checkScore(scoreToWin);
    }
})

let userChoiceImage = document.querySelector(".image-icon");

let cpuChoiceImage = document.querySelector(".cpu-image-icon")

function setUserChoiceImage(input){
    if(input == "paper"){
        userChoiceImage.src = "images/papericon.png";
        userChoiceImage.style.display = "block";
    } else if (input == "scissors"){
        userChoiceImage.src = "images/scissorsicon.png";
        userChoiceImage.style.display = "block";
    } else {
        userChoiceImage.src = "images/rockicon.png";
        userChoiceImage.style.display = "block";
    }
}

function setCPUChoiceImage(input){
    if(input === "paper"){
        cpuChoiceImage.src = "images/papericon.png";
        cpuChoiceImage.style.display = "block";
    } else if (input === "scissors"){
        cpuChoiceImage.src = "images/scissorsicon.png";
        cpuChoiceImage.style.display = "block";
    } else {
        cpuChoiceImage.src = "images/rockicon.png";
        cpuChoiceImage.style.display = "block";
    }
}

//psuedo code:
//-variable that keeps the score
//-way to get user input and store it in a variable 
//-function that determines the cpu's input (random)
//-function that processes the two inputs and determines the outcome (game rules)

let userScore = 0;
let cpuScore = 0;
let cpuInput = "";
let userInput = "";
let roundWinner = "";
let scoreToWin = 0;

function resetGame(){
    userScore = 0;
    cpuScore = 0;
    cpuInput = "";
    userInput = "";
    scoreToWin = 0;

    userScoreText.textContent = `You: 0`;
    cpuScoreText.textContent = `CPU: 0`;
}

function winningTextLine(){
    winnerText.style.display = "block";
    if(roundWinner === "user"){
        winnerText.textContent = "You won the round!"
    } else if (roundWinner === "CPU"){
        winnerText.textContent = "CPU won the round!"
    } else {
        winnerText.textContent = "It's a tie!"
    }
}

function runMatch(userInput){
    cpuInput = getRandomChoice();
    if(userInput == "rock"){
        if(cpuInput == "paper"){
            cpuScore++;
            roundWinner = "CPU"
        } else if (cpuInput == "scissors"){
            userScore++;
            roundWinner = "user";
        } else {
            roundWinner = "";
        }
    } 

    if(userInput == "paper"){
        if(cpuInput == "rock"){
            userScore++;
            roundWinner = "user";
        } else if (cpuInput == "scissors"){
            cpuScore++;
            roundWinner = "CPU"
        } else {
            roundWinner = "";
        }
    }

    if(userInput == "scissors"){
        if(cpuInput == "rock"){
            cpuScore++;
            roundWinner = "CPU"
        } else if (cpuInput == "paper"){
            userScore++;
            roundWinner = "user";
        } else {
            roundWinner = "";
        }
    }
}

function getRandomChoice(){
    let int = Math.floor(Math.random() * 3);

    if(int == 0){
        return "rock";
    } else if(int == 1){
        return "paper";
    } else{
        return "scissors";
    }
    
}




