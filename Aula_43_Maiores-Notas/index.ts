import * as promptSync from "prompt-sync"
const prompt = promptSync()

var notas: number[] = []
for (var i = 0; i < 10; i++) {
    var nota: number = parseFloat(prompt(`Digite a nota: `))
    notas.push(nota)
}

for (var contador: number = 1; contador <= 3; contador++) {
    var maior: number = notas[0]
    var posicaoMaior: number = 0
    for (var i: number = 1; i < notas.length; i++) {
        if (notas[i] > maior){
            maior = notas[i]
            posicaoMaior = i
        }
    }
    console.log("Maior nota seria: ", maior)
    notas[posicaoMaior] = -1
}