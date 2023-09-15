const numeros = [1,2,2,3,3,4,5,5]
const unicos = [];

for(let i = 0; i < numeros.length; i++) {
    if (!unicos.includes(numeros[i])) {
        unicos.push(numeros[i])
    }
};

console.log("Elementos Únicos: ", unicos.length);