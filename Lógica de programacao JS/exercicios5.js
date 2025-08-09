let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function botaoConsole() {
  console.log("O botão foi clicado");
}

function botaoAlert() {
  alert("Eu amo JS");
}

function botaoPrompt() {
  let cidade = prompt("Digite o nome de uma cidade");
  alert(`Estive em ${cidade} e lembrei de você!`);
}

function botaoSoma() {
  let numero1 = parseInt(prompt("Digite um número"));
  let numero2 = parseInt(prompt("Digite outro número"));
  let soma = numero1 + numero2;
  alert(`A soma do número ${numero1} com o número ${numero2} é: ${soma}`);
}