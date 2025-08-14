import * as promptSync from "prompt-sync"
const prompt = promptSync()

var somaMedia: number = 0
var qtdeAlunos: number = 0
while(true){

    var nome: string = prompt("Digite o nome do aluno(a): - Digite 'Sair' para encerrar: ")
    if (nome.toLowerCase() == "sair"){ //toLowerCase() transforma todas as letras em minúsculo
        break
    }
    var nota1: number = parseFloat(prompt("Digite a nota 1: "))
    var nota2: number = parseFloat(prompt("Digite a nota 2: "))
    var nota3: number = parseFloat(prompt("Digite a nota 3: "))
    var nota4: number = parseFloat(prompt("Digite a nota 4: "))
    var media: number = (nota1 + nota2 + nota3 + nota4) / 4
    qtdeAlunos++
    somaMedia += media
    console.log("A média do aluno(a) ", nome, " é ", media)
}
var mediaTurma: number = somaMedia / qtdeAlunos
console.log("Total de alunos: ", qtdeAlunos)
console.log("Média da turma: ", mediaTurma)
