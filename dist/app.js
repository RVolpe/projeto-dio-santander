"use strict";
//input
let soma = document.getElementById('soma');
//botões
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
//Saldo
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal;
limparCampoSoma();
limparSaldo();
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.innerHTML = "";
}
function limparSaldo() {
    saldoTotal = 0;
    if (campoSaldo)
        campoSaldo.innerHTML = '0';
}
