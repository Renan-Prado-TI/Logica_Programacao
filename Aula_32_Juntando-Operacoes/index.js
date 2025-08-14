"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var somaPares = 0;
var somaImpares = 0;
var somaTotal = 0;
for (var contador = 1; contador <= 10; contador++) {
    var numero = parseInt(prompt("Digite um numero: "));
    if (numero % 2 == 0) {
        somaPares += numero;
    }
    else {
        somaImpares += numero;
    }
}
console.log("A soma dos numeros pares é: ", somaPares);
console.log("A soma dos numeros impares é: ", somaImpares);
var soma = somaPares + somaImpares;
var media = soma / 10;
console.log("A media é: ", media);
