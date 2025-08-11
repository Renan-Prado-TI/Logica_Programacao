import * as promptSync from "prompt-sync"
const prompt = promptSync()


console.log("Metodo 1")
var contador: number = 1

while (contador <= 100) {
    if (contador % 2 == 0){
        console.log(contador)
    }
    contador++
}

console.log("Metodo 2")
var contador = 2
while (contador <= 100) {
    console.log(contador)
    contador += 2
}