let useScore = 0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock , paper , scissors
}

const drawGame = () => {
    msg.innerText = "Game was draw";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        useScore++;
        userScorePara.innerText = useScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText = `You lose ! ${compChoice} beats your ${userChoice}`;
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice==compChoice){
        //draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice=== "rock") {
           userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice === "scissor" ?false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
});