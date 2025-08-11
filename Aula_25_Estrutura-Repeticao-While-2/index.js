"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var contador = 1;
while (contador <= 100) {
    console.log(contador);
    contador++;
}
