"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var somaMedia = 0;
var qtdeAlunos = 0;
while (true) {
    var nome = prompt("Digite o nome do aluno(a): - Digite 'Sair' para encerrar: ");
    if (nome.toLowerCase() == "sair") { //toLowerCase() transforma todas as letras em minúsculo
        break;
    }
    var nota1 = parseFloat(prompt("Digite a nota 1: "));
    var nota2 = parseFloat(prompt("Digite a nota 2: "));
    var nota3 = parseFloat(prompt("Digite a nota 3: "));
    var nota4 = parseFloat(prompt("Digite a nota 4: "));
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    qtdeAlunos++;
    somaMedia += media;
    console.log("A média do aluno(a) ", nome, " é ", media);
}
var mediaTurma = somaMedia / qtdeAlunos;
console.log("Total de alunos: ", qtdeAlunos);
console.log("Média da turma: ", mediaTurma);
