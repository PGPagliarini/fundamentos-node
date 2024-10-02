const obj = {
    texto: "bom dia",
    num: 5,
    pessoa: {
        nome: "Maria",
        idade: 45
    }
};
console.log(obj.pessoa.nome);

obj.pessoa = {
    nome: "Pedro",
    idade: 32
}
console.log(obj.pessoa.nome);

obj.pessoa.corFavorita = "Vermelho"
console.log(obj.pessoa)