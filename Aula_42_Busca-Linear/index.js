"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var vetor = [43, 23, 54, 67, 12, 10, 90];
var numero = parseInt(prompt("Digite um numero para buscar: "));
var encontrado = false;
for (var i = 0; i < vetor.length; i++) {
    var valor = vetor[i];
    if (valor == numero) {
        console.log("Valor encontrado na posição: ", i);
        encontrado = true;
        break;
    }
}
if (encontrado == false) {
    console.log("Valor nao encontrado");
}
