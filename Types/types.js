"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Resultado equivalente a:
// {
//   readonly nombre: string;
//   readonly edad: number;
// }
var persona = {
    nombre: "vivi",
    edad: 34,
};
console.log(persona.nombre);
function esNumero(valor) {
    return (typeof valor === "number");
}
var resultado1 = esNumero(42); // true
var resultado2 = esNumero("hello"); // false
console.log(resultado1);
console.log(resultado2);
// Los types son una forma de estructurar datos,no tienen equivalencia directa en JavaScript.
// Esto significa que puedes utilizarlos ampliamente durante el desarrollo,
// pero al compilar tu código a JavaScript, estos desaparecen sin dejar rastro,
// a menos que crees un objeto basado en ellos.
