var email = "joao@teste.com.br";
var valido = true;
var posicaoArroba = email.indexOf("@");
//Não tem @ ou esta na posição 0
if (posicaoArroba <= 0) {
    valido = false;
}
//Não tem ponto depois do @
var posicaoPonto = email.indexOf(".", posicaoArroba + 1);
if (posicaoPonto == -1) {
    valido = false;
}
console.log("Email válido: ", valido);
