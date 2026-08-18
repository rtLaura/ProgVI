/*1) Escreva uma função que leia três número inteiros e positivos (A, B, C) e 
calcule a seguinte expressão:*/
function calcularExpressao() {
    let A = parseInt(prompt("Valor de A: "));
    let B = parseInt(prompt("Valor de B: "));
    let C = parseInt(prompt("Valor de C: "));

    let R = Math.pow(A + B, 2);
    let S = Math.pow(B + C, 2);
    let D = (R + S) / 2;

    alert("Resultado de D: " + D);
    return D;
}
calcularExpressao();

/*2) Construa uma função chamada “distancia” que, tendo como entrada dois 
pontos quaisquer no plano, P1(x1, y1) e P2(x2,y2), escreva a distância 
entre eles.*/ 
function distancia() {
    let x1 = parseFloat(prompt("Coordenada x1: "));
    let y1 = parseFloat(prompt("Coordenada y1: "));
    let x2 = parseFloat(prompt("Coordenada x2: "));
    let y2 = parseFloat(prompt("Coordenada y2: "));

    let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    alert("DistÂncia entre os pontos: " + d);
    return d;
}
distancia();

/*3)  Maria quer saber quantos litros de gasolina precisa colocar em seu carro 
e quanto vai gastar para fazer uma viagem até a casa de sua irmã. Crie 
uma função chamada “calculaViagem” que receba como parâmetros: a 
distância que maria irá percorrer, o consumo do carro e o valor do 
combustível. A função deve indicar a quantidade de combustível que 
precisa ser abastecida e o custo da viagem.*/
function calculaViagem(distancia, consumo, valorCombustivel) {
    let litrosNecessarios = distancia / consumo;
    let custoTotal = litrosNecessarios * valorCombustivel;

    console.log("Litros necessários: " + litrosNecessarios);
    console.log("Custo da viagem: R$ " + custoTotal);

    return custoTotal;
}

calculaViagem(300, 10, 6);

/*4) Chico tem 1,50 metros de altura e cresce 2 centímetros por ano, enquanto 
Zé tem 1,10 metros e cresce 3 centímetros por ano. Construa uma função 
que recebe as alturas de Chico e Zé e retorne quantos anos serão 
necessários para que Zé seja maior que Chico.*/
function calculaAnos() {
    let alturaChico = parseFloat(prompt("Altura de Chico em metros: "));
    let alturaZe = parseFloat(prompt("Altura de Zé em metros: "));

    let anos = 0;

    while (alturaZe <= alturaChico) {
        alturaChico += 0.02; 
        alturaZe += 0.03;  
        anos++;
    }

    alert("Serão necessários " + anos + " anos para Zé ser maior que Chico.");
    return anos;
}
calculaAnos();

/*5) Faça uma função que receba a data de nascimento de uma pessoa (dia, 
mês e ano) e retorne à idade da pessoa expressa em dias.*/
function calcularIdade() {
    let dia = parseInt(prompt("Número de dias: "));
    let mes = parseInt(prompt("Número de meses: "));
    let ano = parseInt(prompt("Número de anos: "));

    let diasTotais = (ano * 365) + (mes * 30) + dia;

    alert("Idade em dias: " + diasTotais);
    return diasTotais;
}
calcularIdade();

/*6) Faça uma função que receba o tempo de duração de um evento em 
segundos e mostre-o expresso em horas, minutos e segundos. Use um 
array para retornar o horário.*/
function converterTempo() {
    let tempoSegundos = parseInt(prompt("Tempo do evento em segundos: "));

    let horas = Math.floor(tempoSegundos / 3600);
    let resto = tempoSegundos % 3600;
    let minutos = Math.floor(resto / 60);
    let segundos = resto % 60;

    let resultado = [horas, minutos, segundos];

    alert("Tempo: " + horas + "h " + minutos + "m " + segundos + "s");
    return resultado;
}
converterTempo();

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