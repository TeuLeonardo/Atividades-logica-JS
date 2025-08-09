let texto = mensagem();

function mensagem() {
  console.log("Olá, mundo!");
}

let name = nome(prompt("Digite seu nome"));

function nome(name) {
  console.log(`Olá, ${name}`);
}

let numero = parseInt(prompt("Digite um número"));
let dobro = dobroNumero(numero * 2);

function dobroNumero(dobro) {
  console.log(`O dobro de ${numero} é ${dobro}`);
}

let numero1 = parseFloat(prompt("Digite um número"));
let numero2 = parseFloat(prompt("Digite outro número"));
let numero3 = parseFloat(prompt("Digite outro número"));
let media = mediaFinal((numero1 + numero2 + numero3) / 3);

function mediaFinal(media) {
  console.log(`A média dos números ${numero1}, ${numero2} e ${numero3} é igual a ${media}`);
}

let num1 = parseInt(prompt("Informe um número"));
let num2 = parseInt(prompt("Informe outro número"));
let maiorNumero;

if(num1 > num2) {
  maiorNumero = compararMaior(num1);
} else {
  maiorNumero = compararMaior(num2);
}

function compararMaior(maiorNumero) {
  console.log(`O número maior é ${maiorNumero}`);
}

let nume = parseInt(prompt("Digite um número"));
let multiplicacao = resultadoMultiplicacao(nume * nume);

function resultadoMultiplicacao(multiplicacao) {
  console.log(`A multiplicação de ${nume} por ele mesmo é: ${multiplicacao}`);
}




