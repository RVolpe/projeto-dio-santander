//input
let soma = document.getElementById('soma') ! as HTMLInputElement;

//botões
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');

//Saldo
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal: number;

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

function somarAoSaldo(soma: number): void{
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma(): void {
    soma.innerHTML = "";
}

function limparSaldo(): void {
    saldoTotal = 0;
    if (campoSaldo)
        campoSaldo.innerHTML = '0';
}
