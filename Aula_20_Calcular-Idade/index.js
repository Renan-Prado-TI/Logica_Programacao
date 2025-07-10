"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var dia = parseInt(prompt("Digite o dia do Nascimento: "));
var mes = parseInt(prompt("Digite o mês do Nascimento: "));
var ano = parseInt(prompt("Digite o ano do Nascimento: "));
var hoje = new Date();
var diaHoje = hoje.getDate();
var mesHoje = hoje.getMonth() + 1; // getMonth()
var anoHoje = hoje.getFullYear();
console.log("Hoje é: ", diaHoje, "/", mesHoje, "/", anoHoje);
var idade = anoHoje - ano;
if (mes > mesHoje) {
    idade = idade - 1;
}
else if (mes == mesHoje) {
    if (dia > diaHoje) {
        idade = idade - 1;
    }
}
console.log("Sua idade é: ", idade);
