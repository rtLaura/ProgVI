console.log("Exercício 2 – Somando Valores de um Vetor");

const prompt = require("prompt-sync")();

let vetorSoma = [];
let soma = 0;

for (let i = 0; i < 0; i++) {
  vetorSoma.push(parseInt(prompt("Digite um número: ")));
  soma += vetorSoma[i];
}

console.log(soma);