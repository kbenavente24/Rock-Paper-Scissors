let gameStarted = false;

const startButton = document.querySelector(".start-button");

let gameText = document.querySelector(".game-text")

let winnerText = document.querySelector(".winner-text");


startButton.addEventListener("click", () => {
    gameText.textContent = `"rock, paper, scissors!"`;
    gameStarted = true;
})

let userScoreText = document.querySelector(".user-score");
let cpuScoreText = document.querySelector(".cpu-score")

const rockButton = document.querySelector(".rock");

rockButton.addEventListener("click", () => {
    if(gameStarted === true){
        userInput = "rock";
        runMatch(userInput);
        gameText.textContent = `You chose rock and CPU chose ${cpuInput}`
        winningTextLine();
        userScoreText.textContent = `You: ${userScore}`
        cpuScoreText.textContent = `CPU: ${cpuScore}`

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
    }
})

const scissorsButton = document.querySelector(".scissors");

scissorsButton.addEventListener("click", () => {
    if(gameStarted === true){
        userInput = "scissors"
        runMatch(userInput);
        gameText.textContent = `You chose scissors and CPU chose ${cpuInput}`
        winningTextLine();
        userScoreText.textContent = `You: ${userScore}`
        cpuScoreText.textContent = `CPU: ${cpuScore}`
    }
})

let userChoiceImage = document.querySelector(".image-icon");

let cpuChoiceImage = document.querySelector(".cpu-image-icon")

function setUserChoiceImage(input){
    if(input == "paper"){
        userChoiceImage.src = "images/papericon.png";
        userChoiceImage.style.display = "block";
    }
}

function setCPUChoiceImage(input){
    if(input == "paper"){
        cpuChoiceImage.src = "images/papericon.png";
        cpuChoiceImage.style.display = "block";
    }
}





//Game Logic
//score
//user selection
//cpu selection (random)
//criteria for the game: what beats what? 

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

function winningTextLine(){
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
        } 
    } 

    if(userInput == "paper"){
        if(cpuInput == "rock"){
            userScore++;
            roundWinner = userInput;
        } else if (cpuInput == "scissors"){
            cpuScore++;
            roundWinner = "user"
        }
    }

    if(userInput == "scissors"){
        if(cpuInput == "rock"){
            cpuScore++;
            roundWinner = "CPU"
        } else if (cpuInput == "paper"){
            userScore++;
            roundWinner = "user";
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




