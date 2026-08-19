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