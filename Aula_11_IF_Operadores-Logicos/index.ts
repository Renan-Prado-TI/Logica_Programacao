import * as promptSync from "prompt-sync";

var prompt = promptSync();

var numero1: number = parseInt(prompt("Digite o primeiro número: "));
var numero2: number = parseInt(prompt("Digite o segundo número: "));
var numero3: number = parseInt(prompt("Digite o terceiro número: "));

if (numero1 > numero2 && numero1 > numero3) {
  console.log(`O maior número é: ${numero1}`);
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(`O maior número é: ${numero2}`);
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log(`O maior número é: ${numero3}`);
} else {
  console.log("Números são iguais.");
}
