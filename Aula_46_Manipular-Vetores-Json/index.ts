import * as promptSync from "prompt-sync"
const prompt = promptSync()

type Cliente = {
    id: number,
    nome: string,
    aposentado: boolean
}

// Criar um vetor de objeto
var Clientes: Cliente[] = []

// Cadastrar clientes
while (true) {
    var id: number = parseInt(prompt("Digite o ID do cliente (0 para sair): "))
    if (id == 0) break
    var nome: string = prompt("Digite o nome do cliente: ")
    var aposentadoTexto: string = prompt("Digite se o cliente é aposentado (sim/não): ")
    var aposentado: boolean = (aposentadoTexto.toUpperCase() == "SIM") ? true : false

    var cliente: Cliente = {id, nome, aposentado}
    Clientes.push(cliente)
}

console.log(Clientes)

// Busca de Clientes
var nomeBuscado: string = prompt("Digite o nome do cliente para buscar: ")
var encontrou: boolean = false
for (var i: number = 0; i < Clientes.length; i++) {
    var cliente: Cliente = Clientes[i]
    var nomeCliente: string = cliente.nome.toLocaleUpperCase()
    if (nomeCliente.indexOf(nomeBuscado.toLocaleUpperCase()) >= 0) {
        console.log("Cliente encontrado: ", cliente)
        encontrou = true
    }
}

if (encontrou == false) {
    console.log("Cliente nao encontrado")
}