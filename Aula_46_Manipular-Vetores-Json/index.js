"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
// Criar um vetor de objeto
var Clientes = [];
// Cadastrar clientes
while (true) {
    var id = parseInt(prompt("Digite o ID do cliente (0 para sair): "));
    if (id == 0)
        break;
    var nome = prompt("Digite o nome do cliente: ");
    var aposentadoTexto = prompt("Digite se o cliente é aposentado (sim/não): ");
    var aposentado = (aposentadoTexto.toUpperCase() == "SIM") ? true : false;
    var cliente = { id: id, nome: nome, aposentado: aposentado };
    Clientes.push(cliente);
}
console.log(Clientes);
// Busca de Clientes
var nomeBuscado = prompt("Digite o nome do cliente para buscar: ");
var encontrou = false;
for (var i = 0; i < Clientes.length; i++) {
    var cliente = Clientes[i];
    var nomeCliente = cliente.nome.toLocaleUpperCase();
    if (nomeCliente.indexOf(nomeBuscado.toLocaleUpperCase()) >= 0) {
        console.log("Cliente encontrado: ", cliente);
        encontrou = true;
    }
}
if (encontrou == false) {
    console.log("Cliente nao encontrado");
}
