const lingua = "pt"
let saudacoes;

if(lingua === "pt") {
    saudacoes = require("./pt")
} else if (lingua === "en") {
    saudacoes = require("./en")
}

console.log(saudacoes.manha);
console.log(saudacoes.tarde);
console.log(saudacoes.noite);