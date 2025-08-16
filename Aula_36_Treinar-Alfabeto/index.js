"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var alfabeto = "abcdefghijklmnopqrstuvwvxz";
alfabeto = alfabeto.toUpperCase();
var posicaoLetraAtual = 0;
while (posicaoLetraAtual <= 25) {
    var letra = prompt("Digite a proxima letra do alfabeto: ");
    if (letra.toLocaleUpperCase() == "SAIR") {
        break;
    }
    if (letra.toLocaleUpperCase() == alfabeto.charAt(posicaoLetraAtual)) {
        console.log("Parabéns! Você acertou!");
        posicaoLetraAtual++;
    }
    else {
        console.log("A letra correta é: ", alfabeto.charAt(posicaoLetraAtual));
    }
}
console.log("Parabéns! Você Acabou!");
