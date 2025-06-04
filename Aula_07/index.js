"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var nota = parseFloat(prompt("Digite a nota do(a) aluno(a): "));
if (nota >= 0 && nota <= 10) {
    //Estrutura condicional SE....SENÃO
    if (nota >= 6) {
        console.log("Aluno(a) Aprovado(a)");
    }
    else {
        console.log("Aluno(a) Reprovado(a)");
    }
}
else {
    console.log("Nota precisa estar entre 0 e 10");
}
