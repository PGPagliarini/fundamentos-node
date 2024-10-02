const {soma, subtracao, texto} = require("./calculosBasicos");
const complementares = require("./calculosComplementares");
const {pot, resto} = complementares;
const textoConflitante = complementares.texto;
// const textoConflitante = require("./calculosComplementares").texto
const { textoDivisao } = require("./calculosDivisao");

let x, y;
x = 20;
y = 3;

console.log(soma(x, y));
console.log(subtracao(x, y));
console.log(texto);
console.log(pot(x, y));
console.log(resto(x, y));
console.log(textoConflitante);
console.log(textoDivisao(x, y));