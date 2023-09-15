const numeros = [10, 5, 8, 20, 3]

let maior = numeros[0];

for(let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior)
        maior = numeros[i];
};

console.log("A soma dos números é de: ", maior);