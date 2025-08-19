var vetorzao: number[] = []
vetorzao[0] = 12
vetorzao[1] = 20
vetorzao[2] = 13
vetorzao[0] = 25


//console.log(vetorzao.length)
//console.log(vetorzao[0])

var matrizona: number[][] = [[], []]
matrizona[0][0] = 10
matrizona[0][1] = 19
matrizona[1][0] = 39
matrizona[1][1] = 27

vetorzao.push(45)
//console.log(vetorzao.length)
//console.log(vetorzao)

//Adicionando uma nova linha na matriz
matrizona.push([26, 49])
//Adicionando uma nova coluna na matriz
matrizona[2].push(67)
console.log(matrizona)

//Imprimir todos os elementos do vetor
for (var i: number = 0; i < vetorzao.length; i++) {
    console.log(vetorzao[i])
}