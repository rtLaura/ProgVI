/*Crie uma array function que imprima o dobro do número*/

let numeros = [1, 2, 3, 4]

for(let i = 0; i<numeros.length; i++){
    console.log("Número: "+numeros[i]);
}

let mult = (numeros) => {
    for (let i in numeros){
        console.log(numeros[i]*2);
    }
};

mult(numeros);

