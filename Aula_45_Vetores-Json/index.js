var clientes = [
    {
        nome: "João",
        idade: 25,
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
];
for (var i = 0; i < clientes.length; i++) {
    var cliente = clientes[i];
    if (cliente.aposentado === true) {
        var anoCliente = parseInt(cliente.dataNascimento.substring(0, 4));
        var anoAtual = new Date().getFullYear();
        var idade = anoAtual - anoCliente;
        console.log("A idade do cliente: ".concat(cliente.nome, " \u00E9 ").concat(idade));
    }
}
