"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var numero1 = prompt("Digite o primeiro número: ");
var numero2 = prompt("Digite o segundo número: ");
if (numero1 > numero2) {
    console.log("O primeiro número " + numero1 + " é maior que o segundo");
}
else {
    console.log("O segundo número " + numero2 + " é maior que o primeiro");
}
