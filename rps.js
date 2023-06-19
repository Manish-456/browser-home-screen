const playGame = document.querySelector('.playbtn');

const initGame = () => {
    const playGame = confirm("Shall we play rock, paper, or scissor?");
    playGame ? startGame() : alert("Okay! next time");
  };
  
  const startGame = () => {
    while (true) {
      let playerChoice = prompt("Choose rock, paper, or scissor!");
      let playerOne;
      console.log(playerChoice)
  
      if (playerChoice === "") {
        invalidChoice();
        continue;
      }
      if (!playerChoice) {
        decidedNotToPlay();
        break;
      }
      playerOne = playerChoice.toLowerCase().trim();
  
      if (playerOne) {
        if (
          playerOne === "rock" ||
          playerOne === "scissor" ||
          playerOne === "paper"
        ) {
          const deviceRandChoice = Math.floor(Math.random() * 2);
          const computer = computerChoice(deviceRandChoice);
          determineWinner(playerOne, computer);
         if(askToPlayAgain()){
          continue;
         }else{
             thanksForPlaying()
          break;
         }
  
        } else {
          wrongCommand();
          continue;
        }
      }
    }
  };
  
  const thanksForPlaying = () => {
    alert("Thanks for playing!");
  }
  
  const computerChoice = (index) => {
    const rpsArray = ["rock", "paper", "scissor"];
    return rpsArray[index];
  };
  
  const invalidChoice = () => {
    alert("Please enter rock, paper, or scissor");
  };
  
  const decidedNotToPlay = () => {
    alert("I think you have changed your mind!");
  };
  
  const wrongCommand = () => {
    alert("Wrong command!");
  };
  
  const result = (playerOne, computer, winner) => {
    winner
      ? alert(`you : ${playerOne}\ncomputer : ${computer}\n${winner} won`)
      : alert(`you : ${playerOne}\ncomputer : ${computer}\nGame tie`);
  };
  
  const determineWinner = (playerOne, computer) => {
    playerOne === computer
      ? result(playerOne, computer)
      : playerOne === "rock" && computer === "paper"
      ? result(playerOne, computer, "Computer")
      : playerOne === "paper" && computer === "rock"
      ? result(playerOne, computer, "You")
      : playerOne === "rock" && computer === "scissor"
      ? result(playerOne, computer, "You")
      : playerOne === "scissor" && computer === "rock"
      ? result(playerOne, computer, "Computer")
      : playerOne === "scissor" && computer === "paper"
      ? result(playerOne, computer, "You")
      : playerOne === "paper" && computer === "scissor"
      ? result(playerOne, computer, "Computer")
      : invalidChoice();
  };
  
  const askToPlayAgain = () => {
    return confirm("Play Again?");
  }

  playGame.addEventListener("click", initGame);
  
 