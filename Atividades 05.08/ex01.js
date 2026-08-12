let nomes = [
  { nome: "Oliver", idade: 999, nota: 10 },
  { nome: "Mimi", idade: 2, nota: 9 },
  { nome: "Michi", idade: 18, nota: 5 },
];

console.log("~~~~~Maior de Idade com nota 6+~~~~~");
for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].idade >= 18 && nomes[i].nota >= 6) {
    console.log(
      "Nome: " + nomes[i].nome + " - " + nomes[i].idade + " - " + nomes[i].nota,
    );
  }
}

console.log("\n");

console.log("~~~~~Menor de Idade com nota 6+~~~~~");
for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].idade < 18 && nomes[i].nota > 6) {
    console.log(
      "Nome: " + nomes[i].nome + " - " + nomes[i].idade + " - " + nomes[i].nota,
    );
  }
}

console.log("\n");