import * as promptSync from "prompt-sync";
var prompt = promptSync();

var numero1: number = parseFloat(prompt("Digite o primeiro número: "));
var operador: string = prompt("Digite o operador (+, -, *, /): ");
var numero2: number = parseFloat(prompt("Digite o segundo número: "));
var resultado: number | undefined = undefined;

if (operador === "*") {
  console.log(`Resultado: ${numero1 * numero2}`);
} else if (operador === "+") {
  console.log(`Resultado: ${numero1 + numero2}`);
} else if (operador === "-") {
  console.log(`Resultado: ${numero1 - numero2}`);
} else if (operador === "/") {
  if (numero2 !== 0) {
    console.log(`Resultado: ${numero1 / numero2}`);
  } else {
    numero2 === 0;
    console.log("Erro: Divisão por zero não é permitida.");
  }
}
if (resultado === undefined) {
  console.log("Operador inválido. Por favor, use +, -, * ou /.");
} else {
  console.log(`Resultado: ${resultado}`);
}
