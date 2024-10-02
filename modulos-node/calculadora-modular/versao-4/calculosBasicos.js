const info = "Sou o módulo calculosBasicos";

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

module.exports = {
    texto: info,
    soma,
    subtracao
}