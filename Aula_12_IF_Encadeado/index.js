"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var notal = parseFloat(prompt("Nota 1: "));
var notab = parseFloat(prompt("Nota 2: "));
var notac = parseFloat(prompt("Nota 3: "));
var notad = parseFloat(prompt("Nota 4: "));
var media = (notal + notab + notac + notad) / 4;
if (media >= 6) {
    console.log("Aprovado");
}
else {
    var notaRecuperacao = parseFloat(prompt("Nota de recuperação: "));
    if (notaRecuperacao >= 6) {
        console.log("Aprovado");
    }
    else {
        console.log("Reprovado");
    }
}
