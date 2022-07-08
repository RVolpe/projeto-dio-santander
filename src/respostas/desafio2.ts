enum ProfissaoNew {
    Atriz,
    Padeiro
}

interface PessoaNew {
    nome: string,
    idade: number,
    profissao: ProfissaoNew
};

let pessoa1: PessoaNew = {
    nome : "maria",
    idade: 29,
    profissao : ProfissaoNew.Atriz
};

let pessoa2: PessoaNew = {
    nome : "roberto",
    idade: 19,
    profissao : ProfissaoNew.Padeiro
};

let pessoa3: PessoaNew = {
    nome : "laura",
    idade: 32,
    profissao : ProfissaoNew.Atriz
};

let pessoa4: PessoaNew = {
    nome : "carlos",
    idade: 19,
    profissao : ProfissaoNew.Padeiro
};
