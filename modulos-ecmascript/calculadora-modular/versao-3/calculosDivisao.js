import { resto } from "./calculosComplementares.js"

function div(a, b) {
    return a / b;
}

export default function textoDivisao(a, b) {
    return `A divisão de ${a} por ${b} é ${div(a, b)} e o resto é ${resto(a, b)}`;
}
