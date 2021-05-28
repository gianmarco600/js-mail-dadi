var num1 , num2;

numPlayer = Math.floor(Math.random()* 6) + 1;
numCpu = Math.floor(Math.random()* 6) + 1;

console.log(numPlayer , numCpu);
var risultato = "Hai vinto!";


if (numPlayer == numCpu){
    risultato = "Pareggio!";
}

if (numPlayer < numCpu){
    risultato = "Hai perso!";
}

document.getElementById("risultato").innerHTML = risultato;