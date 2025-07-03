"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var numero = parseFloat(prompt("Digite um número para ganhar pontos: "));
if (isNaN(numero)) {
    console.log("Erro: Você deve digitar um número válido.");
}
else {
    var pontos;
    if (numero >= 8) {
        if (numero >= 15) {
            if (numero >= 20) {
                pontos = 5;
            }
            else {
                pontos = 30;
            }
        }
        else {
            if (numero >= 12) {
                pontos = 80;
            }
            else {
                pontos = 100;
            }
        }
    }
    else if (numero >= 5) {
        if (numero >= 6) {
            pontos = 25;
        }
        else {
            pontos = 10;
        }
    }
    else if (numero >= 1) {
        pontos = 50;
    }
    else {
        pontos = 20;
    }
    console.log("Você ganhou " + pontos + " pontos!");
}
