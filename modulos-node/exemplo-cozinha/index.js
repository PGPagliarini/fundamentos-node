// const acoes = require("./cozinha/acoesCozinhar");
// const {alimentos} = require("./cozinha/alimentos");

// console.log(acoes.cozinhar(alimentos[4]));

// const cozinha = require("./cozinha");
// console.log(cozinha.ferver(cozinha.alimentos[2]));

// const receita = require("./receita");
// console.log(receita(["carne", "alface"], cozinha.cortar, cozinha.assar));

const refeicao = require("./refeicao")("Almoço");
refeicao("arroz", "feijão", "alface");
const refeicao2 = require("./refeicao")("Jantar");
refeicao2("arroz", "feijão", "batata");