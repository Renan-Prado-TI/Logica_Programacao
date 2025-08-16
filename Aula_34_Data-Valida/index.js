"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var data = prompt("Digite a data de nascimento (dd/mm/aaaa): ");
var posicaoPrimeiraBarra = data.indexOf("/");
var posicaoSegundaBarra = data.lastIndexOf("/");
if (posicaoPrimeiraBarra >= 1 && posicaoSegundaBarra >= 3 && posicaoPrimeiraBarra != posicaoSegundaBarra) {
    var dia = parseInt(data.substring(0, posicaoPrimeiraBarra));
    var mes = parseInt(data.substring(posicaoPrimeiraBarra + 1, posicaoSegundaBarra));
    var ano = parseInt(data.substring(posicaoSegundaBarra + 1));
    var maxDias = 31;
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            maxDias = 31;
            break;
        case 2:
            maxDias = 28; //Todo: Regra Bissexto
            // Se o ano for bissexto, maxDias = 29
            if (ano % 4 == 0 && ano % 100 != 0) {
                maxDias = 29;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            maxDias = 30;
            break;
    }
    if ((dia >= 1 && dia <= maxDias) && (mes >= 1 && mes <= 12) && !isNaN(ano) == false) {
        console.log("Data válida");
    }
    else {
        console.log("Data inválida");
    }
}
else {
    console.log("Digite a data no formato (dd/mm/aaaa)");
}
