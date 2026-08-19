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