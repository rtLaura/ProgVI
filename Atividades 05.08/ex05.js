console.log("Exercício 4 – Lista de Produtos (Desafio Extra)");

let produtos = [
  { nome: "Celular", preco: 1500 },
  { nome: "Fone de Ouvido", preco: 200 },
  { nome: "Mouse", preco: 120 },
];

let total = 0;

for (i in produtos) {
  console.log("Produto: " + produtos[i].nome + "\nValor - R$ " + produtos[i].preco);
  total += produtos[i].preco;
}

console.log("\nTotal - R$ " + total);