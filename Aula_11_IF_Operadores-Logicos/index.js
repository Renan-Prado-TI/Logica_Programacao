"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var numero1 = parseInt(prompt("Digite o primeiro número: "));
var numero2 = parseInt(prompt("Digite o segundo número: "));
var numero3 = parseInt(prompt("Digite o terceiro número: "));
if (numero1 > numero2 && numero1 > numero3) {
    console.log("O maior n\u00FAmero \u00E9: ".concat(numero1));
}
else if (numero2 > numero1 && numero2 > numero3) {
    console.log("O maior n\u00FAmero \u00E9: ".concat(numero2));
}
else if (numero3 > numero1 && numero3 > numero2) {
    console.log("O maior n\u00FAmero \u00E9: ".concat(numero3));
}
else {
    console.log("Números são iguais.");
}
