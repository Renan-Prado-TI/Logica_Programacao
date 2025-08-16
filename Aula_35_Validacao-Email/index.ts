var email: string = "joao@teste.com.br"
var valido: boolean = true
var posicaoArroba: number = email.indexOf("@")

//Não tem @ ou esta na posição 0
if (posicaoArroba <= 0) {
    valido = false
}

//Não tem ponto depois do @
var posicaoPonto: number = email.indexOf(".", posicaoArroba + 1)
if (posicaoPonto >= posicaoArroba + 1) {
    valido = false
}

//Começa com numero
var primeiroCaractere: string = email.charAt(0)
if (primeiroCaractere >= "0" && primeiroCaractere <= "9") {
    valido = false
}

console.log("Email válido: ", valido)