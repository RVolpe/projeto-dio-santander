"use strict";
const button4 = document.getElementById('button');
const input14 = document.getElementById('input1');
const input24 = document.getElementById('input2');
/**
 * Exemplo de função com parâmetros tipados
 */
function somaValidaComPrint(numero1, numero2, printarResultado, frase) {
    const resultado = numero1 + numero2;
    if (printarResultado) {
        console.log(frase + resultado);
    }
    return resultado;
}
// A variável abaixo tem seu tipo inferido pelo valor inicial
let printarResultado = true;
// já nesse caso estamos dizendo explicitamente qual é o seu tipo
let frase4;
// E só depois iniciamos ela com um valor
frase4 = "O número é ";
// Como a busca pelo button na linha 1 pode trazer um null (já que esse id pode não estar presente no index.html), é importante confirmar se ele tem um valor
if (button4) {
    button4.addEventListener('click', () => {
        console.log(somaValidaComPrint(Number(input14.value), Number(input24.value), printarResultado, frase4));
    });
}
