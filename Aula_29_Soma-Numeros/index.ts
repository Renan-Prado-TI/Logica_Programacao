import * as promptSync from "prompt-sync"
const prompt = promptSync()

var soma: number = 0
while(true){
    var digitado: string = prompt("Digite um numero inteiro (Tecle S para sair): ")
    if(digitado == "s"){
        break
    }
    var numero: number = parseInt(digitado)
    soma += numero
}
console.log("A soma dos numeros é: ", soma)