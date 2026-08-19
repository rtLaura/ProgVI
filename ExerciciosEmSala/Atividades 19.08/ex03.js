/*refaça o exercicio 1, agora use o map para fazer o triplo dos valores e em seguida use o próprio map para imprimir o novo vetor*/
var numeros = [2, 4, 6, 8, 10];

var mult = numeros.map((elem) => elem * 3);

mult.map((elem) => console.log(elem));