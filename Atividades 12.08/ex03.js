/*Crie uma função anônima que verifique se o número é par*/

var numero = 4;

par = num => {
    if(num%2 == 0){
        console.log("O número é par")
    }
    else {
        console.log("O número é ímpar")
    }
};

par(numero)