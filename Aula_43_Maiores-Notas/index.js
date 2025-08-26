"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var notas = [];
for (var i = 0; i < 10; i++) {
    var nota = parseFloat(prompt("Digite a nota: "));
    notas.push(nota);
}
for (var contador = 1; contador <= 3; contador++) {
    var maior = notas[0];
    var posicaoMaior = 0;
    for (var i = 1; i < notas.length; i++) {
        if (notas[i] > maior) {
            maior = notas[i];
            posicaoMaior = i;
        }
    }
    console.log("Maior nota seria: ", maior);
    notas[posicaoMaior] = -1;
}
