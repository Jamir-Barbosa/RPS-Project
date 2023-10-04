// criar funcao
function getComputerChoice(){
    // criar variavel random de numero randomico
    let random = Math.floor(Math.random() * 3)
    // atribuir a uma variavel um valor baseado em random
    let choice = "";
    if(random === 0){
        choice = "Rock"
    }
    else if (random === 1){
        choice = "Paper"
    }
    else if (random === 2){
        choice = "Scissors";
    }
   return choice
}
getComputerChoice();