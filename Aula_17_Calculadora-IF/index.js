"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var numero1 = parseFloat(prompt("Digite o primeiro número: "));
var operador = prompt("Digite o operador (+, -, *, /): ");
var numero2 = parseFloat(prompt("Digite o segundo número: "));
var resultado = undefined;
if (operador === "*") {
    console.log("Resultado: ".concat(numero1 * numero2));
}
else if (operador === "+") {
    console.log("Resultado: ".concat(numero1 + numero2));
}
else if (operador === "-") {
    console.log("Resultado: ".concat(numero1 - numero2));
}
else if (operador === "/") {
    if (numero2 !== 0) {
        console.log("Resultado: ".concat(numero1 / numero2));
    }
    else {
        numero2 === 0;
        console.log("Erro: Divisão por zero não é permitida.");
    }
}
if (resultado === undefined) {
    console.log("Operador inválido. Por favor, use +, -, * ou /.");
}
else {
    console.log("Resultado: ".concat(resultado));
}
