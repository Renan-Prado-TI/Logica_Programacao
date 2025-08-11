"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
console.log("Metodo 1");
var contador = 1;
while (contador <= 100) {
    if (contador % 2 == 0) {
        console.log(contador);
    }
    contador++;
}
console.log("Metodo 2");
var contador = 2;
while (contador <= 100) {
    console.log(contador);
    contador += 2;
}
var a = 5;
var b = 8;
while (b <= 20) {
    b = b + 3;
    if (b % 2 == 0) {
        a = a + b;
    }
}
console.log(a);
