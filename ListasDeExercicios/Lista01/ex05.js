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