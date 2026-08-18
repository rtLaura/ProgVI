function calcularExpressao() {
    let A = parseFloat(prompt("Valor de A: "));
    let B = parseFloat(prompt("Valor de B: "));
    let C = parseFloat(prompt("Valor de C: "));

    let R = Math.pow(A + B, 2);
    let S = Math.pow(B + C, 2);
    let D = (R + S) / 2;

    alert("Resultado de D: " + D);
    return D;
}
calcularExpressao();