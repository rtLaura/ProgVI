/*Percorra o vetor numeros = [2, 4, 6, 8, 10] com a função MAP*/

var numeros = [2, 4, 6, 8, 10];
var divisao = numeros.map((elem) => elem / 2);

for (var i = 0; i < numeros.lenght; i++) {
    console.log(divisao[i])
}