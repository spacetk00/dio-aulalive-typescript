"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = 5;
let stringTeste = "verificar";
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = "opa";
unknownValor = true;
let stringTeste2 = "agora vai";
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
