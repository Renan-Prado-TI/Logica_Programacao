var nome: string = "Renan Prado"


console.log(nome.length) //Imprimir o tamanho da string

console.log(nome.toLowerCase()) //Imprimir a string em minusculo

console.log(nome.toUpperCase()) //Imprimir a string em maiusculo

console.log(nome.charAt(0)) //Imprimir a primeira letra da string

console.log(nome.charAt(0).toLowerCase()) //Imprimir a primeira letra da string em minusculo
console.log(nome.toLocaleLowerCase().charAt(0))

console.log("Posição do espaço: ", nome.indexOf(" ")) //Verificar a posição do espaço na string
var posicaoDoEspaco: number = nome.indexOf(" ")
console.log("Pedaço da String: ", nome.substring(0, posicaoDoEspaco)) //Imprimir pedaço da string

var primeiroNome: string = "Renan"
var ultimoNome: string = "Prado"
console.log(primeiroNome + " " + ultimoNome)