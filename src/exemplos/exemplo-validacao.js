/** 
 * Caso algum dos Ids abaixo não esteja presente no index.html, a função não vai retornar os itens e isso pode causar erros no resto do arquivo.
*/
const button3 = document.getElementById('button'); 
const input13 = document.getElementById('input1');
const input23 = document.getElementById('input2');

/** 
 * A função abaixo não valida se os itens somados são número. Logo situações inesperadas podem ocorrer.
 * Por exemplo, somarSemValidar(1, "3") vai devolver "13"
*/
function somarSemValidar(numero1, numero2) {
    return numero1 + numero2;
}

button3.addEventListener('click', () => {
    console.log(somarSemValidar(input13.value, input23.value));
});

/** 
 * Na função abaixo uma validação é feita para confirmar se os itens são números e é feita uma conversão caso não sejam.
*/
function somarValidando(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return +numero1 + +numero2;
    } else {
        return numero1 + numero2;
    }
}

button3.addEventListener('click', () => {
    console.log(printarSomaValida(input13.value, input23.value));
}); 