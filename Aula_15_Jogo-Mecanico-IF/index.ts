import * as promptSync from "prompt-sync";
var prompt = promptSync();

var numero: number = parseFloat(
  prompt("Digite um número para ganhar pontos: ")
);
if (isNaN(numero)) {
  console.log("Erro: Você deve digitar um número válido.");
} else {
  var pontos: number;
  if (numero >= 8) {
    if (numero >= 15) {
      pontos = 5;
    } else {
      pontos = 10;
    }
  } else if (numero >= 5) {
    pontos = 50;
  } else {
    pontos = 30;
  }

  console.log("Você ganhou " + pontos + " pontos!");
}
