let iphone = "Iphone",
    valorIphone = 6000,
    totalIphone = 18000;
let xbox = "Xbox",
    valorXbox = 4500,
    totalXbox = 9000;
let notebook = "Notebook",
    valorNotebook = 8000,
    totalNotebook = 24000;

/*
console.log(iphone + ", Valor unitáio: "+valorIphone + ", Total da compra: " + totalIphone);
console.log(xbox + ", Valor unitáio: "+valorXbox + ", Total da compra: " + totalXbox);
console.log(notebook + ", Valor unitáio: "+valorNotebook + ", Total da compra: " + totalNotebook);
*/

/*
let resultadoIphone = `${iphone}, valor unitário: ${valorIphone}, Total da compra: ${totalIphone}`;
let resultadoXbox = `${xbox}, valor unitário: ${valorXbox}, Total da compra: ${totalXbox}`;
let resultadoNotebook = `${notebook}, valor unitário: ${valorNotebook}, Total da compra: ${totalNotebook}`;
console.log(resultadoIphone+"\n"+resultadoXbox+"\n"+resultadoNotebook);
*/

function exibeMensagem(nomeProduto, valorProduto, quantidade) {
    let retorno = `${nomeProduto}, valor unitário: ${valorProduto}, Quantidade: ${quantidade}`;
    console.log(retorno);
}

exibeMensagem('Iphone', 6000, 3);
