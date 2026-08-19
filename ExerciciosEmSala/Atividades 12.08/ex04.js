let carro = {
    cor: "branco",
    modelo: "kwid",
    potencia: "1.0",
    motoristas: ["oliver", "laura"],
    potenciaCombustivel: {gasolina:"130cv", alcool:"135cv"}
};

carro.portas = 4;

console.log(
    carro.cor + " - " + carro.modelo + " - " + carro.potencia + " - " + carro.portas + " - " + carro.motoristas[0] + " - " + carro.motoristas[1] + " - " + carro.potenciaCombustivel.gasolina + " - " + carro.potenciaCombustivel.alcool
);