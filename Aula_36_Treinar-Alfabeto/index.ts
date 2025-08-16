import * as promptSync from "prompt-sync"
const prompt = promptSync()

var alfabeto: string = "abcdefghijklmnopqrstuvwvxz"
alfabeto = alfabeto.toUpperCase()
var posicaoLetraAtual: number = 0

while (posicaoLetraAtual <= 25) {
    var letra: string = prompt("Digite a proxima letra do alfabeto: ")
    if (letra.toLocaleUpperCase() == "SAIR") {
        break
    }
    if (letra.toLocaleUpperCase() == alfabeto.charAt(posicaoLetraAtual)) {
        console.log("Parabéns! Você acertou!")
        posicaoLetraAtual++
    } else {
        console.log("A letra correta é: ", alfabeto.charAt(posicaoLetraAtual))
    }
}

console.log("Parabéns! Você Acabou!")