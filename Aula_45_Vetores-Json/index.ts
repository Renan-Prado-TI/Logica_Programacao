const clientes: { nome: string, cpf: string, dataNascimento: string, email: string, aposentado: boolean }[] = [
    {
    nome: "João",
    cpf: "123.456.789-01",
    dataNascimento: "2000-01-01",
    email: "joão@gmail.com",
    aposentado: false
    },
    {
    nome: "Carmen",
    cpf: "123.456.789-01",
    dataNascimento: "2000-01-01",
    email: "carmen@gmail.com",
    aposentado: false
    },
    {
    nome: "Juca",
    cpf: "123.456.789-01",
    dataNascimento: "2000-01-01",
    email: "juca@gmail.com",
    aposentado: true
    }
]

for (var i = 0; i < clientes.length; i++) {
    var cliente = clientes[i]
    if (cliente.aposentado === true) {
        var anoCliente: number = parseInt(cliente.dataNascimento.substring(0, 4))
        var anoAtual: number = new Date().getFullYear()
        var idade: number = anoAtual - anoCliente
        console.log(`A idade do cliente: ${cliente.nome} é ${idade}`)
    }
}