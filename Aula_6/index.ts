import * as promptSync from 'prompt-sync';

var prompt = promptSync();

var numero1: number = parseInt(prompt("Digite um numero: "));
var numero2: number = parseInt(prompt("Digite outro numero: "));

console.log(numero1, numero2);

var resultado: number 
resultado = numero1 + numero2;
console.log(resultado);