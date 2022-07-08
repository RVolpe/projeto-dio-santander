"use strict";
var ProfissaoNew;
(function (ProfissaoNew) {
    ProfissaoNew[ProfissaoNew["Atriz"] = 0] = "Atriz";
    ProfissaoNew[ProfissaoNew["Padeiro"] = 1] = "Padeiro";
})(ProfissaoNew || (ProfissaoNew = {}));
;
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: ProfissaoNew.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: ProfissaoNew.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: ProfissaoNew.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: ProfissaoNew.Padeiro
};
