import * as promptSync from "prompt-sync"
const prompt = promptSync()

var somaPares: number = 0
var somaImpares: number = 0
var somaTotal: number = 0
for(var contador: number = 1; contador <= 10; contador++){
    var numero: number = parseInt(prompt("Digite um numero: "))
    if(numero % 2 == 0){
        somaPares += numero
    } else {
        somaImpares += numero
    }
}
console.log("A soma dos numeros pares é: ", somaPares)
console.log("A soma dos numeros impares é: ", somaImpares)

var soma: number = somaPares + somaImpares
var media: number = soma / 10
console.log("A media é: ", media)