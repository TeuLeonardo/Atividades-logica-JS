let diaSemana = prompt("Que dia é hoje?");
if (diaSemana == "Sábado" || diaSemana == "Domingo") {
  alert("Bom final de semana");
} else {
  alert("Boa semana");
}

let numero = prompt("Digite um número");
if (numero >= 0) {
  alert("Esse número é positivo");
} else {
  alert("Esse número é negativo");
}

let pontuacao = 169;
if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

let saldoConta = 1000; 
alert("Seu saldo é de R$" + saldoConta + ".");

let nome = prompt("Digite seu nome");
alert("Boas-vindas " + nome);
