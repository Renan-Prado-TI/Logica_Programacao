import * as promptSync from "prompt-sync";
const prompt = promptSync();

const escolhaPrimeiroJogador = prompt("Par ou impar? ");

const numeroPrimeiroJogador = parseInt(prompt("Primeiro Jogador: "));
const numeroSegundoJogador = parseInt(prompt("Segundo Jogador: "));

const soma = numeroPrimeiroJogador + numeroSegundoJogador;

if (soma % 2 == 0) {
  if (escolhaPrimeiroJogador == "par") {
    console.log("O primeiro jogador venceu!");
  } else {
    console.log("O segundo jogador venceu!");
  }
} else {
  if (escolhaPrimeiroJogador == "impar") {
    console.log("O primeiro jogador venceu!");
  } else {
    console.log("O segundo jogador venceu!");
  }
}
