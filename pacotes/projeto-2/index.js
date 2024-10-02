import pensador from "pensador-scrap";
import fs from "fs";

const autor = "Jesus Cristo"
const { error, success } = await pensador.search({
    query: autor,
    limit: 12
})

// console.log(error);
// console.log(success);

const pensamentos = success.thought;
const indiceAleatorio = Math.floor(Math.random() * pensamentos.length);
const pensamentoSelecionado = pensamentos[indiceAleatorio].content

// console.log(pensamentoSelecionado);

const pensamentoPraSalvar = `Pensamento de ${autor} -> ${pensamentoSelecionado}\n`;
// console.log(pensamentoPraSalvar);

// fs.writeFileSync("frases.txt", pensamentoPraSalvar, "utf-8"); apaga o que tem e reescreve em cima */
fs.appendFileSync("frases.txt", pensamentoPraSalvar, "utf-8"); /* escreve o que precisa no final do arquivo sem reescrever em cima */

const texto = fs.readFileSync("frases.txt", "utf-8"); /* faz a leitura do arquivo "frases.txt" */
console.log(texto);