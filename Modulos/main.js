"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importando metodos
var calculadora_1 = require("./calculadora");
var calculadora_2 = require("./calculadora");
console.log((0, calculadora_1.suma)(10, 154));
console.log((0, calculadora_1.resta)(calculadora_2.Pi, 1)); // estoy implementando un metodo y una constante heredado de un archivo
//se compila solo el archivo main.ts para que se haga extensiva esa compilacion al archivo calculadora.ts porque la estoy invocando desde el primer archivo
