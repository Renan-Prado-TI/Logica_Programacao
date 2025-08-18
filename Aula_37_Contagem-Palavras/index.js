"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var texto = prompt("Digite um texto: ");
var contadorEspaco = -1;
var posicaoEspaco = 0;
do {
    posicaoEspaco = texto.indexOf(" ", posicaoEspaco + 1);
    if (posicaoEspaco != 0) {
        contadorEspaco++;
    }
} while (posicaoEspaco != -1);
console.log("O texto tem ", texto.length, " caracteres.");
if (texto.trim() != "") {
    var numeroPalavras = contadorEspaco + 1;
    if (contadorEspaco == 1) {
        console.log("O texto tem 1 palavra.");
    }
    else {
        console.log("O texto tem ", (contadorEspaco + 1), " palavras.");
    }
}
else {
    console.log("Digite um texto");
}
