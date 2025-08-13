"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var ultimoMaior = -1000000000;
var ultimoMenor = 1000000000;
for (var contador = 1; contador <= 10; contador++) {
    var numero = parseInt(prompt("Digite um numero inteiro: "));
    if (numero > ultimoMaior) {
        ultimoMaior = numero;
    }
    if (numero < ultimoMenor) {
        ultimoMenor = numero;
    }
}
console.log("O maior numero e: ", ultimoMaior);
console.log("O menor numero e: ", ultimoMenor);
