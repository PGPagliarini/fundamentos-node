const calculos = require("./calculos");
// console.log(calculos)

const {texto, soma, subtracao} = require("./calculos");
// const {texto, soma, subtracao} = calculos;

let x, y;
x = 10;
y = 5;

console.log(soma(x, y));
// console.log(calculos.soma(x, y));
console.log(subtracao(x, y));
console.log(texto);