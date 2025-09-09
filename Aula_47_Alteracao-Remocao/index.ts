type Cliente = {
    id: number;
    nome: string;
}

var clientes: Cliente [] = [
    {
        id: 1,
        nome: "Joao"
    },
    {
        id: 2,
        nome: "Maria"
    },
    {
        id: 3,
        nome: "Juca"
    },
    {
        id: 4,
        nome: "Carmen"
    }
]

//Alterar um objeto. Alterar o nome
for (var i: number = 0; i < clientes.length; i++) {
    var cliente: Cliente = clientes[i];
    if (cliente.nome.toLocaleUpperCase() == "MARIA") {
        cliente.nome = "Maria Clara";
    }
}

console.log('Lista de clientes alterada');
console.log(clientes);


for (var i: number = 0; i < clientes.length; i++) {
    var cliente: Cliente = clientes[i];
    if (cliente.nome.toLocaleUpperCase() == "MARIA CLARA") 
        {
        clientes.splice(i, 1);
    }
}

console.log('Lista de clientes removida');
console.log(clientes);
