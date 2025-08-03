console.log("Boas Vindas!");

let nome = prompt("Qual seu nome?");
console.log(`Olá, ${nome}!`);

let nome1 = prompt("Qual seu nome?");
alert(`Olá, ${nome1}!`);

let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagemFavorita);

let valor1 = 6;
let valor2 = 5;

let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

let subtracao = valor1 - valor2;
console.log(`A Subtração de ${valor1} e ${valor2} é igual a ${subtracao}.`);

let idade = prompt("Informe sua idade");
if(idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

let numero = prompt("Digite um número");
if(numero >= 1) {
  alert("Este número é positivo");
} else if (numero < 0) {
  alert("Este número é negativo");
} else {
  alert("Este número é igual a 0");
}

let contar = 1;
while(contar <= 10) {
  console.log(contar)
  contar++;
}

let nota = 9;
if(nota >= 7) {
  alert("Aprovado!");
} else {
  alert("Reprovado!");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio2);

let numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio3);