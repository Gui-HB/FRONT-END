console.log

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce(function(acumulador, numero) {return acumulador + numero;}, 0);3

console.log("A soma dos números é de: ", soma);

let soma2 = 0;

for(let i = 0; i < numeros.length; i++) {
    soma2 += numeros[i];
}

console.log("A soma dos números é de: ", soma2);