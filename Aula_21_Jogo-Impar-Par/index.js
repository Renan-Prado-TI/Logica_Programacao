"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var escolhaPrimeiroJogador = prompt("Par ou impar? ");
var numeroPrimeiroJogador = parseInt(prompt("Primeiro Jogador: "));
var numeroSegundoJogador = parseInt(prompt("Segundo Jogador: "));
var soma = numeroPrimeiroJogador + numeroSegundoJogador;
if (soma % 2 == 0) {
    if (escolhaPrimeiroJogador == "par") {
        console.log("O primeiro jogador venceu!");
    }
    else {
        console.log("O segundo jogador venceu!");
    }
}
else {
    if (escolhaPrimeiroJogador == "impar") {
        console.log("O primeiro jogador venceu!");
    }
    else {
        console.log("O segundo jogador venceu!");
    }
}
