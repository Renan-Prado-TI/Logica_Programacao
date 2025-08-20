"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var TOTAL_ALUNO = 5;
var soma = 0;
var pesosAlunos = [];
for (var i = 0; i < TOTAL_ALUNO; i++) {
    var peso = parseInt(prompt("Digite o peso do(a) aluno(a): "));
    pesosAlunos[i] = peso;
    soma += peso;
}
var media = soma / TOTAL_ALUNO;
for (var i = 0; i < pesosAlunos.length; i++) {
    if (pesosAlunos[i] > media) {
        console.log("Mensagem enviada para o(a) aluno(a) com peso", pesosAlunos[i]);
    }
}
console.log("A media dos pesos e: ", media);
