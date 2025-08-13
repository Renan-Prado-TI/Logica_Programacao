"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var soma = 0;
while (true) {
    var digitado = prompt("Digite um numero inteiro (Tecle S para sair): ");
    if (digitado == "s") {
        break;
    }
    var numero = parseInt(digitado);
    soma += numero;
}
console.log("A soma dos numeros é: ", soma);
