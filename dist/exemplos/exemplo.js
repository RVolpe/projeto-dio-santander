"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function soma2Numeros2(num1, num2, devePrintar, frase) {
    let resultado = num1 + num2;
    if (devePrintar)
        console.log(frase + resultado);
    return resultado;
}
let devePrintar = true;
let frase = 'O valor é: ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(soma2Numeros2(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
