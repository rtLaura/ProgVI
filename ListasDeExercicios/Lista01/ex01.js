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