import * as promptSync from "prompt-sync";
var prompt = promptSync();

var notal: number = parseFloat(prompt("Nota 1: "));
var notab: number = parseFloat(prompt("Nota 2: "));
var notac: number = parseFloat(prompt("Nota 3: "));
var notad: number = parseFloat(prompt("Nota 4: "));

var media: number = (notal + notab + notac + notad) / 4;

if (media >= 6) {
  console.log("Aprovado");
} else {
  var notaRecuperacao: number = parseFloat(prompt("Nota de recuperação: "));
  if (notaRecuperacao >= 6) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}
