/*7) Faça uma função que receba um array com a idade de 10 pessoas e que 
calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 
anos. Utilize arrow function. */
const maioresIdade = (idades) => {
    let quantidadeMaiores = 0;

    for (let i = 0; i < idades.length; i++) {
        if (idades[i] >= 18) {
            quantidadeMaiores++;
        }
    }

    return quantidadeMaiores;
};

let idades = [];

for (let i = 0; i < 10; i++) {
    idades.push(parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ": ")));
}

alert("Total de maiores de idade: " + maioresIdade(idades));