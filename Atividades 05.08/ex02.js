console.log("Exercício 1 – Percorrendo um Vetor com for");

let numeros = [5, 10, 15, 20, 25];
let linha = [];

for (let i = 0; i < numeros.length; i++) {
  linha.push(numeros[i] * 2);
}

console.log(linha);