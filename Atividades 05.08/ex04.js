console.log("Exercício 3 – Trabalhando com Objetos");

let aluno = {
  nome: "Laura",
  idade: 17,
  notas: [8, 7, 9],
};

let soma = 0;
let media = 0.0;

for (let i in aluno.notas) {
  soma += aluno.notas[i];
}

media = soma / aluno.notas.length;
situacao = "Reprovado!";

if (media >= 6) {
  situacao = "Aprovado!";
}

console.log(
  "Nome: " + aluno.nome + "  Média: " + media + "  Status: " + situacao,
);
