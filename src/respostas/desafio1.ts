// Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'João'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'João'
}

// Respostas 3 e 4
interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}