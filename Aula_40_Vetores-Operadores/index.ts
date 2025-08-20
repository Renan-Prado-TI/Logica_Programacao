import * as promptSync from "prompt-sync"
const prompt = promptSync()

const TOTAL_ALUNO: number = 5
var soma: number = 0
var pesosAlunos: number[] = []
for(var i: number = 0; i < TOTAL_ALUNO; i++){
    const peso: number = parseInt(prompt("Digite o peso do(a) aluno(a): "))
    pesosAlunos[i] = peso
    soma += peso
}
const media: number = soma / TOTAL_ALUNO

for (var i: number = 0; i < pesosAlunos.length; i++) {
    if (pesosAlunos[i] > media) {
        console.log("Mensagem enviada para o(a) aluno(a) com peso", pesosAlunos[i])
    }
}
console.log("A media dos pesos e: ", media)
