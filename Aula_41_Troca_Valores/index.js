var vetor = [60, 80, 70, 90, 120];
console.log("Antes", vetor);
var primeiroValor = vetor[0];
for (var i = 0; i < vetor.length - 1; i++) {
    vetor[i] = vetor[i + 1];
}
vetor[vetor.length - 1] = primeiroValor;
console.log("Depois", vetor);
