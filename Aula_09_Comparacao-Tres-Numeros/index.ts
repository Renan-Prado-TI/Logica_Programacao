import * as promptSync from 'prompt-sync'

var prompt = promptSync()

var numero1 = parseInt(prompt("Digite o primeiro numero: "))
var numero2 = parseInt(prompt("Digite o segundo numero: "))
var numero3 = parseInt(prompt("Digite o terceiro numero: "))

if (numero1 > numero2 && numero1 > numero3) {
    console.log("O maior numero e: " + numero1)
}
else if (numero2 > numero1 && numero2 > numero3) {
    console.log("O maior numero e: " + numero2)
}
else if (numero3 > numero1 && numero3 > numero2) {
    console.log("O maior numero e: " + numero3)
}
else {
    console.log("Os numeros sao iguais")
}