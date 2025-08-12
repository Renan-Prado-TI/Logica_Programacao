import * as promptSync from "prompt-sync"
const prompt = promptSync()

console.log("Este programa verifica se um número é primo ")
const numero: number = prompt("Digite um número inteiro: ")

var contador: number = numero - 1
var primo: boolean = true
while (contador >= 2) {
    //Verificar se o número digitado pelo usuario é divisivel por cada numero antes dele
    if (numero % contador == 0) {
        primo = false
        break
    }
    contador--
}

if (primo == true) {
    console.log("Número: ", numero, "é Primo")
} else {
    console.log("Número: ", numero, "não é Primo")
}