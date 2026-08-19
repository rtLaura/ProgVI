/*Crie 3 vetores com 5 elementos, um para nomes, idades, outro para notas
Imprima o primiro vetor com os nomes com as respectivas idades e no fim imprima as notas.
Utilize  o laço de repetição WHILE, FOR e o FOR DINÂMICO
No laço WHILE, crie uma função soma para imprimir a idade somando 10 anos
No FOR DINÂMICO, crie uma função chamada "mult" e faça uma multiplicação das notas*/

let alunos = ["A", "B", "C", "D", "E"];
let idades = [15, 16, 17, 18, 19];
let notas = [10, 9, 8, 7, 6];

for(let i = 0; i<alunos.length; i++){
    console.log("Nome: "+alunos[i] + "  Idade: "+idades[i] + "  Nota: "+notas[i])
}

var soma = function(idades){
    let cont = 0;
    while (cont < idades.length){
        console.log(idades[i] + 10);
        cont++;
    }
};

let mult = (notas) => {
    for (let i in notas){
        console.log((notas[i]*2)/5);
    }
};

mult(notas);