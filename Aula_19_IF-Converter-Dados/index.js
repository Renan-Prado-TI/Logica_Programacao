"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var mes = prompt("Digite o mês (1-12): ");
if (mes == 1) {
    console.log("Janeiro");
}
else if (mes == 2) {
    console.log("Fevereiro");
}
else if (mes == 3) {
    console.log("Março");
}
else if (mes == 4) {
    console.log("Abril");
}
else if (mes == 5) {
    console.log("Maio");
}
else if (mes == 6) {
    console.log("Junho");
}
else if (mes == 7) {
    console.log("Julho");
}
else if (mes == 8) {
    console.log("Agosto");
}
else if (mes == 9) {
    console.log("Setembro");
}
else if (mes == 10) {
    console.log("Outubro");
}
else if (mes == 11) {
    console.log("Novembro");
}
else if (mes == 12) {
    console.log("Dezembro");
}
else {
    console.log("Mês inválido. Por favor, digite um número entre 1 e 12.");
}
