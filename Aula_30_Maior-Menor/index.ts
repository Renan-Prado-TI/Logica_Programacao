import * as promptSync from "prompt-sync"
const prompt = promptSync()

var ultimoMaior: number = -1000000000
var ultimoMenor: number = 1000000000
for(var contador: number = 1; contador <= 10; contador++){
    var numero: number = parseInt(prompt("Digite um numero inteiro: "))
    if(numero > ultimoMaior) {
        ultimoMaior = numero
    }
    if(numero < ultimoMenor) {
        ultimoMenor = numero
    }
}
console.log("O maior numero e: ", ultimoMaior)
console.log("O menor numero e: ", ultimoMenor)