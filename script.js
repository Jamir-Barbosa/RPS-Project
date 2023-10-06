// criar funcao
function getComputerChoice() {
  // criar variavel random de numero randomico
  let random = Math.floor(Math.random() * 3);
  // atribuir a uma variavel um valor baseado em random
  let choice = "";
  if (random == 0) {
    choice = "Rock";
  } else if (random == 1) {
    choice = "Paper";
  } else if (random == 2) {
    choice = "Scissors";
  }
  return choice.toLowerCase();
}

// criar funcao que recebe input case insensitive
function playerSelection() {
  let keepGoing = true;
  while (keepGoing) {
    let playerChoice = prompt("Rock Paper or Scissors").toLowerCase();
    if (
      playerChoice != "rock" &&
      playerChoice != "paper" &&
      playerChoice != "scissors"
    ) {
      console.log("Escolha invalida");
    } else {
      keepGoing = false;
      return playerChoice;
    }
  }
}
// criar funcao que compara getComputerChoice com playerSelection e declara os vencedores
    

function playRound(player, computer) {
  let text = "";

  if (player == "rock" && computer == "scissors") {
    text = "Voce venceu! " + player + " Vence de " + computer;
  } else if (player == "scissors" && computer == "paper") {
    text = "Voce venceu! " + player + " Vence de " + computer;
  } else if (player == "paper" && computer == "rock") {
    text = "Voce venceu! " + player + " Vence de " + computer;
  } else if (player === computer) {
    text = "Empate";
  } else {
    text = "Voce Perdeu! " + computer + " e mais forte que " + player;
  }
  return text;
}



function game(){
    for(i = 0; i <= 5; i++){
        let player = playerSelection();
        const computer = getComputerChoice();
        console.log(playRound(player, computer))
    }
}

game();
