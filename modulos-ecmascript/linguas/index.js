import pt from "./pt.js"
import en from "./en.js"
// const lingua = "pt"
const lingua = "en"
let modulo;

if(lingua === "pt") {
    modulo = pt;
} else if (lingua === "en") {
    modulo = en;
}

console.log(modulo.manha);
console.log(modulo.tarde);
console.log(modulo.noite);