import * as promptSync from "prompt-sync"
const prompt = promptSync()

const vetor: number[] = [43,23,54,67,12,10,90]

const numero: number = parseInt(prompt("Digite um numero para buscar: "))

var encontrado: boolean = false
for(var i: number = 0; i < vetor.length; i++){
    var valor: number = vetor[i]
    if(valor == numero){
        console.log("Valor encontrado na posição: ", i)
        encontrado = true
        break   
    }
}
if (encontrado == false){
    console.log("Valor nao encontrado")
}