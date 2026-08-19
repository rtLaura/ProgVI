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