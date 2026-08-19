/*Converta a temperatura de celsius para Fahrenheit (f = c * 1,8 + 32) e imprima o novo vetor*/
var temperatura = [18, 32, 25, 7];
var fahrenheit = temperatura.map((temp) => temp * 1.8 + 32);

for (var i = 0; i <= fahrenheit.length; i++) {
    console.log(fahrenheit[i]);
}