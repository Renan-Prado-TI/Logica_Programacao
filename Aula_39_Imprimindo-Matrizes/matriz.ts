var matrizona: number [][] = [[], []]

matrizona[0] = [10, 20, 30, 40]
matrizona[1] = [90, 100, 110, 120]

console.log(matrizona)

for(var linha: number = 0; linha < matrizona.length; linha++){
    var linhaAtual: number [] = matrizona[linha]
    for(var coluna: number = 0; coluna < linhaAtual.length; coluna++){
        console.log(matrizona[linha][coluna])
    }
}