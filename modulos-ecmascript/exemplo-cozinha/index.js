// import cozinha from "./cozinha/principal.js";
// console.log(cozinha);

// import receita from "./cozinha/receita.js";
// const r = receita(["arroz, feijão"], cozinha.cortar, cozinha.assar);
// console.log(r)

import refeicao from "./cozinha/refeicao.js";
// console.log(refeicao)

const vouComerNoAlmoco = refeicao("Almoço");
const vouComerNoJantar = refeicao("Jantar");

vouComerNoAlmoco("arroz", "feijão", "batata")
vouComerNoJantar("arroz", "feijão", "alface")