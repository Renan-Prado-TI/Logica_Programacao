import * as promptSync from "prompt-sync"
const prompt = promptSync()

var contador: number = 1

while(contador <= 10){ 
    var numero: number = parseInt(prompt("Digite um número inteiro: "))
    console.log(numero)
    contador ++
}

console.log("Fim do programa")